import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
    Box,
    MenuItem,
    Grid,
    Badge,
    ButtonGroup,
    IconButton,
    Autocomplete,
    TextField,
    Button,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { toast } from "react-toastify";
import { StateContext } from "../../../../store";

import { MyText } from "../../..";
import ROUTES from "../../../../routes";
import ThemeMain from "../../../../theme";
import API from "../../../../api";

const BottomBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
}));

const BottomBarItem = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const GridMidle = styled(Grid)(({ theme }) => ({
    display: "flex",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        background: "red",
        color: "white",
    },
    marginRight: 10,
}));

interface BottomProps {
    handleDrawerOpen: any;
    handleLoginOpen: any;
    handleFavoritesDrawerOpen: any;
    setLoading: any;
}

const Bottom: React.FC<BottomProps> = ({
    handleDrawerOpen,
    handleLoginOpen,
    handleFavoritesDrawerOpen,
    setLoading,
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [basketCount, setBasketCount] = useState(0);

    const [AutoCompliteData, setAutoCompliteData] = useState([]);

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");
    const basketStatus = useContext(StateContext);

    const onSubmit = async (event: any, values: any) => {
        setLoading(true);
        await API.productsSearch(values)
            .then((res) => {
                navigate(ROUTES.SEARCH_PAGE, {
                    state: { data: res.data, title: values },
                });
            })
            .catch((error) => {
                toast.error("error");
            });
        setLoading(false);
    };

    const handleAutoComplite = (e: any) => {
        setSearchValue(e.target.value);
        API.getAutoComplite(e.target.value)
            .then((res) => {
                const newData = res.data.map((item: any) => {
                    return item.name;
                });
                setAutoCompliteData(newData);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (jwttoken) {
            API.getCartsList()
                .then((res) => {
                    setBasketCount(res.data.total_qnt);
                    console.log("effect");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [basketStatus.basket.status, jwttoken]);

    return (
        <BottomBar>
            <BottomBarItem sx={{ mr: 2 }}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => handleDrawerOpen()}
                >
                    <MenuIcon sx={{ color: "#55CD61" }} fontSize="large" />
                </IconButton>
            </BottomBarItem>
            <BottomBarItem
                sx={{
                    width: "100%",

                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <ButtonGroup sx={{ width: "100%" }}>
                    <Autocomplete
                        sx={{ width: "100%" }}
                        id="free-solo-2-demo"
                        freeSolo
                        size="small"
                        options={AutoCompliteData}
                        onInputChange={(event, newInputValue) =>
                            handleAutoComplite(event)
                        }
                        onChange={onSubmit}
                        
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                label={
                                    <FormattedMessage id="search_medicine" />
                                }
                                {...params}
                                fullWidth
                                value={searchValue}
                               
                            />
                        )}
                    />
                </ButtonGroup>
            </BottomBarItem>
            <BottomBarItem sx={{ ml: 2 }}>
                <Button
                    sx={{
                        color: ThemeMain.palette.primary.main,
                        borderColor: ThemeMain.palette.primary.main,
                        width: "max-content",
                        mr: 1,
                        borderRadius: 8,
                    }}
                    variant="outlined"
                    onClick={() => {
                        jwttoken
                            ? navigate(ROUTES.STATUS_PRODUCT)
                            : handleLoginOpen();
                    }}
                >
                    <FormattedMessage id="status_order" />
                </Button>

                <IconButton
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => {
                        jwttoken
                            ? handleFavoritesDrawerOpen()
                            : handleLoginOpen();
                    }}
                >
                    <FavoriteBorderIcon
                        sx={{ color: "#55CD61" }}
                        fontSize="large"
                    />
                </IconButton>
                <IconButton
                    size="small"
                    sx={{ mr: 0.5 }}
                    onClick={() => {
                        jwttoken
                            ? navigate(ROUTES.BASICINFORMATION)
                            : handleLoginOpen();
                    }}
                >
                    <AccountCircleIcon
                        sx={{ color: "#55CD61" }}
                        fontSize="large"
                    />
                </IconButton>

                <MenuItem
                    onClick={() => {
                        jwttoken ? navigate(ROUTES.BASKET) : handleLoginOpen();
                    }}
                >
                    {" "}
                    <StyledBadge badgeContent={jwttoken ? basketCount : 0}>
                        <img src="/img/Bag_light.png" />
                    </StyledBadge>
                    <MyText
                        variant="h6"
                        sx={{
                            color: ThemeMain.palette.primary.main,
                        }}
                    >
                        Корзина
                    </MyText>
                </MenuItem>
            </BottomBarItem>
        </BottomBar>
    );
};

export default Bottom;

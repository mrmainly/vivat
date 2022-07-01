import React, { useContext, useState } from "react";
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

import { MyText } from "../../..";
import ROUTES from "../../../../routes";
import { LOCALES } from "../../../../i18n/locales";
import { LanguageContext } from "../../../../store";
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
        // background: ThemeMain.palette.primary.main,
        color: ThemeMain.palette.primary.main,
    },
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

    const [AutoCompliteData, setAutoCompliteData] = useState([]);

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");

    const onSubmit = async () => {
        setLoading(true);
        await API.productsSearch(searchValue)
            .then((res) => {
                navigate(ROUTES.SEARCH_PAGE, {
                    state: { data: res.data, title: searchValue },
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
                        id="free-solo-demo"
                        freeSolo
                        size="small"
                        options={AutoCompliteData}
                        onInputChange={(event, newInputValue) =>
                            setSearchValue(newInputValue)
                        }
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                label={
                                    <FormattedMessage id="search_medicine" />
                                }
                                {...params}
                                fullWidth
                                value={searchValue}
                                onChange={(e) => handleAutoComplite(e)}
                                onBlur={onSubmit}
                                onKeyDown={(e) =>
                                    e.key === "Enter" ? onSubmit() : ""
                                }
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
                    <img src="/img/Bag_light.png" />

                    <StyledBadge badgeContent={4}>
                        <MyText
                            variant="h6"
                            sx={{
                                color: ThemeMain.palette.primary.main,
                            }}
                        >
                            Корзина
                        </MyText>
                    </StyledBadge>
                </MenuItem>
            </BottomBarItem>
        </BottomBar>
    );
};

export default Bottom;

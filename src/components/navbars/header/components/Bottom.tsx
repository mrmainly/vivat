import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
    Box,
    MenuItem,
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
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { toast } from "react-toastify";

import { MyText } from "../../..";
import ROUTES from "../../../../routes";
import ThemeMain from "../../../../theme";
import API from "../../../../api";
import { authModalSlice } from "../../../../reducer/auth_modal_slice";
import { drawersSlice } from "../../../../reducer/drawers_slice";
import { useProductsSearchQuery } from "../../../../services/ProductsService";
import { useGetBasketQuery } from "../../../../services/BasketService";
import { basketCountSlice } from "../../../../reducer/basket_count_slice";

import { useDispatch } from "react-redux";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        background: "red",
        color: "white",
    },
    marginRight: 10,
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderEndEndRadius: 0,
        },
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: ThemeMain.palette.primary.main,
    color: "white",
    borderTopLeftRadius: 0,
    borderEndStartRadius: 0,
    "&:hover": {
        color: ThemeMain.palette.primary.main,
        borderColor: ThemeMain.palette.primary.main,
    },
}));

const Bottom = () => {
    const [searchValue, setSearchValue] = useState("");
    const [skipBasket, setSkipBasket] = useState(true);

    const [AutoCompliteData, setAutoCompliteData] = useState([]);
    const { data: countBasket, isFetching: isBasketFetching } =
        useGetBasketQuery("", {
            skip: skipBasket,
        });

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");
    const dispatch = useDispatch();
    const { openLoginModal } = authModalSlice.actions;
    const { basketCount } = basketCountSlice.actions;
    const { handleFavoritesDrawerOpen, handleMainDrawerOpen } =
        drawersSlice.actions;

    const onSubmit = async () => {
        await API.productsSearch(searchValue)
            .then((res) => {
                navigate(ROUTES.SEARCH_PAGE, {
                    state: { data: res.data, title: searchValue },
                });
            })
            .catch((error) => {
                toast.error("error");
            });
    };

    const handleAutoComplite = async (newValue: any) => {
        let newStr = newValue[0].toUpperCase() + newValue.slice(1);
        setSearchValue(newStr);
        API.getAutoComplite(newStr)
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
            setSkipBasket(false);
        } else {
            setSkipBasket(true);
        }
    }, [jwttoken]);
    return (
        <BottomBar>
            <BottomBarItem sx={{ mr: 2 }}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => dispatch(handleMainDrawerOpen(true))}
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
                <ButtonGroup>
                    <Autocomplete
                        sx={{ width: "100%" }}
                        id="free-solo-2-demo"
                        freeSolo
                        size="small"
                        options={AutoCompliteData}
                        onInputChange={(event, newInputValue) =>
                            handleAutoComplite(newInputValue)
                        }
                        renderInput={(params) => (
                            <CustomTextField
                                variant="outlined"
                                label={
                                    <FormattedMessage id="search_medicine" />
                                }
                                {...params}
                                fullWidth
                                value={searchValue}
                                // onChange={(e) => setSearchValue(e.target.value)}
                            />
                        )}
                    />
                    <CustomButton size="small" onClick={onSubmit}>
                        <SearchIcon />
                    </CustomButton>
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
                            : dispatch(openLoginModal(true));
                    }}
                >
                    <FormattedMessage id="status_order" />
                </Button>

                <IconButton
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => {
                        jwttoken
                            ? dispatch(handleFavoritesDrawerOpen(true))
                            : dispatch(openLoginModal(true));
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
                            : dispatch(openLoginModal(true));
                    }}
                >
                    <AccountCircleIcon
                        sx={{ color: "#55CD61" }}
                        fontSize="large"
                    />
                </IconButton>

                <MenuItem
                    onClick={() => {
                        jwttoken
                            ? navigate(ROUTES.BASKET)
                            : dispatch(openLoginModal(true));
                    }}
                >
                    <StyledBadge
                        badgeContent={
                            isBasketFetching
                                ? 0
                                : jwttoken
                                ? countBasket?.total_qnt
                                : 0
                        }
                    >
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

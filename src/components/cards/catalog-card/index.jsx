import React, { useState, useEffect } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import cookie from "js-cookie";

import { MyText, MyButton } from "../..";
import ROUTES from "../../../routes";
import { useTransferBasketMutation } from "../../../services/BasketService";
import { useAddedFavoriteMutation, useDeleteFavoriteInProductMutation } from "../../../services/FavoritesService";
import "./catalog-card.css";

const ImgItem = styled(Box)({
    width: "100%",
    height: 170,
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
    cursor: "pointer",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
});

const CombinedBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    width: "100%",
});

const CatalogCard = ({ img, specialText, id, name, producer, fav, stocks, notRecept, type }) => {
    const Root = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        padding: 10,
        background: "#FFFFFF",
        margin: "0 auto",
        width: type === "catalog" ? 200 : "90%",
        "&:hover": {
            boxShadow: type === "catalog" ? "" : "0px 0px 20px rgba(0,0,0,0.8)",
        },
        transition: "all 1s ease",
        height: 400,
        overflow: "hidden",
        marginRight: type === "catalog" ? 10 : 0,
        [theme.breakpoints.down("sm")]: {
            width: type === "catalog" ? 200 : "92%",
        },
    }));

    const [favStatus, setFavStatus] = useState(false);
    const [cartId, setCardId] = useState();

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");
    const [transferBasketId] = useTransferBasketMutation();
    const [addedTransferId, { isLoading: isAddedFavoriteLoading }] = useAddedFavoriteMutation();
    const [deleteFavoriteId, { isLoading: isDeteleFavoriteLoading }] = useDeleteFavoriteInProductMutation();

    const addedFavorite = () => {
        addedTransferId({ id: cartId })
            .then((res) => {
                if (res.error) {
                    toast.error("Товар не добавлен в избранное");
                } else {
                    setFavStatus(!favStatus);
                }
            })
            .catch((error) => toast.error("Товар не добавлен в избранное"));
    };

    const TransferBasket = () => {
        transferBasketId({ id })
            .then((res) => {
                if (res.data) {
                    toast.success("Товар добавлен в корзину");
                } else {
                    if (res.error.data.errors[0] === "Товар отпускается только по рецепту врача") {
                        toast.error("Товар отпускается только по рецепту врача");
                    } else if (res.error.data.errors[0] === "item.count more than stocks.qty") {
                        toast.error("Кол-во товаров в вашей корзине на данный момент превышает кол-во товаров на складе");
                    } else {
                        toast.error("Товар не найден");
                    }
                }
            })
            .catch(() => toast.error("Товар не найден"));
    };

    const deleteFavorite = () => {
        deleteFavoriteId({ id: cartId }).then((res) => {
            if (res.error) {
                toast.error("Товар не удален");
            } else {
                setFavStatus(!favStatus);
            }
        });
    };

    useEffect(() => {
        setFavStatus(fav?.is_fav);
        setCardId(id);
    }, [fav?.is_fav]);

    const switchFav = () => {
        if (favStatus) {
        } else {
            addedFavorite();
        }
    };

    return (
        <Root>
            <ImgItem
                sx={{
                    backgroundImage: img ? `url(data:image/jpeg;base64,${img})` : "url(/img/Frame1319-min.png)",
                }}
                onClick={() => {
                    navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`);
                }}
            ></ImgItem>
            <Box style={{ height: 70, marginTop: 5 }}>
                <Typography
                    sx={{
                        fontFamily: "Montserrat",
                        color: "#202020",
                        fontWeight: "bold",
                    }}
                    className="description_catalog"
                >
                    {name}
                </Typography>
            </Box>
            <Box style={{ height: 42, marginTop: 5 }}>
                <MyText
                    variant="body2"
                    sx={{
                        color: "#2F80ED",
                    }}
                    className="producer"
                >
                    {producer}
                </MyText>
            </Box>
            {stocks?.qty > 0 ? (
                <MyText variant="body2" sx={{ color: "#55CD61", mt: 1 }}>
                    В наличии: {stocks.qty} шт
                </MyText>
            ) : (
                <MyText variant="body2" sx={{ color: "red", mt: 1 }}>
                    Нет в наличии
                </MyText>
            )}
            <MyText variant="body2" style={{ color: "#55CD61" }}>
                {notRecept ? "Без рецепта" : "С рецептом"}
            </MyText>
            <CombinedBox>
                <Box sx={{ display: "flex" }}>
                    {stocks ? (
                        <MyText
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            {stocks.priceSale}₽
                        </MyText>
                    ) : (
                        <MyText
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                color: "#999999",
                                textDecoration: "line-through",
                                ml: 1,
                            }}
                        >
                            Нет цены
                        </MyText>
                    )}
                </Box>
            </CombinedBox>

            <MyText variant="body2" sx={{ color: "#EB5757" }}>
                {specialText}
            </MyText>
            <CombinedBox>
                <MyButton
                    sx={{ width: 130 }}
                    size="medium"
                    onClick={() => {
                        jwttoken ? TransferBasket() : toast.error("данная операция доступно только при авторизации");
                    }}
                >
                    В корзину
                </MyButton>
                {favStatus ? (
                    <IconButton
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={deleteFavorite}
                        className={isAddedFavoriteLoading || isDeteleFavoriteLoading ? "fuvLoadingIcon" : ""}
                        disabled={isAddedFavoriteLoading || isDeteleFavoriteLoading ? true : false}
                    >
                        <FavoriteIcon sx={{ color: "#55CD61" }} fontSize="large" />
                    </IconButton>
                ) : (
                    <IconButton
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={switchFav}
                        className={isAddedFavoriteLoading || isDeteleFavoriteLoading ? "fuvLoadingIcon" : ""}
                        disabled={isAddedFavoriteLoading || isDeteleFavoriteLoading ? true : false}
                    >
                        <img src="/img/Favorite_light.png" alt="" />
                    </IconButton>
                )}
            </CombinedBox>
        </Root>
    );
};

export default CatalogCard;

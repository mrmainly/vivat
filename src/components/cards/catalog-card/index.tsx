import React from "react";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import cookie from "js-cookie";

import { GoodsCardProps } from "../../../interface";
import { MyText, MyButton } from "../..";
import ROUTES from "../../../routes";
import { useTransferBasketMutation } from "../../../services/BasketService";
import {
    useAddedFavoriteMutation,
    useDeleteFavoriteMutation,
} from "../../../services/FavoritesService";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    padding: 10,
    background: "#FFFFFF",
    margin: "0 auto",
    width: "90%",
    "&:hover": {
        boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    },
    transition: "all 1s ease",
    height: 400,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        width: "92%",
    },
}));

const ImgItem = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 170,
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
    cursor: "pointer",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}));

const CombinedBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    width: "100%",
}));

const CatalogCard: React.FC<GoodsCardProps> = ({
    img,
    specialText,
    id,
    name,
    producer,
    fav,
    stocks,
}) => {
    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");
    const [transferBasketId] = useTransferBasketMutation();
    const [addedTransferId] = useAddedFavoriteMutation();
    const [deleteFavoriteId] = useDeleteFavoriteMutation();

    const addedFavorite = () => {
        addedTransferId({ id })
            .then((res: any) => {
                if (res.error) {
                    toast.error("Товар не добавлен в избранное");
                }
            })
            .catch((error) => toast.error("Товар не добавлен в избранное"));
    };

    const TransferBasket = () => {
        transferBasketId({ id })
            .then((res: any) => {
                if (res.data) {
                    toast.success("Товар добавлен в корзину");
                } else {
                    if (res.error.data.errors[0] === "NotRecept False") {
                        toast.error(
                            "Это лекарственное средство отпускается по рецепту"
                        );
                    } else if (
                        res.error.data.errors[0] ===
                        "item.count more than stocks.qty"
                    ) {
                        toast.error(
                            "Кол-во товаров в вашей корзине на данный момент превышает кол-во товаров на складе"
                        );
                    } else {
                        toast.error("Товар не найден");
                    }
                }
            })
            .catch(() => toast.error("Товар не найден"));
    };

    const deleteFavorite = () => {
        deleteFavoriteId({ id: fav?.fav_id }).then((res: any) => {
            if (res.error) {
                toast.error("Товар не удален");
            }
        });
    };

    return (
        <Root>
            <ImgItem
                sx={{
                    backgroundImage: img
                        ? `url(data:image/jpeg;base64,${img})`
                        : "url(/img/vivat_background.png)",
                }}
                onClick={() => {
                    navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`);
                }}
            ></ImgItem>
            <MyText
                variant="body1"
                sx={{
                    mt: 2,
                    fontFamily: "Montserrat",
                    color: "#202020",
                    fontWeight: "bold",
                    height: 70,
                    overflow: "hidden",
                }}
            >
                {name}...
            </MyText>
            <MyText
                variant="body2"
                sx={{
                    color: "#2F80ED",
                    mt: 0.5,
                    height: 40,
                    overflow: "hidden",
                }}
            >
                {producer}
            </MyText>
            {stocks ? (
                stocks.qty === 0 ? (
                    <MyText variant="body2" sx={{ color: "red", mt: 0.5 }}>
                        Нет в наличии
                    </MyText>
                ) : (
                    <MyText variant="body2" sx={{ color: "#55CD61", mt: 0.5 }}>
                        В наличии
                    </MyText>
                )
            ) : (
                <MyText variant="body2" sx={{ color: "red", mt: 0.5 }}>
                    Нет в наличии
                </MyText>
            )}
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
                    {/* <MyText
                        variant="body2"
                        sx={{
                           
                        }}
                    >
                        {specialPrice}₽
                    </MyText> */}
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
                        jwttoken
                            ? TransferBasket()
                            : toast.error(
                                  "данная операция доступно только при авторизации"
                              );
                    }}
                >
                    В корзину
                </MyButton>
                {/* onClick={deleteFavorite} */}
                {fav?.is_fav ? (
                    <IconButton
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={deleteFavorite}
                    >
                        <FavoriteIcon
                            sx={{ color: "#55CD61" }}
                            fontSize="large"
                        />
                    </IconButton>
                ) : (
                    <IconButton
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() => {
                            jwttoken
                                ? addedFavorite()
                                : toast.error(
                                      "данная операция доступно только при авторизации"
                                  );
                        }}
                    >
                        <img src="/img/Favorite_light.png" />
                    </IconButton>
                )}
            </CombinedBox>
        </Root>
    );
};

export default CatalogCard;

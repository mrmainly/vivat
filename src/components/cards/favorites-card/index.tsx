import React from "react";
import { Box, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { BorderLine, MyText, MyButton } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
import ROUTES from "../../../routes";
import {
    useDeleteFavoriteMutation,
    useTransferFavoriteMutation,
} from "../../../services/FavoritesService";

interface FavoritesCardProps {
    GoodsCode: any;
    stock: boolean;
    deliveryStatus: boolean;
    price: number;
    number: any;
    id: number;
    discountVal?: number;
    count: number;
    status?: any;
    setStatus?: any;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({
    stock,
    price,
    id,
    discountVal,
    GoodsCode,
}) => {
    const [deleteFavoriteId] = useDeleteFavoriteMutation();
    const [transferToBasket] = useTransferFavoriteMutation();

    const TransferFavorite = () => {
        transferToBasket({ id })
            .then((res: any) => {
                if (res.data) {
                    toast.success("Товар добавлен в корзину");
                } else {
                    if (res.error.data.errors[0] === "NotRecept False") {
                        toast.error(
                            "Это лекарственное средство отпускается по рецепту"
                        );
                    } else {
                        toast.error("Товара нет в наличии");
                    }
                }
            })
            .catch(() => toast.error("Товар не найден"));
    };

    const deleteFavorite = () => {
        deleteFavoriteId({ id }).then((res: any) => {
            if (res.data) {
                toast.success("Товар удален");
            } else {
                toast.error("Товар не удален");
            }
        });
    };

    return (
        <Box sx={{ mt: 2 }}>
            <BorderLine sx={{ mb: 2 }} />
            <MyText variant="h6" sx={{ mb: 1 }}>
                {GoodsCode.name}
            </MyText>
            <Box sx={{ mb: 1 }}>
                {stock ? (
                    <MyText
                        variant="body2"
                        sx={{ color: ThemeMain.palette.primary.main }}
                    >
                        В наличии
                    </MyText>
                ) : (
                    <MyText variant="body2" sx={{ color: "red" }}>
                        Нет в наличии
                    </MyText>
                )}
            </Box>
            {/* <Box sx={{ mb: 1 }}>
                {deliveryStatus ? (
                    <MyText
                        variant="body2"
                        sx={{ color: ThemeMain.palette.primary.main }}
                    >
                        Возможна доставка курьером
                    </MyText>
                ) : (
                    <MyText variant="body2" sx={{ color: "red" }}>
                        Возможна доставка курьером
                    </MyText>
                )}
            </Box> */}
            {discountVal ? (
                <Box sx={{ display: "flex", mt: 1 }}>
                    <MyText variant="h6" sx={{ fontWeight: 600 }}>
                        {discountVal}₽
                    </MyText>
                    <MyText
                        variant="body2"
                        sx={{
                            textDecoration: "line-through",
                            color: "#999999",
                            ml: 1.6,
                        }}
                    >
                        {price} ₽
                    </MyText>
                </Box>
            ) : (
                <MyText variant="h6" sx={{ fontWeight: 600 }}>
                    {price}₽
                </MyText>
            )}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <MyButton size="medium" onClick={TransferFavorite}>
                    Добавить в корзину
                </MyButton>
                <IconButton size="small" onClick={deleteFavorite}>
                    <CloseIcon
                        sx={{ color: ThemeMain.palette.primary.main }}
                        fontSize="large"
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default FavoritesCard;

import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { toast } from "react-toastify";

import { BorderLine, MyText, MyButton } from "../..";
import { DispatchContext } from "../../../store";
import ThemeMain from "../../../theme";
import API from "../../../api";

interface FavoritesCardProps {
    title: string;
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
    title,
    stock,
    deliveryStatus,
    price,
    number,
    id,
    discountVal,
    status,
    setStatus,
}) => {
    const TransferFavorite = () => {
        API.transferFavorite(id)
            .then((res) => {
                toast.success("Товар добавлен в корзину");
            })
            .catch(() => toast.error("Товар не найден"));
    };

    const deleteFavorite = () => {
        API.deleteFavorite(id)
            .then(() => {
                toast.success("Товар удален");
                setStatus(`delete ${status + 1}`);
            })
            .catch(() => {
                toast.error("Товар не удален");
            });
    };

    return (
        <Box sx={{ mt: 2 }}>
            <BorderLine sx={{ mb: 2 }} />
            <MyText variant="body1" sx={{ mb: 1 }}>
                {title}
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
            <Box sx={{ mb: 1 }}>
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
            </Box>
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
                    <img src="/img/Close_round_light.png" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default FavoritesCard;

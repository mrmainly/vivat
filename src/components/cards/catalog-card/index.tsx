import React, { useState, useEffect, useContext } from "react";

import { Box, IconButton, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { DispatchContext, StateContext } from "../../../store";
import { GoodsCardProps } from "../../../interface";
import { MyText, MyButton } from "../..";
import ROUTES from "../../../routes";
import ThemeMain from "../../../theme";
import API from "../../../api";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    background: "#FFFFFF",
    width: "90%",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    "&:hover": {
        boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    },
    transition: "all 1s ease",
}));

const Img = styled("img")(({ theme }) => ({
    width: "100%",
    height: 170,
    objectFit: "cover",
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
    cursor: "pointer",
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
    description,
    price,
    specialPrice,
    specialText,
    id,
    name,
    status,
    setStatus,
    producer,
    qty,
    fav,
}) => {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);
    const stateContext = useContext(StateContext);

    const addedFavorite = () => {
        API.addedFavorite(id)
            .then((res) => {
                dispatch({
                    type: "favorite_status",
                    payload: {
                        status: stateContext.favorite_status.status + 1,
                    },
                });
            })
            .catch((error) => toast.error("Товар не добавлен в избранное"));
    };

    const TransferFavorite = () => {
        API.transferFavorite(id)
            .then((res) => {
                toast.success("Товар добавлен в корзину");
            })
            .catch(() => toast.error("Товар не найден"));
    };

    return (
        <Root>
            <Img
                src={img}
                onClick={() => {
                    navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`);
                }}
            />
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
            <MyText variant="body2" sx={{ color: "#2F80ED", mt: 0.5 }}>
                {producer}
            </MyText>
            {qty === 0 ? (
                <MyText variant="body2" sx={{ color: "red", mt: 0.5 }}>
                    Нет в наличии
                </MyText>
            ) : (
                <MyText variant="body2" sx={{ color: "#55CD61", mt: 0.5 }}>
                    В наличии
                </MyText>
            )}
            <CombinedBox>
                <Box sx={{ display: "flex" }}>
                    <MyText
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                        }}
                    >
                        {specialPrice}₽
                    </MyText>
                    {/* <MyText
                        variant="body2"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                            color: "#999999",
                            textDecoration: "line-through",
                            ml: 1,
                        }}
                    >
                        {specialPrice}₽
                    </MyText> */}
                </Box>
                <IconButton size="small" sx={{ mr: 1 }}>
                    <img src="/img/Frame1208.png" />
                </IconButton>
            </CombinedBox>
            <MyText variant="body2" sx={{ color: "#EB5757" }}>
                {specialText}
            </MyText>
            <CombinedBox>
                <MyButton
                    sx={{ width: 130 }}
                    size="medium"
                    onClick={TransferFavorite}
                >
                    В корзину
                </MyButton>
                <IconButton size="small" sx={{ mr: 1 }} onClick={addedFavorite}>
                    {fav ? (
                        <FavoriteIcon sx={{ color: "#55CD61" }} />
                    ) : (
                        <img src="/img/Favorite_light.png" />
                    )}
                </IconButton>
            </CombinedBox>
        </Root>
    );
};

export default CatalogCard;

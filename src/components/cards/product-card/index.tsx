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
import { useAddedFavoriteMutation, useDeleteFavoriteInProductMutation } from "../../../services/FavoritesService";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    padding: 10,
    background: "#FFFFFF",
    width: 200,
    height: 400,
    overflow: "hidden",
    marginRight: 10,
}));

const ImgItem = styled(Box)({
    width: "100%",
    height: 170,
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
});

const Name = styled(MyText)({
    marginTop: 20,
    fontFamily: "Montserrat",
    color: "#202020",
    fontWeight: "bold",
    height: 70,
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
    transition: "all 1s ease",
});

const CombinedBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    width: "100%",
});

const ProductCard: React.FC<GoodsCardProps> = ({ img, specialText, id, name, producer, fav, stocks, notRecept }) => {
    // const [favStatus, setFavStatus] = useState(false);
    // const [cartId, setCardId] = useState();

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");
    const [transferBasketId] = useTransferBasketMutation();
    const [addedTransferId, { isLoading: isAddedFavoriteLoading }] = useAddedFavoriteMutation();
    const [deleteFavoriteId, { isLoading: isDeteleFavoriteLoading }] = useDeleteFavoriteInProductMutation();

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
                        toast.error("Это лекарственное средство отпускается по рецепту");
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
                    backgroundImage: img ? `url(data:image/jpeg;base64,${img})` : "url(/img/Frame1319-min.png)",
                }}
            ></ImgItem>
            <Name
                variant="body1"
                onClick={() => {
                    navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`);
                }}
            >
                {name}...
            </Name>
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

                {/* {favStatus ? (
                    <IconButton
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={switchFav}
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
                )} */}
            </CombinedBox>
        </Root>
    );
};

export default ProductCard;

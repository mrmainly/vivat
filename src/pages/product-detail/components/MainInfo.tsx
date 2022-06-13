import React, { useContext } from "react";

import { Grid, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cookie from "js-cookie";

import { MyText, MyButton } from "../../../components";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThemeMain from "../../../theme";
import { DispatchContext, StateContext } from "../../../store";
import API from "../../../api";

const Item = styled(Box)(({ theme }) => ({
    minHeight: 550,
    background: "white",
    padding: 20,
}));

const ItemImg = styled(Box)(({ theme }) => ({
    height: 550,
    background: "white",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}));

const Img = styled("img")(({ theme }) => ({
    width: 300,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const PriceBlog = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: 'center',
    // alignItems: 'center'
    flexDirection: "row",
    marginTop: 5,
}));

interface MainInfoProps {
    data?: any;
}

const MainInfo: React.FC<MainInfoProps> = ({ data }) => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const jwttoken = cookie.get("jwttoken");

    const transferBasket = () => {
        API.transferBasket(data.id)
            .then((res) => {
                toast.success("Товар добавлен в корзину");
            })
            .catch((error) => {
                toast.error("Товар не найден");
            });
    };

    const addedFavorite = () => {
        API.addedFavorite(data.id)
            .then((res) => {
                dispatch({
                    type: "favorite_status",
                    payload: {
                        status: state.favorite_status.status + 1,
                    },
                });
            })
            .catch((error) => toast.error("Товар не добавлен в избранное"));
    };

    const deleteFavorite = () => {
        API.deleteFavorite(data.fav?.fav_id)
            .then(() => {
                dispatch({
                    type: "favorite_status",
                    payload: {
                        status: state.favorite_status.status + 1,
                    },
                });
            })
            .catch(() => {
                toast.error("Товар не удален");
            });
    };

    const array = [
        {
            label: "Вид товара:",
            value: "Лекарственные средства",
        },
        {
            label: "Форма выпуска:",
            value: "Таблетки растворимые",
        },
        {
            label: "Производитель:",
            value: data.producer,
        },
        {
            label: "Дозировка:",
            value: "500МЕ",
        },
        {
            label: "Фасовка:",
            value: "№60",
        },
        {
            label: "Страна:",
            value: data.country,
        },
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <ItemImg
                        sx={{
                            backgroundImage: data?.esphoto[0]?.fileData
                                ? `url(data:image/jpeg;base64,${data.esphoto[0]?.fileData})`
                                : "/img/tabletka.jpg",
                        }}
                    ></ItemImg>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Item>
                        <MyText variant="h5">{data?.name}</MyText>
                        {data.stocks.qty > 0 ? (
                            <MyText
                                variant="body1"
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    mt: 0.5,
                                    mb: 0.5,
                                }}
                            >
                                Товар в наличии
                            </MyText>
                        ) : (
                            <MyText
                                variant="body1"
                                sx={{ color: "#FE5860", mt: 0.5, mb: 0.5 }}
                            >
                                Товара нет в наличии
                            </MyText>
                        )}
                        {array.map((item, index) => (
                            <MyText
                                variant="body1"
                                key={index}
                                sx={{ mt: 0.8, color: "#9B9B9B" }}
                            >
                                {item.label}
                                <span
                                    style={{ marginLeft: 15, color: "black" }}
                                >
                                    {item.value}
                                </span>
                            </MyText>
                        ))}
                        <MyText
                            variant="body1"
                            sx={{ color: "#9B9B9B", mt: 1.5 }}
                        >
                            Цена:
                        </MyText>
                        <PriceBlog>
                            <MyText
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                }}
                            >
                                {data.stocks.priceSale} ₽
                            </MyText>
                            {/* <MyText
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    color: "#999999",
                                    textDecoration: "line-through",
                                    ml: 1,
                                }}
                            >
                                {data.stocks.priceSale} ₽
                            </MyText> */}
                        </PriceBlog>
                        <Box sx={{ display: "flex", color: "#FE5860", mt: 1 }}>
                            <LocalShippingIcon />
                            <MyText variant="body1" sx={{ ml: 2 }}>
                                Нет доставки
                            </MyText>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <MyButton
                                onClick={() => {
                                    jwttoken
                                        ? transferBasket()
                                        : toast.error(
                                              "данная операция доступно только при авторизации"
                                          );
                                }}
                            >
                                Добавить в корзину
                            </MyButton>
                            <IconButton sx={{ ml: 5 }}>
                                {" "}
                                {data?.fav?.is_fav ? (
                                    <FavoriteIcon
                                        onClick={deleteFavorite}
                                        sx={{ color: "#55CD61" }}
                                        fontSize="large"
                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        onClick={() => {
                                            jwttoken
                                                ? addedFavorite()
                                                : toast.error(
                                                      "данная операция доступно только при авторизации"
                                                  );
                                        }}
                                        sx={{ color: "#55CD61" }}
                                        fontSize="large"
                                    />
                                )}
                            </IconButton>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            {/* {array2.map((item, index) => (
                                <MyText
                                    variant="body1"
                                    key={index}
                                    sx={{ mt: 0.8, color: "#9B9B9B" }}
                                >
                                    {item.label}
                                    <span
                                        style={{
                                            marginLeft: 15,
                                            color: "black",
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                </MyText>
                            ))} */}
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainInfo;

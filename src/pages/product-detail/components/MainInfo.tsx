import React from "react";

import { Grid, Box, IconButton, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { MyText, MyButton } from "../../../components";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThemeMain from "../../../theme";
import ROUTES from "../../../routes";
import { useTransferBasketMutation } from "../../../services/BasketService";
import {
    useAddedFavoriteMutation,
    useDeleteFavoriteMutation,
} from "../../../services/FavoritesService";

const Item = styled(Box)({
    background: "white",
    padding: 20,
    minHeight: 520,
});

const ItemImg = styled(Box)(({ theme }) => ({
    background: "white",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 520,
    [theme.breakpoints.down("sm")]: {
        minHeight: 200,
    },
}));

const PriceBlog = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
}));

const Span = styled("span")({
    marginLeft: 15,
    color: "black",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
    transition: "all 1s ease",
});

interface MainInfoProps {
    data?: any;
    isFetching: boolean;
}

const MainInfo: React.FC<MainInfoProps> = ({ data, isFetching }) => {
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();

    const [transferBasketId] = useTransferBasketMutation();
    const [addedTransferId] = useAddedFavoriteMutation();
    const [deleteFavoriteId] = useDeleteFavoriteMutation();

    const addedFavorite = () => {
        addedTransferId({ id: data.id })
            .then((res: any) => {
                if (res.error) {
                    toast.error("Товар не добавлен в избранное");
                }
            })
            .catch(() => toast.error("Товар не добавлен в избранное"));
    };

    const TransferBasket = () => {
        transferBasketId({ id: data.id })
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
        deleteFavoriteId({ id: data.fav?.fav_id }).then((res: any) => {
            if (res.error) {
                toast.error("Товар не удален");
            }
        });
    };

    const array = [
        {
            label: "Mnn:",
            value: data.mnnRu,
        },
        {
            label: "Производитель:",
            value: data.producer,
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
                                : "url(/img/vivat_background.png)",
                        }}
                    ></ItemImg>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Item>
                        <MyText variant="h5" sx={{ mt: 3 }}>
                            {data?.name}
                        </MyText>
                        {data?.stocks?.qty > 0 ? (
                            <MyText
                                variant="body1"
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    mt: 2,
                                    mb: 2,
                                }}
                            >
                                Товар в наличии
                            </MyText>
                        ) : (
                            <MyText
                                variant="body1"
                                sx={{ color: "#FE5860", mt: 2, mb: 2 }}
                            >
                                Товара нет в наличии
                            </MyText>
                        )}
                        <MyText
                            variant="body1"
                            sx={{ mt: 1.5, color: "#9B9B9B" }}
                        >
                            Группы товаров:
                            {data.goodsGroupCodes.map(
                                (item: any, index: number) => (
                                    <Span
                                        key={index}
                                        onClick={() =>
                                            navigate(ROUTES.PRODUCT_PAGE, {
                                                state: {
                                                    id: item.id,
                                                    title: item.name,
                                                },
                                            })
                                        }
                                    >
                                        {item.name}
                                    </Span>
                                )
                            )}
                        </MyText>
                        {array.map((item, index) => (
                            <MyText
                                variant="body1"
                                key={index}
                                sx={{ mt: 1.5, color: "#9B9B9B" }}
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
                            sx={{ color: "#9B9B9B", mt: 2.5 }}
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
                                {data?.stocks?.priceSale
                                    ? data?.stocks?.priceSale
                                    : "Нет цены"}{" "}
                                ₽
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
                        {data?.esgood[0]?.notRecept ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 1,
                                    color: ThemeMain.palette.primary.main,
                                }}
                            >
                                <LocalShippingIcon />
                                <MyText variant="body1" sx={{ ml: 2 }}>
                                    Доставка доступна
                                </MyText>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 1,
                                    color: "#FE5860",
                                }}
                            >
                                <LocalShippingIcon />

                                <MyText variant="body1" sx={{ ml: 2 }}>
                                    Нет доставки
                                </MyText>
                            </Box>
                        )}
                        <Box
                            sx={{
                                mt: 2,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <MyButton
                                onClick={() => {
                                    jwttoken
                                        ? TransferBasket()
                                        : toast.error(
                                              "Данная операция доступно только при авторизации"
                                          );
                                }}
                                style={{ minHeight: 40 }}
                            >
                                Добавить в корзину
                            </MyButton>

                            {/* {isFetching ? (
                                <CircularProgress
                                    sx={{ ml: 5 }}
                                    size={50}
                                    color="success"
                                />
                            ) : ( */}
                            <>
                                {data?.fav?.is_fav ? (
                                    <IconButton
                                        sx={{ ml: 5 }}
                                        onClick={deleteFavorite}
                                    >
                                        <FavoriteIcon
                                            sx={{ color: "#55CD61" }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        sx={{ ml: 5 }}
                                        onClick={() => {
                                            jwttoken
                                                ? addedFavorite()
                                                : toast.error(
                                                      "данная операция доступно только при авторизации"
                                                  );
                                        }}
                                    >
                                        <FavoriteBorderIcon
                                            sx={{ color: "#55CD61" }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                )}
                            </>
                            {/* )} */}
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainInfo;

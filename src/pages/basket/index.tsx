import React, { useEffect, useState } from "react";
import { Box, MenuItem, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "@mui/system";

import product_data from "../../local_data/product_data";
import { BasketCard, MyText, MyButton } from "../../components";
import { ProductCardsSlider } from "../../constructor";
import API from "../../api";
import ROUTES from "../../routes";

const ActionBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 23,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
    },
}));

const DeleteMenuItem = styled(MenuItem)(({ theme }) => ({
    color: "#FE5860",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const DeleteBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        color: "#FE5860",
    },
}));

const TotalBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "end",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
    },
}));

const Basket = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            await API.getCartsList()
                .then((res: any) => {
                    setTotalCount(res.data.total_count);
                    setTotalPrice(res.data.total_price);
                    if (res.data.items) {
                        setData(res.data.items);
                    } else {
                        setData(res.data);
                    }
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };

        getOrders();
    }, [status]);

    const deleteBasket = () => {
        API.deleteOrdersAll()
            .then((res) => {
                setStatus(`delete_all ${status + 1}`);
                toast.success("Корзина удалена");
            })
            .catch(() => toast.error("Что то пошло не так"));
    };
    return (
        <>
            <MyText variant="h6">Корзина</MyText>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                        mb: 5,
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    {data.length > 0 ? (
                        <>
                            <ActionBox>
                                <MyText variant="body2" sx={{ color: "grey" }}>
                                    {totalCount} товаров на сумму {totalPrice} ₽
                                </MyText>
                                <DeleteMenuItem>
                                    <MyText variant="body1">
                                        Очистить корзину
                                    </MyText>
                                    <CloseIcon sx={{ ml: 1 }} />
                                </DeleteMenuItem>
                                <DeleteBox onClick={deleteBasket}>
                                    <MyText variant="body1">
                                        Очистить корзину
                                    </MyText>
                                    <CloseIcon sx={{ ml: 1 }} />
                                </DeleteBox>
                            </ActionBox>
                            {data.map((item: any, index: number) => (
                                <BasketCard
                                    key={index}
                                    {...item}
                                    status={status}
                                    setStatus={setStatus}
                                />
                            ))}
                            <TotalBox>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <MyText
                                        variant="h6"
                                        sx={{ color: "gray", mr: 1 }}
                                    >
                                        Итого:
                                    </MyText>
                                    <MyText variant="h6" sx={{ mr: 2 }}>
                                        {totalPrice}₽
                                    </MyText>
                                </Box>
                                <MyButton
                                    onClick={() => navigate(ROUTES.BASKET_FORM)}
                                >
                                    <MyText variant="body2" sm={12}>
                                        Оформить заказ
                                    </MyText>
                                </MyButton>
                            </TotalBox>
                        </>
                    ) : (
                        <MyText variant="h6">У вас нету заказов</MyText>
                    )}
                </>
            )}
            <ProductCardsSlider title="Может пригодиться" data={product_data} />
            <ProductCardsSlider title="Рекомендуем" data={product_data} />
        </>
    );
};

export default Basket;

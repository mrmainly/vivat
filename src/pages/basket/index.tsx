import { Box, MenuItem, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "@mui/system";

import { BasketCard, MyText, MyButton } from "../../components";
import ROUTES from "../../routes";
import {
    useGetBasketQuery,
    useDeleteBasketAllMutation,
} from "../../services/BasketService";

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
    const navigate = useNavigate();
    const { data, isLoading, isFetching } = useGetBasketQuery("");
    const [deleteteBasketAll] = useDeleteBasketAllMutation();

    const deleteBasket = () => {
        deleteteBasketAll("")
            .then((res) => {
                toast.success("Корзина удалена");
            })
            .catch(() => toast.error("Что то пошло не так"));
    };

    return (
        <>
            <MyText variant="h6">Корзина</MyText>
            {isLoading ? (
                <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
                    {" "}
                    <CircularProgress />
                </Box>
            ) : data.items ? (
                <Box sx={{ opacity: isFetching ? 0.5 : 1 }}>
                    <ActionBox>
                        <MyText variant="body2" sx={{ color: "grey" }}>
                            {data.total_count} товаров на сумму{" "}
                            {Math.trunc(data.total_price)} ₽
                        </MyText>
                        <DeleteMenuItem onClick={deleteBasket}>
                            <MyText variant="body1">Очистить корзину</MyText>
                            <CloseIcon sx={{ ml: 1 }} />
                        </DeleteMenuItem>
                        <DeleteBox onClick={deleteBasket}>
                            <MyText variant="body1">Очистить корзину</MyText>
                            <CloseIcon sx={{ ml: 1 }} />
                        </DeleteBox>
                    </ActionBox>
                    {data?.items.map((item: any, index: number) => (
                        <BasketCard key={index} {...item} />
                    ))}
                    <TotalBox>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <MyText variant="h6" sx={{ color: "gray", mr: 1 }}>
                                Итого:
                            </MyText>
                            <MyText variant="h6" sx={{ mr: 2 }}>
                                {Math.trunc(data.total_price)}₽
                            </MyText>
                        </Box>
                        <MyButton onClick={() => navigate(ROUTES.BASKET_FORM)}>
                            <MyText variant="body2" sm={12}>
                                Оформить заказ
                            </MyText>
                        </MyButton>
                    </TotalBox>
                </Box>
            ) : (
                <MyText variant="h6">У вас нет товаров</MyText>
            )}
        </>
    );
};

export default Basket;

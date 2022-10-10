import { useState, useEffect } from "react";
import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextareaAutosize,
    FormLabel,
    FormControlLabel,
    Box,
    TextField,
    Radio,
    RadioGroup,
    CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MyText, MyButton, BasketFormSideBars } from "../../components";
import ROUTES from "../../routes";

import { useGetAccountUserQuery } from "../../services/AccountUser";
import { useGetBasketQuery } from "../../services/BasketService";
import { useGetDeportamentsQuery } from "../../services/DeportamentsService";
import { usePostBasketMutation } from "../../services/BasketService";

const InputProfile = styled(TextField)(({ theme }) => ({
    background: "white",
}));

const BasketForm = () => {
    const [adress, setAdress] = useState(
        "47CC211D-EECA-4D38-87A1-E255059DD16F"
    );
    const [commend, setCommend] = useState("");
    const [phone, setPhone] = useState("");

    const { data: accountUser, isLoading } = useGetAccountUserQuery("");
    const { data: basketList, isLoading: isBasketLoading } =
        useGetBasketQuery("");
    const { data: deportaments, isLoading: isDeportamentsLoading } =
        useGetDeportamentsQuery("");

    const [postBasket] = usePostBasketMutation();

    const navigate = useNavigate();

    useEffect(() => {
        setPhone(accountUser?.phone);
    }, [accountUser]);

    const compliteOrders = () => {
        postBasket({
            payment_type: "CARD",
            delivery_type: "PICKUP",
            comment: commend,
            SuccessURL:
                "https://xn----7sbbagaytx2c4ad.xn--p1ai/success-payment",
            FailURL: "https://xn----7sbbagaytx2c4ad.xn--p1ai/error-payment",
            recipient_phone: phone,
        }).then((res: any) => {
            if (res.data) {
                toast.success("Заявка оформлена");
                res.data === "Success"
                    ? navigate(ROUTES.SUCCESS_PAYMENT)
                    : (window.location.href = res.data);
            } else if (
                res.error.data.errors[0] ===
                "{'delivery_type': [ErrorDetail(string='Значения  нет среди допустимых вариантов.', code='invalid_choice')]}"
            ) {
                toast.error("Ваша корзина пуста");
            } else {
                toast.error("Заявка оформлена");
            }
        });
    };

    return (
        <>
            {isLoading || isBasketLoading || isDeportamentsLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <MyText variant="h5">Оформление заказа</MyText>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <MyText variant="h6" sx={{ mt: 1 }}>
                                Контактные данные
                            </MyText>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <InputProfile
                                    label="Телефон"
                                    fullWidth
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Имя"
                                    fullWidth
                                    value={accountUser.first_name}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Фамилия"
                                    fullWidth
                                    value={accountUser.last_name}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Электронная почта"
                                    fullWidth
                                    value={accountUser.email}
                                    margin="normal"
                                />
                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    sx={{ bgcolor: "white" }}
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Выберите адрес аптеки:
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Выберите адрес аптеки:"
                                        value={adress}
                                        onChange={(e) =>
                                            setAdress(e.target.value)
                                        }
                                    >
                                        {deportaments.map(
                                            (item: any, index: number) => (
                                                <MenuItem
                                                    key={index}
                                                    value={item.department.id}
                                                >
                                                    {item.department.name}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                                <TextareaAutosize
                                    aria-label="maximum height"
                                    minRows={5}
                                    placeholder="Комментарий"
                                    style={{ width: "99%", marginTop: 15 }}
                                    value={commend}
                                    onChange={(e) => setCommend(e.target.value)}
                                />
                                <MyText
                                    variant="body1"
                                    sx={{ mt: 1, color: "grey" }}
                                >
                                    Здесь вы можете написать свои пожелания к
                                    заказу и т.п
                                </MyText>
                                <FormControl sx={{ mt: 2 }}>
                                    <FormLabel component="legend">
                                        Способ доставки
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value="PICKUP"
                                    >
                                        <FormControlLabel
                                            control={<Radio />}
                                            label={`Самовызов`}
                                            value="PICKUP"
                                        />
                                        <FormControlLabel
                                            disabled
                                            control={<Radio />}
                                            label="Доставка курьером (функция пока не доступна)"
                                            value="DELIVERY"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <MyText variant="body1" sx={{ mt: 2 }}>
                                    Подтвердите ваш заказ
                                </MyText>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 2,
                                        color: "#55CD61",
                                    }}
                                >
                                    <MyText variant="body1">Итого</MyText>
                                    <MyText variant="body2">
                                        {basketList.total_price}₽
                                    </MyText>
                                </Box>
                                <MyButton
                                    style={{ marginTop: 20 }}
                                    onClick={compliteOrders}
                                >
                                    Подтвердить заказ
                                </MyButton>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <BasketFormSideBars
                                data={basketList.items}
                                totalPrice={basketList.total_price}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default BasketForm;

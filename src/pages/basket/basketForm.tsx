import React, { useEffect, useState } from "react";
import {
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextareaAutosize,
    FormLabel,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Box,
    TextField,
    Radio,
    RadioGroup,
    CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MyText, Form, Input, MyButton, BorderLine } from "../../components";
import ThemeMain from "../../theme";
import API from "../../api";
import ROUTES from "../../routes";

const InfoBlog = styled(Box)(({ theme }) => ({
    boxShadow: " 0px 5px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    width: "80%",
    minHeight: 391,
    background: "white",
    padding: 24,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        padding: 10,
    },
}));

const InputProfile = styled(TextField)(({ theme }) => ({
    background: "white",
}));

const BasketForm = () => {
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [adress, setAdress] = useState("");
    const [commend, setCommend] = useState("");
    const [payment, setPayment] = useState("CASH");
    const [delivery, setDelivery] = useState("PICKUP");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState("");
    const [adresses, setAddresses] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            setLoading(true);
            await API.getAccountUser()
                .then((res) => {
                    const data = res.data;
                    setPhone(data.phone);
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setMail(data.email);
                })
                .catch((error) => {
                    console.log(error);
                });
            await API.getCartsList()
                .then((res: any) => {
                    console.log("data", res);
                    setTotalPrice(res.data.total_price);
                    if (res.data.items) {
                        setData(res.data.items);
                    } else {
                        setData(res.data);
                    }
                })
                .catch((error) => console.log(error));
            await API.getDeportaments()
                .then((res: any) => {
                    console.log("dep", res);
                    setAddresses(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getOrders();
    }, []);

    const compliteOrders = () => {
        API.sendOrder({
            payment_type: payment,
            delivery_type: delivery,
            comment: commend,
            dep_id: adress,
        })
            .then((res) => {
                toast.success("Заявка оформлена");
            })
            .then((res) => {
                navigate(ROUTES.BASKET);
            })
            .catch((error) => toast.error("Заявка не оформлена"));
    };

    return (
        <>
            {loading ? (
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
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Имя"
                                    fullWidth
                                    value={firstName}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Фамилия"
                                    fullWidth
                                    value={lastName}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="Электронная почта"
                                    fullWidth
                                    value={mail}
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
                                        {adresses.map(
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
                                <FormControl sx={{ mt: 2 }}>
                                    <FormLabel component="legend">
                                        Способ оплаты
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={payment}
                                        onChange={(e) =>
                                            setPayment(e.target.value)
                                        }
                                    >
                                        <FormControlLabel
                                            control={<Radio checked={true} />}
                                            label="Наличными при получении"
                                            value="CASH"
                                        />
                                        <FormControlLabel
                                            control={<Radio checked={false} />}
                                            label="Оплата картой онлайн"
                                            value="CARDS"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl sx={{ mt: 2 }}>
                                    <FormLabel component="legend">
                                        Способ доставки
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={delivery}
                                        onChange={(e) =>
                                            setDelivery(e.target.value)
                                        }
                                    >
                                        <FormControlLabel
                                            control={<Radio checked={true} />}
                                            label={`Самовызов`}
                                            value="PICKUP"
                                        />
                                        <FormControlLabel
                                            control={<Radio checked={false} />}
                                            label="Доставка курьером"
                                            value="DELIVERY"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <MyText variant="body1" sx={{ mt: 2 }}>
                                    Подтвердите ваш заказ
                                </MyText>
                                {/* <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 1,
                                    }}
                                >
                                    <MyText variant="body2">
                                        Стоимость товара без скидки:
                                    </MyText>
                                    <MyText variant="body2">
                                        {totalPrice} ₽
                                    </MyText>
                                </Box> */}
                                {/* <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 1,
                                    }}
                                >
                                    <MyText variant="body2">
                                        Бонусы за заказ:
                                    </MyText>
                                    <MyText variant="body2">160 ₽</MyText>
                                </Box> */}
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
                                        {totalPrice} ₽
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
                            <InfoBlog>
                                <Box>
                                    <MyText
                                        variant="h6"
                                        sx={{
                                            color: ThemeMain.palette.primary
                                                .main,
                                            mb: 2,
                                        }}
                                    >
                                        Ваш заказ:
                                    </MyText>
                                    {data.map((item: any, index: number) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                mt: 1,
                                            }}
                                        >
                                            <MyText variant="body2">
                                                {index + 1}.
                                                {item.GoodsCode.name}
                                                &nbsp; x{item.count}
                                            </MyText>
                                            <MyText
                                                variant="body2"
                                                sx={{ fontWeight: 600 }}
                                            >
                                                {item.price} ₽
                                            </MyText>
                                        </Box>
                                    ))}
                                </Box>
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <MyText
                                            variant="body1"
                                            sx={{
                                                color: ThemeMain.palette.primary
                                                    .main,
                                            }}
                                        >
                                            Сумма к оплате:
                                        </MyText>
                                        <MyText
                                            variant="body1"
                                            sx={{
                                                color: ThemeMain.palette.primary
                                                    .main,
                                            }}
                                        >
                                            {totalPrice} ₽
                                        </MyText>
                                    </Box>
                                    <BorderLine />
                                </Box>
                            </InfoBlog>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default BasketForm;

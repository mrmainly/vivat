import React, { useEffect, useState, useContext } from "react";
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
    Autocomplete,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MyText, MyButton, BasketFormSideBars } from "../../components";
import API from "../../api";
import ROUTES from "../../routes";

const InputProfile = styled(TextField)(({ theme }) => ({
    background: "white",
}));

const BasketForm = () => {
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [adress, setAdress] = useState(
        "47CC211D-EECA-4D38-87A1-E255059DD16F"
    );
    const [commend, setCommend] = useState("");
    const [payment, setPayment] = useState("CARD");
    const [delivery, setDelivery] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState("");
    const [costTotalPrice, setCostTotalPrice] = useState(0);
    const [adresses, setAddresses] = useState([]);
    const [myAddress, setMyAddress] = useState("");
    const [floor, setFloor] = useState("");
    const [apartment, setApartament] = useState("");
    const [entrance, setEntrance] = useState("");
    const [AutoCompliteData, setAutoCopliteData] = useState([]);

    const navigate = useNavigate();
    // const dispatch = useContext(DispatchContext);
    // const basketState = useContext(StateContext);

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
                    setAddresses(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getOrders();
    }, []);

    const compliteOrders = () => {
        API.sendOrder({
            payment_type: "CARD",
            delivery_type: delivery,
            comment: commend,
            dep_id: adress,
            SuccessURL:
                "https://xn----7sbbagaytx2c4ad.xn--p1ai/success-payment",
            FailURL: "https://xn----7sbbagaytx2c4ad.xn--p1ai/error-payment",
            address: myAddress,
            floor: floor,
            entrance: entrance,
            apartment: apartment,
        })
            .then((res) => {
                toast.success("???????????? ??????????????????");
                // dispatch({
                //     type: "basket",
                //     payload: {
                //         status: basketState.basket.status + 1,
                //     },
                // });
                res.data === "Success"
                    ? navigate(ROUTES.SUCCESS_PAYMENT)
                    : (window.location.href = res.data);
            })
            .catch((error) => toast.error("???????????? ???? ??????????????????"));
    };

    const handleAutoComplite = (e: any) => {
        setMyAddress(e.target.value);
        API.getAddressAutoComplete(e.target.value)
            .then((res) => {
                const newData = res?.data?.result?.items.map((item: any) => {
                    return item.full_name;
                });

                if (newData === undefined) {
                    setAutoCopliteData([]);
                } else {
                    setAutoCopliteData(newData);
                }
            })
            .catch((error) => console.log(error));
    };

    const getCost = (event: any, values: any) => {
        setMyAddress(values);
        API.getGogoCost(values)
            .then((res) => {
                setCostTotalPrice(res.data.organisation_cost);
            })
            .catch((error) => console.log(error));
    };

    const handleDelivery = (e: any) => {
        setDelivery(e.target.value);
        if (e.target.value === "DELIVERY") {
            setPayment("CARD");
        } else {
            setPayment("CASH");
        }
    };

    const handlePayment = (e: any) => {
        // setPayment(e.target.value);
        if (delivery === "PICKUP") {
            setPayment(e.target.value);
        }
    };

    return (
        <>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <MyText variant="h5">???????????????????? ????????????</MyText>
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
                                ???????????????????? ????????????
                            </MyText>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <InputProfile
                                    label="??????????????"
                                    fullWidth
                                    value={phone}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="??????"
                                    fullWidth
                                    value={firstName}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="??????????????"
                                    fullWidth
                                    value={lastName}
                                    margin="normal"
                                />
                                <InputProfile
                                    label="?????????????????????? ??????????"
                                    fullWidth
                                    value={mail}
                                    margin="normal"
                                />
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    fullWidth
                                    sx={{
                                        opacity:
                                            delivery === "DELIVERY" ? 1 : 0.5,
                                    }}
                                    disabled={delivery != "DELIVERY"}
                                    options={AutoCompliteData}
                                    onInputChange={(event, newInputValue) =>
                                        handleAutoComplite(event)
                                    }
                                    onChange={getCost}
                                    renderInput={(params) => (
                                        <InputProfile
                                            label="??????????"
                                            margin="normal"
                                            {...params}
                                            value={myAddress}
                                        />
                                    )}
                                />
                                <InputProfile
                                    label="????????"
                                    fullWidth
                                    margin="normal"
                                    value={floor}
                                    onChange={(e) => setFloor(e.target.value)}
                                />
                                <InputProfile
                                    label="????????????????"
                                    fullWidth
                                    margin="normal"
                                    value={apartment}
                                    onChange={(e) =>
                                        setApartament(e.target.value)
                                    }
                                />
                                <InputProfile
                                    label="??????????????"
                                    fullWidth
                                    margin="normal"
                                    value={entrance}
                                    onChange={(e) =>
                                        setEntrance(e.target.value)
                                    }
                                />

                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    sx={{ bgcolor: "white" }}
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        ???????????????? ?????????? ????????????:
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="???????????????? ?????????? ????????????:"
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
                                    placeholder="??????????????????????"
                                    style={{ width: "99%", marginTop: 15 }}
                                    value={commend}
                                    onChange={(e) => setCommend(e.target.value)}
                                />
                                {/* <FormControl sx={{ mt: 2 }}>
                                    <FormLabel component="legend">
                                        ???????????? ????????????
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={payment}
                                        onChange={(e) => handlePayment(e)}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={payment === "CASH"}
                                                />
                                            }
                                            label="?????????????????? ?????? ??????????????????"
                                            value="CASH"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={payment === "CARD"}
                                                />
                                            }
                                            label="???????????? ???????????? ????????????"
                                            value="CARD"
                                        />
                                    </RadioGroup>
                                </FormControl> */}
                                <FormControl sx={{ mt: 2 }}>
                                    <FormLabel component="legend">
                                        ???????????? ????????????????
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={delivery}
                                        onChange={(e) => handleDelivery(e)}
                                    >
                                        <FormControlLabel
                                            control={<Radio />}
                                            label={`??????????????????`}
                                            value="PICKUP"
                                        />
                                        <FormControlLabel
                                            control={<Radio />}
                                            label="???????????????? ????????????????"
                                            value="DELIVERY"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <MyText variant="body1" sx={{ mt: 2 }}>
                                    ?????????????????????? ?????? ??????????
                                </MyText>
                                {/* <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 1,
                                    }}
                                >
                                    <MyText variant="body2">
                                        ?????????????????? ???????????? ?????? ????????????:
                                    </MyText>
                                    <MyText variant="body2">
                                        {totalPrice} ???
                                    </MyText>
                                </Box> */}
                                {delivery === "DELIVERY" ? (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mt: 1,
                                        }}
                                    >
                                        <MyText variant="body2">
                                            ???????????? ????????????????:
                                        </MyText>
                                        <MyText variant="body2">
                                            {costTotalPrice} ???
                                        </MyText>
                                    </Box>
                                ) : (
                                    ""
                                )}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 2,
                                        color: "#55CD61",
                                    }}
                                >
                                    <MyText variant="body1">??????????</MyText>
                                    <MyText variant="body2">
                                        {delivery === "DELIVERY"
                                            ? totalPrice + costTotalPrice
                                            : totalPrice}
                                        ???
                                    </MyText>
                                </Box>
                                <MyButton
                                    style={{ marginTop: 20 }}
                                    onClick={compliteOrders}
                                >
                                    ?????????????????????? ??????????
                                </MyButton>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <BasketFormSideBars
                                data={data}
                                totalPrice={totalPrice}
                                costTotalPrice={costTotalPrice}
                                delivery={delivery}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default BasketForm;

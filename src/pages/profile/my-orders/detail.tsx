import React, { useEffect, useState } from "react";

import { Box, Grid, CircularProgress, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import API from "../../../api";
import { StatusCard, MyText, ProfileSideBar } from "../../../components";
import ThemeMain from "../../../theme";

const Main = styled(Box)(({ theme }) => ({
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
        marginLeft: 20,
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
    },
}));

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const Info = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
}));

const CardsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const TopBar = styled(Box)(({ theme }) => ({
    background: "white",
    padding: "10px 20px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
}));

const TextWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const MyOrderDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        const statusProductId = async () => {
            await API.getMeStatusId(params.id)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        statusProductId();
    }, []);

    const dataCard = [
        {
            title: "Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч 22",
            img: "",
            producer: "Nurofenproizvoditel",
            price: "1000 ₽",
            stock: true,
            GoodsCode: "322",
            id: 1,
        },
        {
            title: "Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч 22",
            img: "",
            producer: "Nurofenproizvoditel",
            price: "1000 ₽",
            stock: true,
            GoodsCode: "322",
            id: 1,
        },
    ];

    return (
        <Root>
            <ProfileSideBar title="Основная информация" />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Main>
                    <TopBar>
                        <MyText>№234 от 25.12.2018 16:19</MyText>
                        <MenuItem
                            sx={{ color: ThemeMain.palette.primary.main }}
                        >
                            Вернуться в архив
                        </MenuItem>
                    </TopBar>
                    <Grid container>
                        {dataCard.map((item, index) => (
                            <Grid
                                item
                                lg={12}
                                xl={12}
                                md={12}
                                sm={12}
                                xs={12}
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <StatusCard {...item} />
                            </Grid>
                        ))}
                    </Grid>
                    <Info>
                        <TextWrapper>
                            <MyText variant="body1">Текущий статус: </MyText>
                            <MyText
                                variant="body1"
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    marginLeft: 1,
                                }}
                            >
                                Рассматривается
                            </MyText>
                        </TextWrapper>
                        <TextWrapper>
                            <MyText variant="body1">Сумма заказа</MyText>
                            <MyText
                                variant="body1"
                                sx={{ marginLeft: 1, fontSize: 20 }}
                            >
                                1 696 ₽
                            </MyText>
                        </TextWrapper>
                    </Info>
                </Main>
            )}
        </Root>
    );
};

export default MyOrderDetail;

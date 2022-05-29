import React, { useEffect, useState } from "react";

import { Box, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import API from "../../api";
import { StatusCard, MyText } from "../../components";
import ThemeMain from "../../theme";
import { LargeNumberLike } from "crypto";

const Main = styled(Box)(({ theme }) => ({}));

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

const TextWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

interface DataProps {
    id: number;
    total_price: string | null;
    created: string | null;
    orderStatus: string;
}

const StatusProductDetail = () => {
    const [dataItems, setDataItems] = useState([]);
    const [data, setData] = useState<DataProps>();

    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        const statusProductId = async () => {
            await API.getMeStatusId(params.id)
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                    setDataItems(res.data.items);
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
        <>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : dataItems.length ? (
                <Main>
                    <Box sx={{ display: "flex" }}>
                        <MyText>№{data?.id}</MyText>&nbsp;от&nbsp;
                        <MyText>{data?.created}</MyText>
                    </Box>
                    <Grid container spacing={2}>
                        {dataItems.map((item: any, index: number) => (
                            <Grid
                                item
                                lg={6}
                                xl={6}
                                md={6}
                                sm={12}
                                xs={12}
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <StatusCard
                                    title={item.GoodsCode.name}
                                    price={item.price}
                                    producer={item.GoodsCode.producer}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Info>
                        <TextWrapper>
                            <MyText variant="body1">Текущий статус:</MyText>
                            <MyText
                                variant="body1"
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    marginLeft: 1,
                                }}
                            >
                                {data?.orderStatus}
                            </MyText>
                        </TextWrapper>
                        <TextWrapper>
                            <MyText variant="body1">Сумма заказа </MyText>
                            <MyText
                                variant="body1"
                                sx={{
                                    marginLeft: 1,
                                    fontSize: 20,
                                }}
                            >
                                {data?.total_price} ₽
                            </MyText>
                        </TextWrapper>
                    </Info>
                </Main>
            ) : (
                <Box>
                    <MyText variant="h6">У вас нету заказов</MyText>
                </Box>
            )}
        </>
    );
};

export default StatusProductDetail;

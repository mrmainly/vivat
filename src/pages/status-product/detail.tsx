import React from "react";

import { Box, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import {
    StatusCard,
    MyText,
    translationStatus,
    translationDelivery,
} from "../../components";
import ThemeMain from "../../theme";
import { useGetOrderMeDetailQuery } from "../../services/ProductsService";

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

const StatusProductDetail = () => {
    const params = useParams();

    const { data, isLoading, error } = useGetOrderMeDetailQuery({
        id: params.id,
    });

    return (
        <>
            {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : data.items.length ? (
                <Main>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex" }}>
                            <MyText>№{data?.id}</MyText>&nbsp;от&nbsp;
                            <MyText>{data?.created}</MyText>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <MyText>Тип доставки:</MyText>&nbsp;
                            <MyText
                                sx={{ color: ThemeMain.palette.primary.main }}
                            >
                                {translationDelivery(data?.delivery_type)}
                            </MyText>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        {data.items.map((item: any, index: number) => (
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
                                <StatusCard
                                    title={item.GoodsCode.name}
                                    price={item.price}
                                    producer={item.GoodsCode.producer}
                                    img={item.GoodsCode?.esphoto[0]?.fileData}
                                    id={item.GoodsCode?.id}
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
                                {translationStatus(data?.orderStatus)}
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

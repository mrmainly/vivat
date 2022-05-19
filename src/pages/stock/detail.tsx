import React, { useEffect, useState } from "react";

import { Box, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import { MyText } from "../../components";
import ThemeMain from "../../theme";
import { MainCardsConstructor, ProductCardsSlider } from "../../constructor";
import product_data from "../../local_data/product_data";
import API from "../../api";

const Img = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: 12,
    height: "100%",
    objectFit: "cover",
}));

const StockDetail = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        const getEmploymentsDetail = () => {
            setLoading(true);
            API.getEmploymentsDetail(params.id)
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getEmploymentsDetail();
    }, []);

    return (
        <Box sx={{ mt: 5 }}>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            ) : data ? (
                <>
                    <Grid container spacing={4}>
                        <Grid item lg={4} xl={4} md={5} sm={12} xs={12}>
                            <Img src="/img/depositphotos.jpg" />
                        </Grid>
                        <Grid item lg={8} xl={8} md={7} sm={12} xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <MyText
                                    variant="body2"
                                    sx={{ color: "#a1a1a1" }}
                                >
                                    14 фев 2022
                                </MyText>
                                <MyText
                                    sx={{ color: "#a1a1a1", ml: 0.5, mr: 0.5 }}
                                >
                                    {"-"}
                                </MyText>
                                <MyText
                                    variant="body2"
                                    sx={{ color: "#a1a1a1" }}
                                >
                                    01 апр 2022
                                </MyText>
                            </Box>
                            <MyText
                                variant="h5"
                                sx={{ color: ThemeMain.palette.primary.main }}
                                sm={18}
                            >
                                {data.name}
                            </MyText>
                            <div
                                style={{
                                    marginTop: 20,
                                    color: ThemeMain.palette.primary.main,
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: data.description,
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                    <ProductCardsSlider
                        title="Товары, участвующие в акции"
                        data={product_data}
                    />
                </>
            ) : (
                ""
            )}
        </Box>
    );
};

export default StockDetail;

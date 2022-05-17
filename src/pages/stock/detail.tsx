import React from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../components";
import ThemeMain from "../../theme";

const Img = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: 12,
    height: "100%",
    objectFit: "cover",
}));

const StockDetail = () => {
    return (
        <Box>
            <Grid container spacing={2}>
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
                        <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                            14 фев 2022
                        </MyText>
                        <MyText sx={{ color: "#a1a1a1", ml: 0.5, mr: 0.5 }}>
                            {"-"}
                        </MyText>
                        <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                            01 апр 2022
                        </MyText>
                    </Box>
                    <MyText
                        variant="h5"
                        sx={{ color: ThemeMain.palette.primary.main }}
                        sm={18}
                    >
                        Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы
                        qweqweqwe q weqwe qwe
                    </MyText>
                    <MyText variant="body1" sx={{ mt: 1 }} sm={14}>
                        В период с 18 по 24 октября 2021 года вы можете
                        заказать* с помощью сервиса apteka.ru
                        дезодоранты-антиперспиранты Израильского бренда CARELINE
                        со скидкой до 25% В период с 18 по 24 октября 2021 года
                        вы можете заказать* с помощью сервиса apteka.ru
                        дезодоранты-антиперспиранты Израильского бренда CARELINE
                        со скидкой до 25% В период с 18 по 24 октября 2021 года
                        вы можете заказать* с помощью сервиса apteka.ru
                        дезодоранты-антиперспиранты Израильского бренда CARELINE
                        со скидкой до 25%
                    </MyText>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StockDetail;

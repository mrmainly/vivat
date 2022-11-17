import { Box, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import { MyText } from "../../components";
import ThemeMain from "../../theme";
import { MainCardsConstructor } from "../../constructor";
import { useGetPromotionDetailQuery } from "../../services/PromotionService";

const Img = styled("img")({
    width: "100%",
    borderRadius: 12,
    height: 300,
    objectFit: "cover",
});

const StockDetail = () => {
    const params = useParams();

    const { data, isFetching } = useGetPromotionDetailQuery({
        id: params.id,
    });

    if (isFetching) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 8,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            {data && (
                <>
                    <Grid container spacing={4} sx={{ mb: 4 }}>
                        <Grid item lg={4} xl={4} md={5} sm={12} xs={12}>
                            <Img src={data.image} alt="" />
                        </Grid>
                        <Grid item lg={8} xl={8} md={7} sm={12} xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                                    {data.date_start}
                                </MyText>
                                <MyText sx={{ color: "#a1a1a1", ml: 0.5, mr: 0.5 }}>{"-"}</MyText>
                                <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                                    {data.date_end}
                                </MyText>
                            </Box>
                            <MyText variant="h5" sx={{ color: ThemeMain.palette.primary.main }} sm={18}>
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
                    <MainCardsConstructor title="Товары, участвующие в акции" data={data.goods} />
                </>
            )}
        </Box>
    );
};

export default StockDetail;

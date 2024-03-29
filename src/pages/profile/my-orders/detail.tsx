import { Box, Grid, CircularProgress, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";

import { StatusCard, MyText, ProfileSideBar } from "../../../components";
import ThemeMain from "../../../theme";

import { FormattedMessage } from "react-intl";
import { useGetOrderMeDetailQuery } from "../../../services/ProductsService";

const Main = styled(Box)(({ theme }) => ({
    marginTop: 50,
    width: "100%",
    minHeight: 400,
    [theme.breakpoints.down("md")]: {
        marginLeft: 20,
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
    },
}));

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const Info = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
});

const TopBar = styled(Box)({
    background: "white",
    padding: "10px 20px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
});

const TextWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const MyOrderDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useGetOrderMeDetailQuery({
        id: params.id,
    });

    return (
        <Root>
            <ProfileSideBar
                title={<FormattedMessage id="basic_information" />}
            />
            {isLoading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 8,
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : data?.items.length ? (
                <Main>
                    <TopBar>
                        <MyText>
                            №{data?.id} от {data?.created}
                        </MyText>
                        <MenuItem
                            sx={{ color: ThemeMain.palette.primary.main }}
                            onClick={() => navigate(-1)}
                        >
                            <FormattedMessage id="back_to_archive" />
                        </MenuItem>
                    </TopBar>
                    <Grid container>
                        {data?.items.map((item: any, index: number) => (
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
                            <MyText variant="body1">
                                <FormattedMessage id="current_status" />
                            </MyText>
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
                            <MyText variant="body1">
                                <FormattedMessage id="order_price" />
                            </MyText>
                            <MyText
                                variant="body1"
                                sx={{ marginLeft: 1, fontSize: 20 }}
                            >
                                {data?.total_price} ₽
                            </MyText>
                        </TextWrapper>
                    </Info>
                </Main>
            ) : (
                <Box sx={{ mt: 6 }}>
                    <MyText variant="h6">У вас нет заказов</MyText>
                </Box>
            )}
        </Root>
    );
};

export default MyOrderDetail;

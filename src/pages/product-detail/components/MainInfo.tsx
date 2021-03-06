import React, { useContext } from "react";

import { Grid, Box, IconButton, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { MyText, MyButton } from "../../../components";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThemeMain from "../../../theme";
import API from "../../../api";
import ROUTES from "../../../routes";

const Item = styled(Box)(({ theme }) => ({
    background: "white",
    padding: 20,
    minHeight: 520,
}));

const ItemImg = styled(Box)(({ theme }) => ({
    background: "white",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 520,
    [theme.breakpoints.down("sm")]: {
        minHeight: 200,
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: 300,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const PriceBlog = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: 'center',
    // alignItems: 'center'
    flexDirection: "row",
    marginTop: 5,
}));

const Span = styled("span")(({ theme }) => ({
    marginLeft: 15,
    color: "black",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
    transition: "all 1s ease",
}));

interface MainInfoProps {
    data?: any;
}

const MainInfo: React.FC<MainInfoProps> = ({ data }) => {
    // const state = useContext(StateContext);
    // const dispatch = useContext(DispatchContext);
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();

    // const transferBasket = () => {
    //     API.transferBasket(data.id)
    //         .then((res) => {
    //             toast.success("?????????? ???????????????? ?? ??????????????");
    //             dispatch({
    //                 type: "basket",
    //                 payload: {
    //                     status: state.basket.status + 1,
    //                 },
    //             });
    //         })
    //         .catch((error) => {
    //             toast.error("?????????? ???? ????????????");
    //         });
    // };

    // const addedFavorite = () => {
    //     API.addedFavorite(data.id)
    //         .then((res) => {
    //             dispatch({
    //                 type: "favorite_status",
    //                 payload: {
    //                     status: state.favorite_status.status + 1,
    //                 },
    //             });
    //         })
    //         .catch((error) => toast.error("?????????? ???? ???????????????? ?? ??????????????????"));
    // };

    // const deleteFavorite = () => {
    //     API.deleteFavorite(data.fav?.fav_id)
    //         .then(() => {
    //             dispatch({
    //                 type: "favorite_status",
    //                 payload: {
    //                     status: state.favorite_status.status + 1,
    //                 },
    //             });
    //         })
    //         .catch(() => {
    //             toast.error("?????????? ???? ????????????");
    //         });
    // };

    const array = [
        {
            label: "Mnn:",
            value: data.mnnRu,
        },
        {
            label: "??????????????????????????:",
            value: data.producer,
        },
        {
            label: "????????????:",
            value: data.country,
        },
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <ItemImg
                        sx={{
                            backgroundImage: data?.esphoto[0]?.fileData
                                ? `url(data:image/jpeg;base64,${data.esphoto[0]?.fileData})`
                                : "url(/img/vivat_background.png)",
                        }}
                    ></ItemImg>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Item>
                        <MyText variant="h5" sx={{ mt: 3 }}>
                            {data?.name}
                        </MyText>
                        {data?.stocks?.qty > 0 ? (
                            <MyText
                                variant="body1"
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    mt: 2,
                                    mb: 2,
                                }}
                            >
                                ?????????? ?? ??????????????
                            </MyText>
                        ) : (
                            <MyText
                                variant="body1"
                                sx={{ color: "#FE5860", mt: 2, mb: 2 }}
                            >
                                ???????????? ?????? ?? ??????????????
                            </MyText>
                        )}
                        <MyText
                            variant="body1"
                            sx={{ mt: 1.5, color: "#9B9B9B" }}
                        >
                            ???????????? ??????????????:
                            {data.goodsGroupCodes.map(
                                (item: any, index: number) => (
                                    <Span
                                        key={index}
                                        onClick={() =>
                                            navigate(ROUTES.PRODUCT_PAGE, {
                                                state: {
                                                    id: item.id,
                                                    title: item.name,
                                                },
                                            })
                                        }
                                    >
                                        {item.name}
                                    </Span>
                                )
                            )}
                        </MyText>
                        {array.map((item, index) => (
                            <MyText
                                variant="body1"
                                key={index}
                                sx={{ mt: 1.5, color: "#9B9B9B" }}
                            >
                                {item.label}
                                <span
                                    style={{ marginLeft: 15, color: "black" }}
                                >
                                    {item.value}
                                </span>
                            </MyText>
                        ))}
                        <MyText
                            variant="body1"
                            sx={{ color: "#9B9B9B", mt: 2.5 }}
                        >
                            ????????:
                        </MyText>
                        <PriceBlog>
                            <MyText
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                }}
                            >
                                {data?.stocks?.priceSale
                                    ? data?.stocks?.priceSale
                                    : "???????? ????????"}{" "}
                                ???
                            </MyText>
                            {/* <MyText
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    color: "#999999",
                                    textDecoration: "line-through",
                                    ml: 1,
                                }}
                            >
                                {data.stocks.priceSale} ???
                            </MyText> */}
                        </PriceBlog>
                        {data?.esgood[0]?.notRecept ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 1,
                                    color: ThemeMain.palette.primary.main,
                                }}
                            >
                                <LocalShippingIcon />
                                <MyText variant="body1" sx={{ ml: 2 }}>
                                    ???????????????? ????????????????
                                </MyText>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 1,
                                    color: "#FE5860",
                                }}
                            >
                                <LocalShippingIcon />

                                <MyText variant="body1" sx={{ ml: 2 }}>
                                    ?????? ????????????????
                                </MyText>
                            </Box>
                        )}
                        <Box sx={{ mt: 2 }}>
                            <MyButton
                            // onClick={() => {
                            //     jwttoken
                            //         ? transferBasket()
                            //         : toast.error(
                            //               "???????????? ???????????????? ???????????????? ???????????? ?????? ??????????????????????"
                            //           );
                            // }}
                            >
                                ???????????????? ?? ??????????????
                            </MyButton>

                            {data?.fav?.is_fav ? (
                                <IconButton
                                    sx={{ ml: 5 }}
                                    // onClick={deleteFavorite}
                                >
                                    <FavoriteIcon
                                        sx={{ color: "#55CD61" }}
                                        fontSize="large"
                                    />
                                </IconButton>
                            ) : (
                                <IconButton
                                    sx={{ ml: 5 }}
                                    // onClick={() => {
                                    //     jwttoken;
                                    //     ? addedFavorite()
                                    //     : toast.error(
                                    //           "???????????? ???????????????? ???????????????? ???????????? ?????? ??????????????????????"
                                    //       );
                                    // }}
                                >
                                    <FavoriteBorderIcon
                                        sx={{ color: "#55CD61" }}
                                        fontSize="large"
                                    />
                                </IconButton>
                            )}
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            {/* {array2.map((item, index) => (
                                <MyText
                                    variant="body1"
                                    key={index}
                                    sx={{ mt: 0.8, color: "#9B9B9B" }}
                                >
                                    {item.label}
                                    <span
                                        style={{
                                            marginLeft: 15,
                                            color: "black",
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                </MyText>
                            ))} */}
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainInfo;

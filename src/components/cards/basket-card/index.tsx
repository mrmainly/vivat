import React, { useState, useContext } from "react";

import { Box, IconButton, Button, TextField, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import API from "../../../api";
import ROUTES from "../../../routes";
// import { DispatchContext, StateContext } from "../../../store";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    background: "#FFFFFF",
    borderRadius: 12,
    margin: "5px 0px",
    height: 136,
    padding: 16,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        minHeight: 400,
    },
}));

const ImgBox = styled(Box)(({ theme }) => ({
    height: "100%",
    borderRadius: 9,
    filter: "drop-shadow(2px 3px 8px rgba(0, 0, 0, 0.1))",
    width: 300,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
        height: 250,
        width: "100%",
    },
}));

const InfoBox = styled(Box)(({ theme }) => ({
    marginLeft: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        marginTop: 10,
        height: "100%",
    },
}));

const CountBox = styled(ButtonGroup)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: 20,
}));

const IconButtonDesctop = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const IconButtonMobile = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "block",
    },
}));

const CountWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    [theme.breakpoints.down("sm")]: {
        alignItems: "center",
    },
}));

//

interface BasketProps {
    price?: any;
    GoodsCode?: any;
    id?: number;
    discountVal?: number;
    discountPr?: number;
    order?: number;
    qnt?: number;
    status?: any;
    setStatus?: any;
    count?: number;
    price_one_goods?: number;
}

const BasketCard: React.FC<BasketProps> = ({
    price,
    qnt,
    GoodsCode,
    discountVal,
    discountPr,
    order,
    id,
    status,
    setStatus,
    count,
    price_one_goods,
}) => {
    const patchCountBasket = async (type: string) => {
        if (count) {
            let newCount;
            newCount = type === "plus" ? count + 1 : count - 1;
            API.patchBasket(id, newCount)
                .then((res) => {
                    setStatus(`delete_item_ ${status + 1}`);
                    // dispatch({
                    //     type: "basket",
                    //     payload: {
                    //         status: basketStatus.basket.status + 1,
                    //     },
                    // });
                })
                .catch((error) => {
                    toast.error(
                        "???????????????????? ???????????? ???? ???????????? ???????????? ???????????? ????????????????"
                    );
                });
        }
    };

    const navigate = useNavigate();
    // const dispatch = useContext(DispatchContext);
    // const basketStatus = useContext(StateContext);

    const deleteProduct = () => {
        API.deleteProductItem(id)
            .then((res) => {
                toast.success("?????????? ????????????");
                setStatus(`delete_item_ ${status + 1}`);
                // dispatch({
                //     type: "basket",
                //     payload: {
                //         status: basketStatus.basket.status + 1,
                //     },
                // });
            })
            .catch((err) => {
                toast.error("?????????? ???? ????????????");
            });
    };

    return (
        <Root>
            <ImgBox
                sx={{
                    backgroundImage: GoodsCode?.esphoto[0]?.fileData
                        ? `url(data:image/jpeg;base64,${GoodsCode?.esphoto[0].fileData})`
                        : "url(/img/vivat_background.png)",
                }}
                onClick={() =>
                    navigate(`${ROUTES.PRODUCT_DETAIL}/${GoodsCode?.id}`)
                }
            ></ImgBox>
            <InfoBox>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <MyText variant="body1" sx={{ fontStyle: "normal" }}>
                        {GoodsCode.name}
                    </MyText>
                    <IconButtonMobile onClick={deleteProduct}>
                        <CloseIcon />
                    </IconButtonMobile>
                </Box>

                <MyText variant="body2">
                    ??????????????????????????:
                    <span style={{ marginLeft: 15 }}>{GoodsCode.producer}</span>
                </MyText>
                <MyText variant="body2">
                    ?????? ????????????:<span style={{ marginLeft: 15 }}>{id}</span>
                </MyText>
                {/* <MyText variant="body2">
                    ????????:<span style={{ marginLeft: 15 }}>{price}</span>
                </MyText> */}
                <MyText variant="body2" sx={{ color: "#55CD61" }}>
                    ?? ??????????????
                </MyText>
            </InfoBox>
            <CountWrapper>
                <IconButtonDesctop onClick={deleteProduct}>
                    <CloseIcon />
                </IconButtonDesctop>
                <CountBox>
                    <MyText sx={{ mr: 1 }}>{price_one_goods}???</MyText>
                    <Box sx={{ display: "flex" }}>
                        <Button
                            sx={{
                                color: "#55CD61",
                                borderColor: "#CDCDCD",
                                marginRight: "-1px",
                                width: 30,
                            }}
                            disabled={count === 1}
                            onClick={() => patchCountBasket("minus")}
                        >
                            <RemoveIcon />
                        </Button>
                        <Box
                            sx={{
                                width: 60,
                                borderTop: "0.5px solid #CDCDCD",
                                borderBottom: "0.5px solid #CDCDCD",
                                display: "flex",
                                justifyContent: "center",
                                color: "#55CD61",
                                fontSize: 23,
                            }}
                        >
                            {count}
                        </Box>
                        <Button
                            sx={{
                                color: "#55CD61",
                                borderColor: "#CDCDCD",
                                width: 30,
                                marginLeft: "-1px",
                                borderLeft: "none",
                            }}
                            onClick={() => patchCountBasket("plus")}
                        >
                            <AddIcon />
                        </Button>
                    </Box>
                    <MyText sx={{ ml: 1 }}>{price}???</MyText>
                </CountBox>
            </CountWrapper>
        </Root>
    );
};

export default BasketCard;

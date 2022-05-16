import React from "react";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

import { MyText } from "../..";
import API from "../../../api";
import { AnyARecord } from "dns";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    background: "#FFFFFF",
    borderRadius: 12,
    margin: "5px 0px",
    height: 136,
    padding: 16,
}));
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
}) => {
    const deleteProduct = () => {
        API.deleteProductItem(id)
            .then((res) => {
                toast.success("Товар удален");
                setStatus(status + 1);
            })
            .catch((err) => {
                toast.error("Товар не удален");
            });
    };
    return (
        <Root>
            <Box sx={{ display: "flex", width: "100%" }}>
                <img
                    src="/img/prototypeimg.png"
                    style={{
                        height: "100%",
                        borderRadius: 9,
                        filter: "drop-shadow(2px 3px 8px rgba(0, 0, 0, 0.1))",
                    }}
                />
                <Box
                    sx={{
                        ml: 2.5,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
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
                        <IconButton onClick={deleteProduct}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <MyText variant="body2">
                        Производитель:
                        <span style={{ marginLeft: 15 }}>
                            {GoodsCode.producer}
                        </span>
                    </MyText>
                    <MyText variant="body2">
                        Код товара:<span style={{ marginLeft: 15 }}>322</span>
                    </MyText>
                    <MyText variant="body2" sx={{ color: "#55CD61" }}>
                        В наличии
                    </MyText>
                </Box>
            </Box>
            <Box></Box>
        </Root>
    );
};

export default BasketCard;

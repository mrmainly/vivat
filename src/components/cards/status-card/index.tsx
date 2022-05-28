import React from "react";

import { Box, IconButton, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

import { MyText } from "../..";
import API from "../../../api";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    background: "#FFFFFF",
    borderRadius: 12,
    margin: "5px 0px",
    height: 156,
    padding: 16,
    [theme.breakpoints.down("sm")]: {
        height: 300,
        flexDirection: "column",
        alignItems: "center",
        width: 250,
    },
}));

const Img = styled("img")(({ theme }) => ({
    height: "100%",
    borderRadius: 9,
    filter: "drop-shadow(2px 3px 8px rgba(0, 0, 0, 0.1))",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
        height: 150,
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
        marginTop: 20,
        height: "100%",
    },
}));

interface StatusCardProps {
    price?: any;
    GoodsCode?: any;
    id?: number;
    title?: string;
    img?: string;
    producer?: string;
    stock?: any;
}

const StatusCard: React.FC<StatusCardProps> = ({
    price,
    GoodsCode,
    id,
    title,
    img,
    producer,
    stock,
}) => {
    return (
        <Root>
            <Img src="/img/prototypeimg.png" />
            <InfoBox>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <MyText variant="body1" sx={{ fontStyle: "normal" }}>
                        {title}
                    </MyText>
                </Box>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    Производитель:
                    <span style={{ marginLeft: 15, color: "#0D99FF" }}>
                        {producer}
                    </span>
                </MyText>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    Цена:
                    <span style={{ marginLeft: 15, color: "black" }}>
                        {price}
                    </span>
                </MyText>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    Код товара:
                    <span style={{ marginLeft: 15, color: "black" }}>
                        {GoodsCode}
                    </span>
                </MyText>
                {stock ? (
                    <MyText variant="body2" sx={{ color: "#55CD61" }}>
                        В наличии
                    </MyText>
                ) : (
                    <MyText variant="body2" sx={{ color: "red" }}>
                        Нет в наличии
                    </MyText>
                )}
            </InfoBox>
        </Root>
    );
};

export default StatusCard;

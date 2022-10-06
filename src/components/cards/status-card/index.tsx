import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import ROUTES from "../../../routes";

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

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    background: "#FFFFFF",
    borderRadius: 12,
    margin: "5px 0px",
    height: 156,
    padding: 16,
    [theme.breakpoints.down("sm")]: {
        height: 340,
        flexDirection: "column",
        alignItems: "center",
        width: 280,
    },
}));

const InfoBox = styled(Box)(({ theme }) => ({
    marginLeft: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
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
}) => {
    const navigate = useNavigate();
    return (
        <Root onClick={() => navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`)}>
            <ImgBox
                sx={{
                    backgroundImage: img
                        ? `url(data:image/jpeg;base64,${img})`
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
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <MyText variant="body1" sx={{ fontStyle: "normal" }}>
                        {title}
                    </MyText>

                    <MyText variant="body2" sx={{ color: "gray" }}>
                        Производитель:
                        <span style={{ marginLeft: 15, color: "#0D99FF" }}>
                            {producer}
                        </span>
                    </MyText>
                    <MyText variant="body2" sx={{ color: "gray" }}>
                        Цена:
                        <span style={{ marginLeft: 15, color: "black" }}>
                            {price} ₽
                        </span>
                    </MyText>
                    {/* <MyText variant="body2" sx={{ color: "gray" }}>
                        Код товара:
                        <span style={{ marginLeft: 15, color: "black" }}>
                            {GoodsCode}
                        </span>
                    </MyText> */}
                </Box>
            </InfoBox>
        </Root>
    );
};

export default StatusCard;

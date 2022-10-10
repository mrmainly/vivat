import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import { MyText, BorderLine } from "../../../components";
import ThemeMain from "../../../theme";

const InfoBlog = styled(Box)(({ theme }) => ({
    boxShadow: " 0px 5px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    width: "80%",
    minHeight: 391,
    background: "white",
    padding: 24,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        padding: 10,
    },
}));

interface BasketFormSideBarsProps {
    data: any;
    totalPrice: any;
}

const BasketFormSideBars: React.FC<BasketFormSideBarsProps> = ({
    data,

    totalPrice,
}) => {
    return (
        <InfoBlog>
            <Box>
                <MyText
                    variant="h6"
                    sx={{
                        color: ThemeMain.palette.primary.main,
                        mb: 2,
                    }}
                >
                    Ваш заказ:
                </MyText>
                {data?.map((item: any, index: number) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                        }}
                    >
                        <MyText variant="body2">
                            {index + 1}.{item.GoodsCode.name}
                            &nbsp; x{item.count}
                        </MyText>
                        <MyText variant="body2" sx={{ fontWeight: 600 }}>
                            {item.price} ₽
                        </MyText>
                    </Box>
                ))}
            </Box>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <MyText
                        variant="body1"
                        sx={{
                            color: ThemeMain.palette.primary.main,
                        }}
                    >
                        Сумма к оплате:
                    </MyText>
                    <MyText
                        variant="body1"
                        sx={{
                            color: ThemeMain.palette.primary.main,
                        }}
                    >
                        {totalPrice}₽
                    </MyText>
                </Box>
                <BorderLine />
            </Box>
        </InfoBlog>
    );
};

export default BasketFormSideBars;

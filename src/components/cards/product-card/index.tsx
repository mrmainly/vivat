import React from "react";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { GoodsCardProps } from "../../../interface";
import { MyText, MyButton } from "../..";
import ROUTES from "../../../routes";

const Root = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: 200,
    background: "#FFFFFF",
    padding: 20,
    marginTop: 20,
    marginLeft: 10,
});

const Img = styled("img")({
    width: "100%",
    height: 170,
    objectFit: "cover",
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
});

const CombinedBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
});

const ProductCard: React.FC<GoodsCardProps> = ({
    img,
    description,
    price,
    specialPrice,
    specialText,
    id,
}) => {
    const navigate = useNavigate();
    return (
        <Root>
            <Img src={img} alt="" />
            <MyText
                variant="body1"
                sx={{
                    mt: 2,
                    fontFamily: "Montserrat",
                    color: "#202020",
                    fontWeight: "bold",
                    height: 70,
                    overflow: "hidden",
                }}
            >
                {description}...
            </MyText>
            <MyText
                variant="body1"
                sx={{ color: "#2F80ED", mt: 0.5, cursor: "pointer" }}
            >
                Производитель
            </MyText>
            <MyText
                variant="body1"
                sx={{ color: "#55CD61", mt: 0.5, cursor: "pointer" }}
            >
                В наличии
            </MyText>
            <CombinedBox>
                <Box sx={{ display: "flex" }}>
                    <MyText
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                        }}
                    >
                        {price}₽
                    </MyText>
                    <MyText
                        variant="body2"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                            color: "#999999",
                            textDecoration: "line-through",
                            ml: 1,
                        }}
                    >
                        {specialPrice}₽
                    </MyText>
                </Box>
                <IconButton size="small" sx={{ mr: 1 }}>
                    <img src="/img/Frame1208.png" alt="" />
                </IconButton>
            </CombinedBox>
            <MyText variant="body2" sx={{ color: "#EB5757" }}>
                {specialText}
            </MyText>
            <CombinedBox>
                <MyButton
                    sx={{ width: 130 }}
                    size="medium"
                    onClick={() => navigate(`${ROUTES.PRODUCT_DETAIL}/${id}`)}
                >
                    В корзину
                </MyButton>
                <IconButton size="small" sx={{ mr: 1 }}>
                    <img src="/img/Favorite_light.png" alt="" />
                </IconButton>
            </CombinedBox>
        </Root>
    );
};

export default ProductCard;

import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { StockCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const Img = styled("img")(({ theme }) => ({
    height: 160,
    width: "100%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    objectFit: "cover",
}));

const Main = styled(Box)(({ theme }) => ({
    height: 72,
    padding: 10,
    borderRadius: 12,
}));

const TextWrapper = styled(Box)(({ theme }) => ({
    height: 50,
    overflow: "hidden",
}));

const StockCard: React.FC<StockCardProps> = ({
    img,
    text,
    dateStart,
    dateEnd,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <CardActionArea
            sx={{ borderRadius: 4, background: "white" }}
            onClick={() => navigate(`${ROUTES.STOCK_DETAIL}/${id}`)}
        >
            <Img src={img} />
            <Main>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                        {dateStart}
                    </MyText>
                    <MyText sx={{ color: "#a1a1a1", ml: 0.5, mr: 0.5 }}>
                        {"-"}
                    </MyText>
                    <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                        {dateEnd}
                    </MyText>
                </Box>
                <TextWrapper>
                    <MyText
                        variant="body2"
                        sx={{ color: ThemeMain.palette.primary.main, mt: 1 }}
                    >
                        {text} sadasdasd asdasdasd qweqweqwe qwe qweqw eqwe
                        qweqweqwe
                    </MyText>
                </TextWrapper>
            </Main>
        </CardActionArea>
    );
};

export default StockCard;

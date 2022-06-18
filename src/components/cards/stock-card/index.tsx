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
    image,
    description,
    date_start,
    date_end,
    id,
    city,
}) => {
    const navigate = useNavigate();

    return (
        <CardActionArea
            sx={{ borderRadius: 4, background: "white" }}
            onClick={() => navigate(`${ROUTES.STOCK_DETAIL}/${id}`)}
        >
            <Img src={image} />
            <Main>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                        {date_start}
                    </MyText>
                    <MyText sx={{ color: "#a1a1a1", ml: 0.5, mr: 0.5 }}>
                        {"-"}
                    </MyText>
                    <MyText variant="body2" sx={{ color: "#a1a1a1" }}>
                        {date_end}
                    </MyText>
                </Box>
                <TextWrapper>
                    <div
                        style={{
                            marginTop: 20,
                            color: ThemeMain.palette.primary.main,
                        }}
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                </TextWrapper>
            </Main>
        </CardActionArea>
    );
};

export default StockCard;

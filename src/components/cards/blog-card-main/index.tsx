import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { BlogCardProps } from "../../../interface";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    justifyContent: "start",
    background: "#FFFFFF",
    borderRadius: 12,
    height: 503,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    height: 60,
}));

const Img = styled("img")(({ theme }) => ({
    height: 400,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    objectFit: "cover",
}));

const Tag = styled(Box)(({ theme }) => ({
    padding: 5,
    background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #55CD61",
    width: "max-content",
    borderRadius: 8,
    color: ThemeMain.palette.primary.main,
}));

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    height: 210,
}));

const BlogCardMain: React.FC<BlogCardProps> = () => {
    const text =
        "Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ";

    const date = "15.10.2021";
    const views = "200";
    return (
        <Root>
            <Img src="/img/depositphotos.jpg" />
            <Main>
                <Tag>Здоровье</Tag>
                <TextWrapper>
                    <MyText variant="body1">{text}...</MyText>
                </TextWrapper>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <MyText variant="body2" sx={{ color: "gray" }}>
                        {date}
                    </MyText>
                    <MyText variant="body2" sx={{ color: "gray" }}>
                        {views}
                    </MyText>
                </Box>
            </Main>
        </Root>
    );
};

export default BlogCardMain;

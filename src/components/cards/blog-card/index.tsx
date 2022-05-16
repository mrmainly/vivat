import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { BlogCardProps } from "../../../interface";

const BlogCard: React.FC<BlogCardProps> = ({
    description,
    tag,
    img,
    views,
    date,
    type,
}) => {
    const Root = styled(CardActionArea)(({ theme }) => ({
        display: "flex",
        // alignItems: 'center',
        // justifyContent: 'center',
        background: "#FFFFFF",
        borderRadius: "12px 0",
        justifyContent: "start",
        width: "100%",
        flexDirection: type == "v2" ? "column" : "row",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    }));

    const Img = styled("img")(({ theme }) => ({
        height: type == "v2" ? 118 : 139,
        objectFit: "cover",
        width: type == "v2" ? "100%" : 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: type == "v2" ? 10 : "",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: 150,
        },
    }));

    const TextWrapper = styled(Box)(({ theme }) => ({
        overflow: "hidden",
        height: 40,
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
        height: 106,
        padding: 10,
    }));
    return (
        <Root>
            <Img src={img} />
            <Main>
                <Tag>{tag}</Tag>
                <TextWrapper>
                    <MyText variant="body2">{description}...</MyText>
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

export default BlogCard;

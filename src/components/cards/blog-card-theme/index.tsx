import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const BlogCardTheme: React.FC<BlogCardProps> = ({
    description,
    tag,
    img,
    views,
    date,
    type,
    id,
}) => {
    const navigate = useNavigate();

    const Root = styled(CardActionArea)(({ theme }) => ({
        display: "flex",
        // alignItems: 'center',
        // justifyContent: 'center',
        background: "#FFFFFF",
        borderRadius: "12px 0",
        justifyContent: "start",
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    }));

    const Img = styled("img")(({ theme }) => ({
        height: 210,
        objectFit: "cover",
        width: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: type == "v2" ? 10 : "",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: 150,
        },
    }));

    const TextWrapper = styled(Box)(({ theme }) => ({
        overflow: "hidden",
        height: 96,
        marginTop: 8,
        [theme.breakpoints.down("sm")]: {
            height: 120,
            paddingRight: 10,
        },
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
        minHeight: 180,
        padding: 10,
        width: "100%",
        marginLeft: 15,
    }));
    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={img} />
            <Main>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    {date}
                </MyText>
                <MyText variant="h6">
                    Что нужно знать о аллергии? фыф фывфы вфывфы
                </MyText>
                <TextWrapper>
                    <MyText variant="body1">{description}</MyText>
                </TextWrapper>
                <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                ></Box>
            </Main>
        </Root>
    );
};

export default BlogCardTheme;

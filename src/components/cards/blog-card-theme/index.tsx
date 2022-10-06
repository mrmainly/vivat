import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const BlogCardTheme: React.FC<BlogCardProps> = ({
    description,
    image,
    views,
    date,
    type,
    id,
}) => {
    const navigate = useNavigate();

    const Root = styled(CardActionArea)(({ theme }) => ({
        display: "flex",
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
        height: 98,
        marginTop: 8,
        [theme.breakpoints.down("sm")]: {
            height: 120,
            paddingRight: 10,
        },
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
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Main>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    {date}
                </MyText>
                <MyText variant="h6">
                    Что нужно знать о аллергии? фыф фывфы вфывфы
                </MyText>
                <TextWrapper>
                    <div
                        style={{ fontSize: 17 }}
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    ></div>
                </TextWrapper>
                <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                ></Box>
            </Main>
        </Root>
    );
};

export default BlogCardTheme;

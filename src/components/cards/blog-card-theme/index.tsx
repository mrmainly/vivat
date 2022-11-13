import React from "react";

import { Box, CardActionArea, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";
import "./blog_card_theme.css";

const BlogCardTheme: React.FC<BlogCardProps> = ({ image, views, date, type, id, preview, name }) => {
    const navigate = useNavigate();

    const Root = styled(CardActionArea)(({ theme }) => ({
        display: "flex",
        background: "#FFFFFF",
        borderRadius: 12,
        flexDirection: "column",
        "&:hover": {
            boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
        },
        transition: "all 1s ease",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    }));

    const Img = styled("img")(({ theme }) => ({
        height: 250,
        objectFit: "cover",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
        borderBottom: "1px solid #DFDEDE",
    }));

    const Main = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        height: 190,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: "95%",
    }));
    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Main>
                <MyText variant="body2" sx={{ color: "gray" }}>
                    {date}
                </MyText>
                <Typography className="title" style={{ fontSize: 20, height: 63 }}>
                    {name}
                </Typography>
                <Typography className="description_blog" style={{ marginTop: 8 }}>
                    {preview}
                </Typography>
            </Main>
        </Root>
    );
};

export default BlogCardTheme;

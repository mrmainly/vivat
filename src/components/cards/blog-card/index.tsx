import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText, Tag } from "../..";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const BlogCard: React.FC<BlogCardProps> = ({
    description,
    tags,
    image,
    views,
    date,
    type,
    id,
    name,
}) => {
    const navigate = useNavigate();

    const Root = styled(CardActionArea)(({ theme }) => ({
        display: "flex",
        background: "#FFFFFF",
        borderRadius: "12px 0",
        justifyContent: "start",
        width: "100%",
        flexDirection: type === "v2" ? "column" : "row",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    }));

    const Img = styled("img")(({ theme }) => ({
        height: type === "v2" ? 118 : 139,
        objectFit: "cover",
        width: type === "v2" ? "100%" : 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: type === "v2" ? 10 : "",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: 150,
        },
    }));

    const TextWrapper = styled(Box)({
        overflow: "hidden",
        height: 40,
    });

    const Main = styled(Box)({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 106,
        padding: 10,
    });
    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Box sx={{ width: "100%" }}>
                <Main>
                    <Tag>{tags ? tags.name : "Нет тега"}</Tag>
                    <TextWrapper>{name}</TextWrapper>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <MyText variant="body2" sx={{ color: "gray" }}>
                            {date}
                        </MyText>
                        <MyText variant="body2" sx={{ color: "gray" }}>
                            {views}
                        </MyText>
                    </Box>
                </Main>
            </Box>
        </Root>
    );
};

export default BlogCard;

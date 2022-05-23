import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText, Tag } from "../..";
import ThemeMain from "../../../theme";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    justifyContent: "start",
    background: "#FFFFFF",
    borderRadius: 12,
    height: 503,
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    height: 46,
}));

const Img = styled("img")(({ theme }) => ({
    height: 360,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    objectFit: "cover",
}));

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    height: "100%",
}));

const BlogCardMain: React.FC<BlogCardProps> = ({
    description,
    topic,
    image,
    views,
    date,
    type,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Box sx={{ width: "100%", height: "100%", pb: 2 }}>
                <Main>
                    <Tag>{topic}</Tag>
                    <TextWrapper>
                        <div
                            style={{ fontSize: 14 }}
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        ></div>
                    </TextWrapper>
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

export default BlogCardMain;

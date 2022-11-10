import React from "react";

import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { MyText, Tag } from "../..";
import { BlogCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
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

const TextWrapper = styled(Box)({
    overflow: "hidden",
    height: 46,
});

const Img = styled("img")({
    height: 360,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    objectFit: "cover",
});

const Main = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    height: "100%",
});

const BlogCardMain: React.FC<BlogCardProps> = ({ description, tags, image, views, date, type, id }) => {
    const navigate = useNavigate();
    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Box sx={{ width: "100%", height: "100%", pb: 2 }}>
                <Main>
                    <Tag>{tags ? tags.name : "Нет тега"}</Tag>
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
                        <MyText variant="body2" sx={{ color: "gray", display: "flex", alignItems: "center" }}>
                            <RemoveRedEyeIcon fontSize="small" sx={{ mr: 1 }} />
                            {views}
                        </MyText>
                    </Box>
                </Main>
            </Box>
        </Root>
    );
};

export default BlogCardMain;

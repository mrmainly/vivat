import React from "react";

import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import { MyText, Tag } from "../../components";
import { useGetBlogDetailQuery } from "../../services/BlogService";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    borderRadius: "12px 0",
    justifyContent: "start",
    width: "100%",
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 150,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: "80%",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const BlogDetail = () => {
    const params = useParams();

    const { data, isLoading, error } = useGetBlogDetailQuery({ id: params.id });

    return (
        <Root>
            {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : data ? (
                <>
                    <MyText
                        variant="h5"
                        sx={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",

                            overflow: "hidden",
                        }}
                    >
                        {data.name}
                    </MyText>
                    {data.author ? (
                        <MyText
                            variant="h6"
                            sx={{ mt: 1, mb: 1, color: "gray" }}
                        >
                            {`${data.author.last_name} ${data.author.first_name} ${data.author.patronymic}`}
                        </MyText>
                    ) : (
                        "Нету автора"
                    )}
                    <Tag>{data.tags.name}</Tag>
                    <Img
                        src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${data.image}`}
                    />
                    <Box sx={{ display: "flex", color: "gray" }}>
                        <MyText variant="body1" sx={{ mr: 8 }}>
                            {data.date}
                        </MyText>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="/img/View.png"
                                style={{ width: 20, height: 20 }}
                            />
                            <MyText variant="body1" sx={{ ml: 0.5 }}>
                                {data.views}
                            </MyText>
                        </Box>
                    </Box>
                    <div
                        style={{ marginTop: 20, width: "90%" }}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </>
            ) : (
                ""
            )}
        </Root>
    );
};

export default BlogDetail;

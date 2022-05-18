import React, { useState, useEffect } from "react";

import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";

import { MyText, Tag } from "../../components";
import API from "../../api";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
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

interface DataProps {
    name: string;
}

const BlogDetail = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        const getBlogDetail = async () => {
            setLoading(true);
            await API.getBlogDetail(params.id)
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            setLoading(false);
        };
        getBlogDetail();
    }, []);

    return (
        <Root>
            {loading ? (
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
                    <MyText variant="h6" sx={{ mt: 1, mb: 1, color: "gray" }}>
                        {`${data.author.last_name} ${data.author.first_name}`}
                    </MyText>
                    <Tag>{data.topic}</Tag>
                    <Img src="/img/Frame83.png" />
                    <Box sx={{ display: "flex", color: "gray" }}>
                        <MyText variant="body1" sx={{ mr: 8 }}>
                            {data.date}
                        </MyText>
                        <MyText variant="body1">{data.views}</MyText>
                    </Box>
                    <Box
                        sx={{
                            height: 500,
                            background: "white",
                            padding: 2,
                            borderRadius: 5,
                            mt: 2.5,
                            width: "90%",
                        }}
                    >
                        {data.description}
                    </Box>
                </>
            ) : (
                ""
            )}
        </Root>
    );
};

export default BlogDetail;

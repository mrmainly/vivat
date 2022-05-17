import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MyText, Tag } from "../../components";

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

const BlogDetail = () => {
    return (
        <Root>
            <MyText
                variant="h5"
                sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}
            >
                Что нужно знать о аллергии? фыф фывфы вфывфы вфыв фывфыфыв фыв
                фыв фыв фыпаы asdasd asdasdasd
            </MyText>
            <MyText variant="h6" sx={{ mt: 1, mb: 1, color: "gray" }}>
                Иванов Иван Иванович
            </MyText>
            <Tag>Здоровье</Tag>
            <Img src="/img/Frame83.png" />
            <Box sx={{ display: "flex", color: "gray" }}>
                <MyText variant="body1" sx={{ mr: 8 }}>
                    15.10.2021
                </MyText>
                <MyText variant="body1">200</MyText>
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
                asdasdasdasdasdasdsa
            </Box>
        </Root>
    );
};

export default BlogDetail;

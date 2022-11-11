import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { MyText, Tag } from "../../../components";
import { useGetBlogDetailQuery } from "../../../services/BlogService";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    borderRadius: "12px 0",
    justifyContent: "start",
    width: "100%",
    flexDirection: "column",

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
    height: "auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const BlogDetail = () => {
    const params = useParams();

    const { data, isLoading } = useGetBlogDetailQuery({ id: params.id });

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Root>
            <MyText
                variant="h5"
                sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    marginBottom: 1,
                    overflow: "hidden",
                }}
            >
                {data.name}
            </MyText>

            {/* <Tag>{data.tags.name}</Tag> */}
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${data.image}`} alt="" />
            <Box sx={{ display: "flex", color: "gray" }}>
                <MyText variant="body1" sx={{ mr: 8 }}>
                    {data.date}
                </MyText>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <RemoveRedEyeIcon fontSize="small" />
                    <MyText variant="body1" sx={{ ml: 0.5 }}>
                        {data.views}
                    </MyText>
                </Box>
            </Box>
            <div style={{ marginTop: 20, width: "90%" }} dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </Root>
    );
};

export default BlogDetail;

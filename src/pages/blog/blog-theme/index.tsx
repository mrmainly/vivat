import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import { MyText, BlogCardTheme } from "../../../components";
import { useGetBlogQuery } from "../../../services/BlogService";

interface NameProps {
    name?: string;
    value?: string;
    type: string;
}

const ThemeBlog = () => {
    const { data, isLoading } = useGetBlogQuery({
        query: "",
        type: "",
    });

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            {/* <MyText variant="h5">{name}</MyText> */}
            <Box>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: 20,
                        marginBottom: 1,
                    }}
                >
                    Новости и статьи
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    {data?.results.map((item: any, index: number) => (
                        <BlogCardTheme {...item} key={index} />
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ThemeBlog;

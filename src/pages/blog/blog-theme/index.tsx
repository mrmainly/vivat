import { useState } from "react";
import {
    Box,
    CircularProgress,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Pagination,
} from "@mui/material";
import { styled } from "@mui/system";

import { BlogCardTheme, BlogThemeSkeleton } from "../../../components";
import { useGetBlogQuery } from "../../../services/BlogService";

interface NameProps {
    name?: string;
    value?: string;
    type: string;
}

const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
    },
}));

const Search = styled(FormControl)(({ theme }) => ({
    width: 300,
}));

const ThemeBlog = () => {
    const [ordering, setOrdering] = useState("");
    const [currentPage, setCurrentPage] = useState<any>(1);

    const { data, isFetching } = useGetBlogQuery({
        query: ordering,
        type: "",
        currentPage: currentPage,
    });

    let countNumber = Math.ceil(data?.count / 20);

    const orderingList = [
        {
            label: "дата создания (по возрастанию)",
            value: "date",
        },
        {
            label: "дата создания (по убыванию)",
            value: "-date",
        },
        {
            label: "Популярное сайчас",
            value: "-popularity",
        },
        {
            label: "Популярное за все время",
            value: "popularity_all_time",
        },
    ];

    const handleOrdering = (e: any) => {
        setOrdering(e.target.value);
    };

    return (
        <Box>
            {/* <MyText variant="h5">{name}</MyText> */}

            <SearchBox>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: 23,
                    }}
                >
                    Новости и статьи
                </Typography>
                <Search size="small">
                    <InputLabel id="demo-simple-select-label">
                        Сортировка
                    </InputLabel>
                    <Select
                        size="small"
                        label="Сортировка"
                        value={ordering}
                        onChange={handleOrdering}
                    >
                        {orderingList.map((item, index) => (
                            <MenuItem value={item.value} key={index}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Search>
            </SearchBox>
            <Pagination
                style={{ marginBottom: 20 }}
                count={countNumber}
                onChange={(event, value) => {
                    setCurrentPage(value);
                }}
            />
            {isFetching ? (
                <BlogThemeSkeleton />
            ) : (
                <Grid container spacing={2}>
                    {data?.results.map((item: any, index: number) => (
                        <Grid
                            item
                            xl={4}
                            lg={4}
                            md={4}
                            sm={6}
                            xs={12}
                            key={index}
                        >
                            <BlogCardTheme {...item} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Pagination
                style={{ marginTop: 20 }}
                count={countNumber}
                onChange={(event, value) => {
                    setCurrentPage(value);
                }}
            />
        </Box>
    );
};

export default ThemeBlog;

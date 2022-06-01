import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import API from "../../api";

const WrapperBox = styled(Box)(({ theme }) => ({
    display: "flex",
}));

interface CustomizedState {
    id: number | string;
    title?: string;
}

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const state = location.state as CustomizedState;

    const { id, title } = state;

    useEffect(() => {
        const getProducts = async () => {
            await API.getProductsList(id, currentPage)
                .then((res) => {
                    console.log(res);
                    setData(res.data.results);
                    setCount(res.data.count);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getProducts();
    }, [currentPage]);

    let countNumber = Math.ceil(count / 20);
    return (
        <Box sx={{ width: "100%" }}>
            <MyText variant="h5" sx={{ mb: 2 }}>
                {title}
            </MyText>
            <Grid container spacing={2}>
                <Grid lg={3} xl={3} md={3} sm={0} xs={0} item>
                    <CatalogFilterSideBar />
                </Grid>
                <Grid lg={9} xl={9} md={9} sm={12} xs={12} item>
                    {loading ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : data.length > 0 ? (
                        <>
                            <MainCardsConstructor data={data} />
                            <Pagination
                                count={countNumber}
                                style={{ marginTop: 20 }}
                                onChange={(event, value) =>
                                    setCurrentPage(value)
                                }
                            />
                        </>
                    ) : (
                        <Box>
                            <MyText variant="h6">Лекарств нету</MyText>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;

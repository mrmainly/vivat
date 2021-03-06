import React, { useEffect, useState } from "react";

import { Box, Grid, Pagination, CircularProgress } from "@mui/material";

import { MyText, StockCard } from "../../components";
import API from "../../api";

const Stock = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);

    let countNumber = Math.ceil(count / 10);

    useEffect(() => {
        const getPromotion = async () => {
            setLoading(true);
            await API.getPromotion()
                .then((res) => {
                    setCount(res.data.count);
                    setData(res.data.results);
                })
                .catch((error) => {
                    console.log(error);
                });
            setLoading(false);
        };
        getPromotion();
    }, []);

    return (
        <Box>
            <MyText variant="h5">Акции</MyText>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {data.map((item: any, index: number) => (
                            <Grid
                                item
                                lg={3}
                                xl={3}
                                md={4}
                                sm={6}
                                xs={12}
                                key={index}
                            >
                                <StockCard {...item} />
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination
                        style={{ marginTop: 20 }}
                        count={countNumber}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                </>
            )}
        </Box>
    );
};

export default Stock;

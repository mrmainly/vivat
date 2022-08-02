import React, { useState } from "react";

import { Box, Grid, Pagination, CircularProgress } from "@mui/material";

import { MyText, StockCard } from "../../components";
import { useGetPromotionQuery } from "../../services/PromotionService";

const Stock = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isFetching, error } = useGetPromotionQuery({ currentPage });

    let countNumber = Math.ceil(data?.count / 10);

    return (
        <Box>
            <MyText variant="h5">Акции</MyText>
            {isFetching ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {data?.results.map((item: any, index: number) => (
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

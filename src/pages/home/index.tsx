import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Box, Pagination } from "@mui/material";
import { styled } from "@mui/system";

import {
    HomeSlider,
    HomeSecondSlider,
    MainCardsConstructor,
} from "../../constructor";
import { MyText } from "../../components";
import { useGetPromotionQuery } from "../../services/PromotionService";
import { useGetProductsQuery } from "../../services/ProductsService";

const BannerSkeleton = styled(Skeleton)(({ theme }) => ({
    height: 500,
    borderRadius: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
        height: 300,
    },
    [theme.breakpoints.down("sm")]: {
        height: 200,
    },
}));

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data: promotion, isFetching, error } = useGetPromotionQuery("");
    const { data: products, isFetching: isProductsFetching } =
        useGetProductsQuery({ id: 1, currentPage });

    let countNumber = Math.ceil(products?.count / 20);

    return (
        <div>
            {isFetching ? (
                <BannerSkeleton />
            ) : error ? (
                ""
            ) : (
                <HomeSlider data={promotion?.results} />
            )}
            <Box sx={{ marginTop: promotion?.results.length ? 5 : 0 }}>
                <HomeSecondSlider title="Наши преимущества" />
                <MyText variant="h5" sx={{ mb: 1, mt: 1 }}>
                    Лек. средства
                </MyText>
                {products?.results.length && (
                    <Pagination
                        count={countNumber}
                        page={currentPage}
                        style={{ marginBottom: 20, marginTop: 20 }}
                        onChange={(event, value) => {
                            setCurrentPage(value);
                        }}
                    />
                )}
                <MainCardsConstructor
                    data={products?.results}
                    loading={isProductsFetching}
                />
                {products?.results.length && (
                    <Pagination
                        count={countNumber}
                        page={currentPage}
                        style={{ marginTop: 20 }}
                        onChange={(event, value) => {
                            setCurrentPage(value);
                        }}
                    />
                )}
            </Box>
        </div>
    );
};

export default Home;

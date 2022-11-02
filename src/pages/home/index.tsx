import { useState } from "react";

import { Box } from "@mui/material";

import { HomeSecondSlider } from "../../constructor";
import { useGetPromotionQuery, useGetPromotionCatalogQuery } from "../../services/PromotionService";
import { useGetProductsQuery } from "../../services/ProductsService";
import Banners from "./components/Banners";
import ProductsCatalog from "./components/ProductsCatalog";
import CatalogSliders from "./components/CatalogSliders";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data: promotion, isLoading: isBannerLoading } = useGetPromotionQuery("");
    const { data: products, isFetching: isProductsFetching } = useGetProductsQuery({ id: 1, currentPage });
    const { data: promotionCatalog, isLoading: isCatalogLoading } = useGetPromotionCatalogQuery("");

    return (
        <div>
            <Banners isBannerLoading={isBannerLoading} promotion={promotion} />
            <Box sx={{ marginTop: promotion?.results.length ? 5 : 0 }}>
                <HomeSecondSlider title="Наши преимущества" />
                <CatalogSliders data={promotionCatalog} loading={isCatalogLoading} />
                <ProductsCatalog products={products} isProductsFetching={isProductsFetching} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </Box>
        </div>
    );
};

export default Home;

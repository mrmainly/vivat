import { Box } from "@mui/material";

import { HomeSecondSlider } from "../../constructor";
import { useGetPromotionQuery, useGetPromotionCatalogQuery } from "../../services/PromotionService";
import Banners from "./components/Banners";
import CatalogSliders from "./components/CatalogSliders";

const Home = () => {
    const { data: promotion, isLoading: isBannerLoading } = useGetPromotionQuery("");
    const { data: promotionCatalog, isLoading: isCatalogLoading } = useGetPromotionCatalogQuery("");

    return (
        <div>
            <Banners isBannerLoading={isBannerLoading} promotion={promotion} />
            <Box sx={{ marginTop: promotion?.results.length ? 5 : 0 }}>
                <HomeSecondSlider title="Наши преимущества" />
                <CatalogSliders data={promotionCatalog} loading={isCatalogLoading} />
            </Box>
        </div>
    );
};

export default Home;

import { Box } from "@mui/material";

import { HomeSecondSlider } from "../../constructor";
import { useGetPromotionQuery, useGetPromotionCatalogQuery } from "../../services/PromotionService";
import { useGetAdvantageQuery } from "../../services/BlogService";
import Banners from "./components/Banners";
import CatalogSliders from "./components/CatalogSliders";

const Home = () => {
    const { data: promotion, isLoading: isBannerLoading } = useGetPromotionQuery("");
    const { data: promotionCatalog, isLoading: isCatalogLoading } = useGetPromotionCatalogQuery("");
    const { data: advetageData, isLoading: isAdvetageLoading } = useGetAdvantageQuery("");

    return (
        <div>
            <Banners isBannerLoading={isBannerLoading} promotion={promotion} />
            <Box sx={{ marginTop: promotion?.results.length ? 5 : 0 }}>
                <HomeSecondSlider title="Наши преимущества" data={advetageData} loading={isAdvetageLoading} />
                <CatalogSliders data={promotionCatalog} loading={isCatalogLoading} />
            </Box>
        </div>
    );
};

export default Home;

import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import MainInfo from "./components/MainInfo";
import DescriptionScreen from "./components/Tab";
import { SkeletonProductDetail } from "../../components";
import {
    useGetProductDetailQuery,
    useGetProductAnalQuery,
} from "../../services/ProductsService";

const ProductDetail = () => {
    const params = useParams();

    const { data } = useGetProductDetailQuery({
        id: params.id,
    });
    const { data: dataAnalog, isFetching: isFetchingAnalog } =
        useGetProductAnalQuery({ id: params.id });

    return (
        <>
            {data ? (
                <>
                    <MainInfo data={data} />
                    {/* <ProductCardsSlider
                        title="Форма выпуска"
                        data={product_data}
                    /> */}
                    <DescriptionScreen
                        instructions={data.esgood[0]}
                        analData={
                            dataAnalog?.results ? dataAnalog?.results : []
                        }
                        loading={isFetchingAnalog}
                    />
                </>
            ) : (
                <Box>
                    <SkeletonProductDetail />
                </Box>
            )}
        </>
    );
};

export default ProductDetail;

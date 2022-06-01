import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import MainInfo from "./components/MainInfo";
import DescriptionScreen from "./components/DescriptionScreen";
import { ProductCardsSlider } from "../../constructor";
import product_data from "../../local_data/product_data";
import API from "../../api";
import { CircularProgress } from "@mui/material";

const ProductDetail = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        const getProductId = async () => {
            setLoading(true);
            API.getProductId(params.id)
                .then((res) => {
                    setData(res.data);
                    console.log(res);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getProductId();
    }, []);
    return (
        <>
            {data ? (
                <>
                    <MainInfo data={data} />
                    <ProductCardsSlider
                        title="Форма выпуска"
                        data={product_data}
                    />
                    <DescriptionScreen />
                </>
            ) : (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default ProductDetail;

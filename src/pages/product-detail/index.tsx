import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import MainInfo from "./components/MainInfo";
import DescriptionScreen from "./components/Tab";
import API from "../../api";
import { CircularProgress } from "@mui/material";
import { SkeletonProductDetail } from "../../components";

const ProductDetail = () => {
    const [data, setData] = useState<any>();
    const [analogData, setAnalogData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [instructions, setInstructions] = useState("");

    const params = useParams();

    useEffect(() => {
        const getProductId = async () => {
            setLoading(true);
            await API.getProductId(params.id)
                .then((res) => {
                    setData(res.data);
                    console.log(res);
                    return res.data.id;
                })
                .then((resId) => {
                    API.getProductAnal(resId).then((res) => {
                        console.log("anal", res);
                        if (res.data.results) {
                            setAnalogData(res.data.results);
                        } else {
                            setAnalogData(res.data);
                        }
                    });
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getProductId();
    }, [params.id]);
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
                        analData={analogData}
                        loading={loading}
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

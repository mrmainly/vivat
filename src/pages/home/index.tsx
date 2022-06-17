import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Box, Pagination } from "@mui/material";

import { HomeSlider, HomeSecondSlider, MainCardsConstructor } from "../../constructor";
import API from "../../api";
import { MyText } from "../../components";

const Home = () => {
    const [dataBanner, setDataBanner] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [sliderLoading, setLoadingSlider] = useState(false);
    const [homeSecondSliderCount, setHomeSecondSliderCount] = useState(4);

    useEffect(() => {
        const getPromotion = async () => {
            setLoading(true);

            await API.getProductsList(1, currentPage)
                .then((res) => {
                    setData(res.data.results);
                    setCount(res.data.count);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getPromotion();
    }, [currentPage]);

    useEffect(() => {
        const getBanner = async () => {
            setLoadingSlider(true);
            await API.getPromotionMain()
                .then((res) => {
                    setDataBanner(res.data);
                })
                .catch((error) => console.log(error));
            setLoadingSlider(false);
        };
        getBanner();
    }, []);

    let countNumber = Math.ceil(count / 20);

    return (
        <div>
            {sliderLoading ? (
                <Skeleton style={{ height: 500, borderRadius: 50 }} />
            ) : (
                <HomeSlider data={dataBanner} />
            )}
            <Box sx={{ mt: 10 }}>
                <HomeSecondSlider title="Наши преимущества"/>
                <MyText variant="h5" sx={{ mb: 1 }}>
                    Лек. средства
                </MyText>
                <Pagination
                    count={countNumber}
                    style={{ marginBottom: 20, marginTop: 20 }}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
                <MainCardsConstructor data={data} loading={loading} />
                <Pagination
                    count={countNumber}
                    style={{ marginTop: 20 }}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
            </Box>
        </div>
    );
};

export default Home;

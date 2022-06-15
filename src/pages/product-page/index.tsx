import React, { useEffect, useState, useContext } from "react";
import { Box, Grid, Pagination, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import { StateContext } from "../../store";
import API from "../../api";

const WrapperBox = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const ButtonShow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "row",
    },
}));

interface CustomizedState {
    id: number | string;
    title?: string;
}

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [availability, setAvailability] = useState("");

    const location = useLocation();
    const state = location.state as CustomizedState;
    const stateContext = useContext(StateContext);

    const { id, title } = state;

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    const getProducts = async (data: any = []) => {
        console.log("filter", data);
        const filter = async () => {
            setLoading(true);
            await API.getProductsList(id, currentPage, data)
                .then((res) => {
                    console.log(res);
                    if (res.data.results) {
                        setData(res.data.results);
                    } else {
                        setData(res.data);
                    }
                    setCount(res.data.count);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        filter();
    };

    useEffect(() => {
        getProducts();
    }, [currentPage, id, stateContext.favorite_status.status]);

    let countNumber = Math.ceil(count / 20);

    return (
        <Box sx={{ width: "100%" }}>
            <MyText variant="h5" sx={{ mb: 2 }}>
                {title}
            </MyText>
            <Grid container spacing={2}>
                <Grid lg={3} xl={3} md={3} sm={0} xs={0} item>
                    <CatalogFilterSideBar
                        open={drawerOpen}
                        setOpen={setDrawerOpen}
                        availability={availability}
                        setAvailability={setAvailability}
                        onSubmit={getProducts}
                    />
                </Grid>
                <Grid lg={9} xl={9} md={9} sm={12} xs={12} item>
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            <Pagination
                                count={countNumber}
                                onChange={(event, value) => {
                                    setCurrentPage(value);
                                    backToTop();
                                }}
                            />
                            <ButtonShow
                                onClick={() => {
                                    setDrawerOpen(true);
                                }}
                            >
                                <Hamburger toggled={drawerOpen} />
                            </ButtonShow>
                        </Box>
                        <MainCardsConstructor data={data} loading={loading} />
                        <Pagination
                            count={countNumber}
                            style={{ marginTop: 20 }}
                            onChange={(event, value) => {
                                setCurrentPage(value);
                                backToTop();
                            }}
                        />
                    </>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;

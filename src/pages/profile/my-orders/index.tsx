import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { ProfileSideBar, MyOrdersTable } from "../../../components";
import API from "../../../api";
import ROUTES from "../../../routes";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const MyOrders = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getOrderMe = async () => {
            setLoading(true);
            await API.getOrdersMe()
                .then((res) => {
                    setData(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getOrderMe();
    }, []);
    return (
        <Main>
            <ProfileSideBar title="Мои заказы" />

            <Box sx={{ mt: 6.3, width: "100%" }}>
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 5,
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <MyOrdersTable
                        data={data}
                        navigate_to={ROUTES.MY_ORDERS_DETAIL}
                    />
                )}
            </Box>
        </Main>
    );
};

export default MyOrders;

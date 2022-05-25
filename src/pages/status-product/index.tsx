import React, { useEffect, useState } from "react";

import { Box, CircularProgress } from "@mui/material";
import ROUTES from "../../routes";

import API from "../../api";
import { MyOrdersTable } from "../../components";

const StatusProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrdersMeStatus = async () => {
            await API.getOrdersMeStatus()
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getOrdersMeStatus();
    }, []);

    return (
        <Box>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <MyOrdersTable
                    data={data}
                    navigate_to={ROUTES.STATUS_PRODUCT_DETAIL}
                />
            )}
        </Box>
    );
};

export default StatusProduct;

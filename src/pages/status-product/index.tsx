import React from "react";

import { Box, CircularProgress } from "@mui/material";
import ROUTES from "../../routes";

import { MyOrdersTable } from "../../components";
import { useGetOrdersMeStatusQuery } from "../../services/StatusService";

const StatusProduct = () => {
    const { data, isLoading } = useGetOrdersMeStatusQuery("");

    return (
        <Box>
            {isLoading ? (
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

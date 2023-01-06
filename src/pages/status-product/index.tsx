import React from "react";

import { Box, CircularProgress } from "@mui/material";
import ROUTES from "../../routes";

import { MyOrdersTable } from "../../components";
import { useGetOrdersMeStatusQuery } from "../../services/StatusService";

const StatusProduct = () => {
    const { data, isLoading } = useGetOrdersMeStatusQuery("");

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            <MyOrdersTable
                data={data?.results}
                navigate_to={ROUTES.STATUS_PRODUCT_DETAIL}
            />
        </Box>
    );
};

export default StatusProduct;

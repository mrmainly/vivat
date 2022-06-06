import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import Skeleton from "react-loading-skeleton";

const SkeletonCard = styled(Box)(({ theme }) => ({
    width: "90%",
    height: 430,
    background: "white",
    padding: 10,
}));

const SkeletonVersion = () => {
    return (
        <SkeletonCard>
            <Skeleton style={{ height: 170 }} />
            <Skeleton style={{ height: 30, marginTop: 18 }} />
            <Skeleton style={{ height: 50, marginTop: 30 }} />
            <Skeleton style={{ height: 20, width: 90, marginTop: 10 }} />
            <Skeleton style={{ height: 25, width: 70, marginTop: 10 }} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                    alignitems: "center",
                }}
            >
                <Skeleton style={{ height: 40, width: 100 }} />
                <Skeleton style={{ height: 40, width: 40 }} circle />
            </Box>
        </SkeletonCard>
    );
};

export default SkeletonVersion;

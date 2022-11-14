import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

import { MyText } from "../../../components";
import { useGetWorkDetailQuery } from "../../../services/WorkService";

const PharmacyDetailWork = () => {
    const params = useParams();

    const { data, isLoading, error } = useGetWorkDetailQuery({ id: params.id });

    return (
        <Box>
            {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box>
                    <MyText variant="h4">{data.name}</MyText>
                    <Box style={{ width: "100%", minHeight: 800, background: "white", paddingLeft: 20, paddingTop: 5, marginTop: 20 }}>
                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default PharmacyDetailWork;

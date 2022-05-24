import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

import API from "../../../../api";
import { MyText, MyButton } from "../../../../components";

const PharmacyDetailWork = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        const getEmploymentsDetail = async () => {
            setLoading(true);
            await API.getEmploymentsDetail(params.id)
                .then((res) => {
                    setData(res.data);
                    console.log(res);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getEmploymentsDetail();
    }, []);
    return (
        <Box>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : data ? (
                <Box>
                    <MyText variant="h4">{data.name}</MyText>
                    <div
                        style={{ marginTop: 20 }}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </Box>
            ) : (
                ""
            )}
        </Box>
    );
};

export default PharmacyDetailWork;

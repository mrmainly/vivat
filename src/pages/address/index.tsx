import React, { useMemo } from "react";
import { styled } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { MyText, AddressSideBar } from "../../components";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const Address = () => {
    return (
        <YMaps>
            <MyText variant="h5">Адреса аптек</MyText>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item lg={3} xl={3}>
                    <AddressSideBar />
                </Grid>
                <Grid item lg={9} xl={9}>
                    <Map
                        width={"100%"}
                        height={800}
                        defaultState={{
                            center: [62.040876, 129.730635],
                            zoom: 15,
                        }}
                    >
                        <Placemark geometry={[62.040876, 129.730635]} />
                    </Map>
                </Grid>
            </Grid>
        </YMaps>
    );
};

export default Address;

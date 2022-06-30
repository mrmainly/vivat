import React, { useMemo, useEffect, useState } from "react";
import { CircularProgress, MenuItem, styled } from "@mui/material";
import { Box, Grid } from "@mui/material";
import {
    YMaps,
    Map,
    Placemark,
    ListBox,
    ListBoxItem,
    Button,
    ZoomControl,
} from "react-yandex-maps";

import { MyText, AddressSideBar } from "../../components";
import API from "../../api";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const Address = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [mapCenter, setMapCenter] = useState([62.027316, 129.732271]);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        const getAddress = async () => {
            setLoading(true);
            await API.getAddress()
                .then((res) => {
                    console.log("address", res);
                    setData(res.data.unit);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getAddress();
    }, [mapCenter]);

    const dispatchMapCenter = (value: any) => {
        setMapCenter(value);
        setZoom(18);
        console.log("value", value);
    };

    return (
        <>
            <MyText variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Наши аптеки
            </MyText>
            {loading ? (
                <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {/* <Grid item lg={3} xl={3}>
                        <AddressSideBar
                            data={data}
                            dispatchMapCenter={dispatchMapCenter}
                        />
                    </Grid> */}
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <YMaps>
                            <Map
                                width="100%"
                                height={800}
                                defaultState={{
                                    center: mapCenter,
                                    zoom: zoom,
                                }}
                            >
                                <ZoomControl options={{ float: "right" }} />
                                <ListBox
                                    data={{
                                        content: "Выбор аптеки",
                                    }}
                                >
                                    {data.map((item: any, index: number) => (
                                        <ListBoxItem
                                            onClick={() =>
                                                dispatchMapCenter(item.location)
                                            }
                                            data={{
                                                content: item.address,
                                            }}
                                            options={{
                                                selectOnClick: false,
                                            }}
                                            key={index}
                                        />
                                    ))}
                                </ListBox>

                                {data
                                    ? data.map((item: any, index: number) => (
                                          <Placemark
                                              geometry={item.location}
                                              key={index}
                                              modules={[
                                                  "geoObject.addon.balloon",
                                              ]}
                                              options={{
                                                  iconLayout: "default#image",
                                                  iconImageHref:
                                                      "/img/LocationOr.png",
                                                  iconImageSize: [42, 42],
                                              }}
                                              properties={{
                                                  balloonContentHeader:
                                                      item.address,
                                                  balloonContentBody: `
                                                
                                                      <p>${item.work_time}</p>
                                                      <p>Номер телефона: ${item.unit_phone}</p>
                                                  `,
                                                  // iconContent: mapIcon
                                              }}
                                          />
                                      ))
                                    : ""}
                            </Map>
                        </YMaps>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default Address;

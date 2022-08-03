import React, { useState } from "react";
import { CircularProgress, styled } from "@mui/material";
import { Box, Grid } from "@mui/material";
import {
    YMaps,
    Map,
    Placemark,
    ListBox,
    ListBoxItem,
    ZoomControl,
} from "react-yandex-maps";

import { MyText } from "../../components";
import { FormattedMessage } from "react-intl";
import { useGetAddressQuery } from "../../services/AddressService";

const Address = () => {
    const [mapCenter, setMapCenter] = useState([62.027316, 129.732271]);
    const [zoom, setZoom] = useState(13);

    const { data, isFetching, error } = useGetAddressQuery({ mapCenter });

    const dispatchMapCenter = (value: any) => {
        setMapCenter(value);
        setZoom(18);
    };

    return (
        <>
            <MyText variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                <FormattedMessage id="pharmacy" />
            </MyText>
            {isFetching ? (
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
                                    {data?.unit.map(
                                        (item: any, index: number) => (
                                            <ListBoxItem
                                                onClick={() =>
                                                    dispatchMapCenter(
                                                        item.location
                                                    )
                                                }
                                                data={{
                                                    content: item.address,
                                                }}
                                                options={{
                                                    selectOnClick: false,
                                                }}
                                                key={index}
                                            />
                                        )
                                    )}
                                </ListBox>

                                {data
                                    ? data?.unit.map(
                                          (item: any, index: number) => (
                                              <Placemark
                                                  geometry={item.location}
                                                  key={index}
                                                  modules={[
                                                      "geoObject.addon.balloon",
                                                  ]}
                                                  options={{
                                                      iconLayout:
                                                          "default#image",
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
                                          )
                                      )
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

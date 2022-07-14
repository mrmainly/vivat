import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    FormControl,
    Select,
    MenuItem,
    FormControlLabel,
    InputLabel,
    CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";

import { FormattedMessage } from "react-intl";

import { MyText, WorkCard } from "../../components";
import InfoBlog from "../info-screens/components/InfoBlog";
import API from "../../api";

import work_data from "../../local_data/work_data";

const Main = styled(Box)(({ theme }) => ({
    marginLeft: 30,
    width: "100%",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        marginLeft: 0,
    },
}));

const PharmacyWork = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([{ name: "" }]);
    const [city, setCity] = useState("");

    useEffect(() => {
        const getCity = () => {
            API.getCity()
                .then((res) => {
                    setCities(res.data);
                })
                .catch((error) => console.log(error));
        };
        const getEmployments = async () => {
            setLoading(true);
            await API.getEmployments(city)
                .then((res) => {
                    setWorks(res.data.results);
                })
                .catch((error) => {
                    console.log("error", error);
                });
            setLoading(false);
        };
        getCity();
        getEmployments();
    }, [city]);

    return (
        <InfoBlog title={<FormattedMessage id="vacancy"/>}>
            <Main>
                <FormControlLabel
                    label={<FormattedMessage id="city_choice"/>}
                    labelPlacement="start"
                    control={
                        <FormControl
                            sx={{ width: 150, bgcolor: "white", ml: 1 }}
                            size="small"
                        >
                            <InputLabel>
                                <FormattedMessage id="cities"/>
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label={<FormattedMessage id="cities"/>}
                                defaultValue={cities[0].name}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {cities.map((item: any, index: number) => (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                                <MenuItem value={""}><FormattedMessage id="all_cities"/></MenuItem>
                            </Select>
                        </FormControl>
                    }
                />

                {loading ? (
                    <Box
                        sx={{
                            mt: 4,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {works.length > 0 ? (
                            works.map((item: any, index: number) => (
                                <Grid
                                    item
                                    key={index}
                                    lg={6}
                                    xl={6}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                >
                                    <WorkCard
                                        id={item.id}
                                        title={item.name}
                                        city={item.city}
                                    />
                                </Grid>
                            ))
                        ) : (
                            <MyText sx={{ ml: 4.2, mt: 2 }}>
                                <FormattedMessage id="no_vacancy"/>
                            </MyText>
                        )}
                    </Grid>
                )}
            </Main>
        </InfoBlog>
    );
};

export default PharmacyWork;

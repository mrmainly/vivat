import { useState } from "react";
import { Box, Grid, FormControl, Select, MenuItem, FormControlLabel, InputLabel, CircularProgress, Pagination } from "@mui/material";
import { styled } from "@mui/system";

import { FormattedMessage } from "react-intl";

import { MyText, WorkCard } from "../../components";
import InfoBlog from "../info-screens/components/InfoBlog";
import { useGetWorkQuery } from "../../services/WorkService";
import { useGetCityQuery } from "../../services/CityService";

const Main = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 800,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        marginLeft: 0,
    },
}));

const PharmacyWork = () => {
    const [city, setCity] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isFetching, isLoading } = useGetWorkQuery({ city: city, currentPage: currentPage });
    const { data: cities, isFetching: isCitiesLoading } = useGetCityQuery("");

    let countNumber = Math.ceil(data?.count / 10);

    // if (isFetching || isCitiesLoading) {
    //     return (

    //     );
    // }

    return (
        <InfoBlog title={<FormattedMessage id="vacancy" />}>
            <Main>
                <FormControlLabel
                    label={<FormattedMessage id="city_choice" />}
                    labelPlacement="start"
                    control={
                        <FormControl sx={{ width: 150, bgcolor: "white", ml: 1 }} size="small">
                            <InputLabel>
                                <FormattedMessage id="cities" />
                            </InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label={<FormattedMessage id="cities" />} value={city} onChange={(e) => setCity(e.target.value)}>
                                {cities?.map((item: any, index: number) => (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                                <MenuItem value="">Все города</MenuItem>
                            </Select>
                        </FormControl>
                    }
                />
                {isLoading ? (
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 800,
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {data?.results?.length > 0 ? (
                            data.results.map((item: any, index: number) => (
                                <Grid item key={index} lg={6} xl={6} md={6} sm={12} xs={12}>
                                    <WorkCard id={item.id} title={item.name} city={item.city} isFetching={isFetching} />
                                </Grid>
                            ))
                        ) : (
                            <MyText sx={{ ml: 4.2, mt: 2 }}>
                                <FormattedMessage id="no_vacancy" />
                            </MyText>
                        )}
                    </Grid>
                )}
                <Pagination
                    page={currentPage}
                    count={countNumber}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                    style={{ marginTop: 30 }}
                />
            </Main>
        </InfoBlog>
    );
};

export default PharmacyWork;

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

import { WorkCard } from "../../../components";
import Wrapper from "../components/wrapper";
import API from "../../../api";

import work_data from "../../../local_data/work_data";

const Main = styled(Box)(({ theme }) => ({
    marginLeft: 30,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const PharmacyWork = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getEmployments = async () => {
            setLoading(true);
            await API.getEmployments()
                .then((res) => {
                    console.log(res.data);
                    setWorks(res.data);
                })
                .catch((error) => {
                    console.log("error", error);
                });
            setLoading(false);
        };
        getEmployments();
    }, []);

    return (
        <Wrapper title="Работа в аптеке">
            <Main>
                <FormControlLabel
                    label="Выбор города:"
                    labelPlacement="start"
                    control={
                        <FormControl
                            sx={{ width: 150, bgcolor: "white", ml: 1 }}
                            size="small"
                        >
                            <InputLabel>Якутск</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Якутск"
                            >
                                <MenuItem value={10}>Якутск</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
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
                        {works.length > 0
                            ? works.map((item: any, index: number) => (
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
                            : "Нету вакансий"}
                    </Grid>
                )}
            </Main>
        </Wrapper>
    );
};

export default PharmacyWork;

import React from 'react'
import { Box, Grid, FormControl, Select, MenuItem, FormControlLabel, InputLabel } from '@mui/material'
import { styled } from '@mui/system'

import { PharmacySideBar, MyText, WorkCard } from '../../../components'
import Wrapper from '../components/wrapper'

import work_data from '../../../local_data/work_data'

const Main = styled(Box)(({ theme }) => ({
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    },
}))

const PharmacyWork = () => {
    return (
        <Wrapper title="Работа в аптеке">
            <Main>
                <FormControlLabel label="Выбор города:" labelPlacement="start" control={
                    <FormControl sx={{ width: 150, bgcolor: 'white', ml: 1 }} size="small">
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
                } />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {work_data.map((item, index) => (
                        <Grid item key={index} lg={6} xl={6} md={6} sm={12} xs={12}>
                            <WorkCard title={item.title} price={item.price} city={item.city} />
                        </Grid>
                    ))}
                </Grid>
            </Main>
        </Wrapper>
    )
}

export default PharmacyWork
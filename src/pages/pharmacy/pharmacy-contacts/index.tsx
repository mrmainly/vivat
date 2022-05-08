import React from 'react'
import { Grid, FormControl, Select, MenuItem, FormControlLabel, InputLabel, Box } from '@mui/material'

import Wrapper from '../components/wrapper'
import { PharmacyContactsCard } from '../../../components'
import pharmacy_data from '../../../local_data/pharmacy_contacts'

const PharmacyContacts = () => {
    return (
        <Wrapper title="Контакты">
            <Box sx={{ ml: 3, }}>
                <FormControlLabel label="Выбор города:" labelPlacement="start" control={
                    <FormControl sx={{ width: 150, bgcolor: 'white', ml: 1 }} size="small">
                        <InputLabel>Якутск</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Якутск"
                        >
                            <MenuItem value={'Якутск'}>Якутск</MenuItem>
                            <MenuItem value={'qwe'}>Twenty</MenuItem>
                        </Select>
                    </FormControl>
                } />
                <Grid container spacing={3} sx={{ mt: 1 }}>
                    {pharmacy_data.map((item, index) => (
                        <Grid item key={index}>
                            <PharmacyContactsCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Wrapper>
    )
}

export default PharmacyContacts
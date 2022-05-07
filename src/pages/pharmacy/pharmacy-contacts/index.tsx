import React from 'react'
import { Grid } from '@mui/material'

import Wrapper from '../components/wrapper'
import { PharmacyContactsCard } from '../../../components'
import pharmacy_data from '../../../local_data/pharmacy_contacts'

const PharmacyContacts = () => {
    return (
        <Wrapper title="Контакты">
            <Grid container spacing={3} sx={{ ml: 3 }}>
                {pharmacy_data.map((item, index) => (
                    <Grid item>
                        <PharmacyContactsCard {...item} key={index} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    )
}

export default PharmacyContacts
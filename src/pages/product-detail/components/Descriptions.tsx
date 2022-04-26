import React from 'react'
import { Box } from '@mui/material'

import description_data from '../../../local_data/description_product_card'
import { MyText } from '../../../components'

const Description = () => {
    return (
        <Box>
            {description_data.map((item, index) => (
                <Box key={index} sx={{ mt: 2 }}>
                    <MyText variant="h6">{item.title}</MyText>
                    <Box>
                        {item.descriptions.map((item, index) => (
                            <MyText variant="body1" key={index} sx={{ mt: 1 }}>{item}</MyText>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Description
import React, { useState, forwardRef } from 'react'

import { TextField, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

import { MySelectProps } from '../../../interface'

// const Option = styled('option')({
//     cursor: 'pointer',
//     padding: 10
// })

export default forwardRef<HTMLInputElement, MySelectProps>(function MySelect({ defaultValue, variant, title, ref, children, ...props }) {
    return (
        <TextField
            id="filled-select-currency-native"
            select
            label={title}
            fullWidth
            variant="filled"
            defaultValue={defaultValue}
            inputRef={ref}
            size="small"
            {...props}
        >
            {children}
        </TextField>
    )
})
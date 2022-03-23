import React, { forwardRef, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import { styled } from '@mui/system'
import { TextField } from '@mui/material'

import { InputProps } from '../../../interface'

export default forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    return (
        <TextField
            margin="normal"
            fullWidth
            inputRef={ref}
            {...props}
        />
    )
})
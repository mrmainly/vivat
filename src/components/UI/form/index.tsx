import React from 'react'
import { styled } from '@mui/system'

import { FormProps } from '../../../interface'

const MyForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(0.5)
}))

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
    return (
        <MyForm {...props}>
            {children}
        </MyForm>
    )
}
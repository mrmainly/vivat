import React from 'react'

import { Button } from '@mui/material'

import { ButtonProps } from '../../../interface'
import ThemeMain from '../../../theme'

const MyButton: React.FC<ButtonProps> = ({ children, ...props }) => <Button {...props} variant="contained" type="submit" sx={{ bgcolor: ThemeMain.palette.primary.main }}>{children}</Button>

export default MyButton
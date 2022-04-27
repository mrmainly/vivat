import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, IconButton, MenuItem, Box } from '@mui/material'

import { StateContext, DispatchContext } from '../../../store';
import { Form, Input, MyButton, MyLink, MyText, BorderLine } from '../..'
import ThemeMain from '../../../theme'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const ModalContent = styled(DialogContent)(({ theme }) => ({
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        width: 250
    },
}))

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#f5f5f5', textAlign: 'center' }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function SignIn() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    console.log(state)
    const handleClose = () => {
        dispatch({ type: 'auth_modal', payload: { sign_in: false } })
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={state.auth_modal.sign_in}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Авторизация
                </BootstrapDialogTitle>
                <ModalContent dividers>
                    <MyText sx={{ textAlign: 'center' }}>
                        Если у вас есть учётная запись, авторизуйтесь, используя адрес электронной почты (email) или телефон
                    </MyText>
                    <Box sx={{
                        width: 261,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Form>
                            <Input label="Телефон" />
                            <Input label="Пароль" />
                            <MenuItem sx={{ mt: 1, color: ThemeMain.palette.primary.main, display: 'flex', justifyContent: 'center' }}>Забыли пароль?</MenuItem>
                            <MyButton style={{ marginTop: 10 }} fullWidth>Войти</MyButton>
                        </Form>
                        <BorderLine sx={{ mt: 2, mb: 2, width: 100 }} />
                        <MyButton fullWidth onClick={() => dispatch({ type: 'auth_modal', payload: { sign_in: false, sign_up: true } })}>Регистрация</MyButton>
                        <MenuItem sx={{ mt: 1.5, color: ThemeMain.palette.primary.main }}>Продолжить без авторизации</MenuItem>
                    </Box>
                </ModalContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </div>
    );
}
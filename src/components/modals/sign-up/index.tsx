import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, IconButton, MenuItem, Box } from '@mui/material'
import { useForm } from 'react-hook-form'

import { StateContext, DispatchContext } from '../../../store';
import { Form, Input, MyButton, MyLink, MyText, BorderLine } from '../..'
import ThemeMain from '../../../theme'
import API from '../../../api'

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

export default function SignUp() {
    const [passwordText, setPasswordText] = useState(false)
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data: any) => {
        if (data.password == data.forgot_password) {
            API.register({ ...data }, dispatch)
            setPasswordText(false)
        } else {
            setPasswordText(true)
        }
    }
    const handleClose = () => {
        dispatch({ type: 'auth_modal', payload: { sign_in: false, sign_up: false, forgot: false } })
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={state.auth_modal.sign_up}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Регистрация
                </BootstrapDialogTitle>
                <ModalContent dividers>
                    <Box sx={{
                        width: 261,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBottom: 2
                    }}>
                        {passwordText ?
                            <p>Пароль не подошел</p>
                            : ''}
                        {state.register.danger_text ?
                            <p>Пользователь с таким телефоном уже зарегистрирован. Необходимо <span style={{ color: ThemeMain.palette.primary.main }}>авторизоваться.</span></p>
                            : ''}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Input label="Введите ваш номер телефона" {...register('phone')} />
                            <Input label="Пароль" {...register('password')} type="password" />
                            <Input label="Повторить пароль" {...register('forgot_password')} type="password" />
                            <MyButton style={{ marginTop: 10 }} fullWidth>Получить код</MyButton>
                        </Form>
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
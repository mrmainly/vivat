import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, IconButton, MenuItem, Box } from '@mui/material'

import { StateContext, DispatchContext } from '../../../store';
import { Form, Input, MyButton, MyLink, MyText, BorderLine, ToggleButton } from '../..'
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

export default function ForgotPassword() {
    const [secondForm, setSecondForm] = useState(false)
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleClose = () => {
        dispatch({ type: 'auth_modal', payload: { sign_in: false, sign_up: false, forgot: false } })
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={state.auth_modal.forgot}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Восстановление пароля
                </BootstrapDialogTitle>
                {secondForm
                    ?
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: 'center' }}>
                            Введите код и новый пароль
                        </MyText>
                        <Box sx={{
                            width: 261,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Form>
                                <Input label="Код" />
                                <MenuItem sx={{ color: ThemeMain.palette.primary.main }}>Отправить код еще раз</MenuItem>
                                <Input label="Пароль" type="password" />
                                <Input label="Подтверждение пароля" type="password" />
                                <MyButton style={{ marginTop: 10 }} fullWidth>Продолжить</MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                    :
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: 'center' }}>
                            Чтобы восстановить пароль, введите Вашу электронную почту
                        </MyText>
                        <ToggleButton sx={{ mt: 2 }} />
                        <MyText sx={{ textAlign: 'center', mt: 2 }}>Для подтверждения почты, вам поступит письмо с кодом</MyText>
                        <Box sx={{
                            width: 261,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Form>
                                <Input label="Электронная почта" />
                                <MyButton style={{ marginTop: 10 }} fullWidth onClick={() => setSecondForm(true)}>Восстановить пароль</MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                }
            </BootstrapDialog>
        </div >
    );
}
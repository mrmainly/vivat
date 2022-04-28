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

export default function SignUp() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleClose = () => {
        dispatch({ type: 'auth_modal', payload: { sign_up: false } })
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
                        <Form>
                            <Input label="Введите Ваш номер телефона" />
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
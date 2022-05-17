import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import cookie from "js-cookie";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    MenuItem,
    Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { StateContext, DispatchContext } from "../../../store";
import { toast } from "react-toastify";
import { Form, Input, MyButton, MyText, BorderLine } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
import ROUTES from "../../../routes";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        width: 300,
    },
}));

const FormWrapper = styled(Box)(({ theme }) => ({
    width: 261,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        width: 221,
    },
}));

const DialogTitleStyle = styled(DialogTitle)(({ theme }) => ({
    background: "#f5f5f5",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        width: 300,
    },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitleStyle
            {...other}
            sx={{ m: 0, p: 2, bgcolor: "#f5f5f5", textAlign: "center" }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    ml: 4,
                }}
            >
                {children}
            </Box>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitleStyle>
    );
};

export default function SignIn() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    const handleClose = () => {
        dispatch({
            type: "auth_modal",
            payload: { sign_in: false, sign_up: false, forgot: false },
        });
    };

    const onSubmit = (data: any) => {
        API.getToken({ ...data })
            .then((res) => {
                toast.success("авторизация прошла успешно");
                cookie.set("jwttoken", res.data.token);
                dispatch({
                    type: "auth_modal",
                    payload: { sign_in: false, forgot: false, sign_up: false },
                });
                navigate(ROUTES.BASICINFORMATION);
            })
            .catch((error) => {
                toast.error("такого пользователя не существует");
            });
    };
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={state.auth_modal.sign_in}
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
            >
                Авторизация
            </BootstrapDialogTitle>
            <ModalContent dividers>
                <MyText sx={{ textAlign: "center" }} variant="body1" sm={16}>
                    Если у вас есть учётная запись, авторизуйтесь, используя
                    адрес электронной почты (email) или телефон
                </MyText>
                <FormWrapper>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Телефон" {...register("username")} />
                        <Input
                            label="Пароль"
                            {...register("password")}
                            type="password"
                        />
                        <MenuItem
                            sx={{
                                mt: 1,
                                color: ThemeMain.palette.primary.main,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            onClick={() =>
                                dispatch({
                                    type: "auth_modal",
                                    payload: {
                                        sign_in: false,
                                        sign_up: false,
                                        forgot: true,
                                    },
                                })
                            }
                        >
                            Забыли пароль?
                        </MenuItem>
                        <MyButton style={{ marginTop: 10 }} fullWidth>
                            Войти
                        </MyButton>
                    </Form>
                    <BorderLine sx={{ mt: 2, mb: 2, width: 100 }} />
                    <MyButton
                        fullWidth
                        onClick={() =>
                            dispatch({
                                type: "auth_modal",
                                payload: {
                                    sign_in: false,
                                    sign_up: true,
                                    forgot: false,
                                },
                            })
                        }
                    >
                        Регистрация
                    </MyButton>
                </FormWrapper>
            </ModalContent>
            {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
        </BootstrapDialog>
    );
}

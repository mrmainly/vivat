import React from "react";
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
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Form, Input, MyButton, MyText, BorderLine } from "../..";
import ThemeMain from "../../../theme";
import ROUTES from "../../../routes";
import { SignModalProps } from "../../../interface";
import { authModalSlice } from "../../../reducer/auth_modal_slice";
import { useLoginMutation } from "../../../services/AuthService";

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
            sx={{
                m: 0,
                p: 2,
                bgcolor: "#f5f5f5",
                textAlign: "center",
            }}
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

const SignInModal: React.FC<SignModalProps> = () => {
    const { openLogin } = useSelector(
        (state: any) => state.auth_modal_slice
    );
    const [postLogin] = useLoginMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        openLoginModal,
        openRegisterModal,
        openForgotPasswordModal,
    } = authModalSlice.actions;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        postLogin({ ...data })
            .then((res: any) => {
                if (res.data) {
                    dispatch(openLoginModal(false));
                    toast.success("авторизация прошла успешно");
                    cookie.set("jwttoken", res.data.token);
                    navigate(ROUTES.BASICINFORMATION);
                } else {
                    toast.error(res.error.data.errors[0]);
                }
            })
            .catch((error) => {
                toast.error("что то пошло нет так");
            });
    };
    return (
        <BootstrapDialog
            onClose={() => dispatch(openLoginModal(false))}
            aria-labelledby="customized-dialog-title"
            open={openLogin}
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={() => dispatch(openLoginModal(false))}
            >
                Авторизация
            </BootstrapDialogTitle>
            <ModalContent dividers>
                <MyText
                    sx={{ textAlign: "center" }}
                    variant="body1"
                    sm={16}
                >
                    Если у вас есть учётная запись, авторизуйтесь,
                    используя адрес электронной почты (email)
                </MyText>
                <FormWrapper>
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <Input
                            label="Электронная почта"
                            {...register("username", {
                                required:
                                    "Электронная почта обязательное поле",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                        "Не корректные данные электронной почты",
                                },
                            })}
                            error={!!errors.username}
                            helperText={errors?.username?.message}
                        />
                        <Input
                            label="Пароль"
                            {...register("password", {
                                required: "Пароль обязательное поле",
                            })}
                            type="password"
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        />
                        <MenuItem
                            sx={{
                                mt: 1,
                                color: ThemeMain.palette.primary.main,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            onClick={() => {
                                dispatch(openLoginModal(false));
                                dispatch(
                                    openForgotPasswordModal(true)
                                );
                            }}
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
                        onClick={() => {
                            dispatch(openLoginModal(false));
                            dispatch(openRegisterModal(true));
                        }}
                    >
                        Регистрация
                    </MyButton>
                </FormWrapper>
            </ModalContent>
        </BootstrapDialog>
    );
};

export default SignInModal;

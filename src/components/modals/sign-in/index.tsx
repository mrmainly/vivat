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
import InputMask from "react-input-mask";

import { StateContext, DispatchContext } from "../../../store";
import { toast } from "react-toastify";
import { Form, Input, MyButton, MyText, BorderLine } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
import ROUTES from "../../../routes";
import { SignModalProps } from "../../../interface";

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

const SignIn: React.FC<SignModalProps> = ({
    login,
    setLoginClose,
    setRegisterOpen,
    setForgotOpen,
}) => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const navigate = useNavigate();
    const jwttoken = cookie.get("jwttoken");

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    const handleClose = () => {
        {
            state.auth_modal.login
                ? dispatch({
                      type: "auth_modal",
                      payload: {
                          login: false,
                      },
                  })
                : setLoginClose();
        }
    };

    const onSubmit = (data: any) => {
        API.getToken({ ...data })
            .then((res) => {
                toast.success("авторизация прошла успешно");
                cookie.set("jwttoken", res.data.token);
                setLoginClose();
                navigate(ROUTES.BASICINFORMATION);
                dispatch({
                    type: "basket",
                    payload: {
                        status: state.basket.status + 1,
                    },
                });
            })
            .catch((error) => {
                toast.error("такого пользователя не существует");
            });
    };
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={login}
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
                        <InputMask
                            mask="79999999999"
                            disabled={false}
                            {...register("username")}
                            required
                        >
                            {() => (
                                <Input
                                    {...register("username")}
                                    id="phone"
                                    label="Телефон"
                                    required
                                />
                            )}
                        </InputMask>
                        <Input
                            label="Пароль"
                            {...register("password")}
                            type="password"
                            required
                        />
                        <MenuItem
                            sx={{
                                mt: 1,
                                color: ThemeMain.palette.primary.main,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            onClick={() => {
                                handleClose();
                                setForgotOpen();
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
                            handleClose();
                            setRegisterOpen();
                        }}
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
};

export default SignIn;

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Box,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, MyButton, MyText } from "../..";
import ThemeMain from "../../../theme";
import { SignModalProps } from "../../../interface";
import { authModalSlice } from "../../../reducer/auth_modal_slice";
import {
    useRegisterV1Mutation,
    useRegisterV2Mutation,
    useRegisterV3Mutation,
} from "../../../services/AuthService";

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
            sx={{
                m: 0,
                p: 2,
                bgcolor: "#f5f5f5",
                textAlign: "center",
            }}
            {...other}
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

const SignUpModal: React.FC<SignModalProps> = () => {
    const [passwordText, setPasswordText] = useState(false);
    const [v1, setV1] = useState(true);
    const [verifyVersion, setVerifyVersion] = useState(false);
    const [passwordV, setPasswordV] = useState(false);
    const [dangerText, setDangerText] = useState(false);
    const [code, setCode] = useState("");

    const { openRegister } = useSelector(
        (state: any) => state.auth_modal_slice
    );
    const { openLoginModal, openRegisterModal } =
        authModalSlice.actions;
    const [postRegisterV1] = useRegisterV1Mutation();
    const [postRegisterV2] = useRegisterV2Mutation();
    const [postRegsiterV3] = useRegisterV3Mutation();

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        postRegisterV1({ ...data }).then((res: any) => {
            if (res.data) {
                setCode(res.data.code);
                setV1(false);
                setVerifyVersion(true);
            } else {
                setDangerText(true);
            }
        });
    };
    const onSubmitVerify = (data: any) => {
        postRegisterV2({ ...data }).then((res: any) => {
            if (res.data) {
                setVerifyVersion(false);
                setPasswordV(true);
            } else {
                toast.error(res.error.data.errors[0]);
            }
        });
    };
    const onSubmitPassword = (data: any) => {
        if (data.password === data.forgot_password) {
            postRegsiterV3({
                password: data.password,
                code: code,
                first_name: data.first_name,
                last_name: data.last_name,
                patronymic: data.patronymic,
                phone: data.phone,
                birth_date: data.birth_date,
            })
                .then((res: any) => {
                    if (res.data) {
                        setPasswordV(false);
                        setPasswordText(true);
                        dispatch(openRegisterModal(false));
                        dispatch(openLoginModal(true));
                    } else {
                        toast.error(res.error.data.errors[0]);
                    }
                    console.log(res);
                })
                .catch((error) => {
                    toast.error("что то пошло не так");
                });
        } else {
            setPasswordText(true);
        }
    };
    const handleClose = () => {
        dispatch(openRegisterModal(false));
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openRegister}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Регистрация
                </BootstrapDialogTitle>
                {v1 && (
                    <ModalContent dividers>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingBottom: 2,
                            }}
                        >
                            {dangerText ? (
                                <p>
                                    Пользователь с таким телефоном уже
                                    зарегистрирован. Необходимо{" "}
                                    <span
                                        style={{
                                            color: ThemeMain.palette
                                                .primary.main,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            dispatch(
                                                openRegisterModal(
                                                    false
                                                )
                                            );
                                            dispatch(
                                                openLoginModal(true)
                                            );
                                        }}
                                    >
                                        авторизоваться.
                                    </span>
                                </p>
                            ) : (
                                ""
                            )}
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                <Input
                                    label="Электронная почта"
                                    {...register("email", {
                                        required:
                                            "Электронная почта обязательное поле",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                "Не корректные данные электронной почты",
                                        },
                                    })}
                                    error={!!errors.email}
                                    helperText={
                                        errors?.email?.message
                                    }
                                />
                                <FormControlLabel
                                    sx={{ mt: 1.5 }}
                                    control={
                                        <Checkbox defaultChecked />
                                    }
                                    label={
                                        <MyText>
                                            Я соглашаюсь с{" "}
                                            <span
                                                style={{
                                                    color: ThemeMain
                                                        .palette
                                                        .primary.main,
                                                }}
                                            >
                                                политикой обработчки
                                                персональных данных.
                                            </span>
                                        </MyText>
                                    }
                                />
                                <MyButton
                                    style={{ marginTop: 20 }}
                                    fullWidth
                                >
                                    Получить код
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}
                {verifyVersion && (
                    <ModalContent dividers>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingBottom: 2,
                            }}
                        >
                            {passwordText ? (
                                <p>Пароль не подошел</p>
                            ) : (
                                ""
                            )}
                            <Form
                                onSubmit={handleSubmit(
                                    onSubmitVerify
                                )}
                            >
                                <Input
                                    label="EMAIL код"
                                    {...register("code")}
                                    required
                                />
                                <MyButton
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                >
                                    Ввести пароль
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}
                {passwordV && (
                    <ModalContent dividers>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingBottom: 2,
                            }}
                        >
                            {passwordText ? (
                                <p>Пароль не подошел</p>
                            ) : (
                                ""
                            )}
                            <Form
                                onSubmit={handleSubmit(
                                    onSubmitPassword
                                )}
                            >
                                <Input
                                    label="Имя"
                                    {...register("first_name")}
                                    required
                                />
                                <Input
                                    label="Фамилия"
                                    {...register("last_name")}
                                    required
                                />
                                <Input
                                    label="Отчество"
                                    {...register("patronymic")}
                                    required
                                />
                                <Input
                                    label="Номер телефона"
                                    {...register("phone")}
                                    required
                                />
                                <Input
                                    label="Дата рождения"
                                    {...register("birth_date")}
                                    type={"date"}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <Input
                                    label="Пароль"
                                    {...register("password")}
                                    type="password"
                                    required
                                />
                                <Input
                                    label="Повторить пароль"
                                    {...register("forgot_password")}
                                    type="password"
                                    required
                                />

                                <MyButton
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                >
                                    Завершить
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}
            </BootstrapDialog>
        </div>
    );
};

export default SignUpModal;

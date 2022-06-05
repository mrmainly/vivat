import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    MenuItem,
    Box,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

import { StateContext, DispatchContext } from "../../../store";
import { Form, Input, MyButton, MyText } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
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
            sx={{ m: 0, p: 2, bgcolor: "#f5f5f5", textAlign: "center" }}
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

const SignUpModal: React.FC<SignModalProps> = ({
    registerModal,
    setRegisterClose,
    setLoginOpen,
}) => {
    const [passwordText, setPasswordText] = useState(false);
    const [v1, setV1] = useState(true);
    const [verifyVersion, setVerifyVersion] = useState(false);
    const [passwordV, setPasswordV] = useState(false);
    const [dangerText, setDangerText] = useState(false);
    const [code, setCode] = useState("");

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data: any) => {
        API.sendRegister({ ...data })
            .then((res) => {
                setCode(res.data.code);
                setV1(false);
                setVerifyVersion(true);
            })
            .catch((error) => {
                setDangerText(true);
            });
    };
    const onSubmitVerify = (data: any) => {
        API.sendVerifyCode({ ...data })
            .then((res) => {
                setVerifyVersion(false);
                setPasswordV(true);
            })
            .catch(() => {
                toast.error("вы ввели не правильные данные");
            });
    };
    const onSubmitPassword = (data: any) => {
        if (data.password == data.forgot_password) {
            API.sendPassword({
                password: data.password,
                code: code,
            })
                .then((res) => {
                    setPasswordV(false);
                    setLoginOpen();
                    setRegisterClose();
                })
                .catch((error) => {
                    toast.error("что то пошло не так");
                });
            setPasswordText(false);
        } else {
            setPasswordText(true);
        }
    };
    const handleClose = () => {
        setRegisterClose();
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={registerModal}
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
                                            color: ThemeMain.palette.primary
                                                .main,
                                            cursor: "pointer",
                                        }}
                                        onClick={setLoginOpen}
                                    >
                                        авторизоваться.
                                    </span>
                                </p>
                            ) : (
                                ""
                            )}
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <InputMask
                                    mask="79999999999"
                                    disabled={false}
                                    {...register("phone")}
                                    required
                                >
                                    {() => (
                                        <Input
                                            {...register("phone")}
                                            id="phone"
                                            label="Телефон"
                                            required
                                        />
                                    )}
                                </InputMask>
                                <FormControlLabel
                                    sx={{ mt: 1.5 }}
                                    control={<Checkbox defaultChecked />}
                                    label={
                                        <MyText>
                                            Я соглашаюсь с{" "}
                                            <span
                                                style={{
                                                    color: ThemeMain.palette
                                                        .primary.main,
                                                }}
                                            >
                                                политикой обработчки
                                                персональных данных.
                                            </span>
                                        </MyText>
                                    }
                                />
                                <MyButton style={{ marginTop: 20 }} fullWidth>
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
                            {passwordText ? <p>Пароль не подошел</p> : ""}
                            <Form onSubmit={handleSubmit(onSubmitVerify)}>
                                <Input
                                    label="SMS код"
                                    {...register("code")}
                                    required
                                />
                                <MyButton style={{ marginTop: 10 }} fullWidth>
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
                            {passwordText ? <p>Пароль не подошел</p> : ""}
                            <Form onSubmit={handleSubmit(onSubmitPassword)}>
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
                                <MyButton style={{ marginTop: 10 }} fullWidth>
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

import {
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const ModalContent = styled(DialogContent)(({ theme }) => ({
    width: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
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

const BootstrapDialogTitle = (props) => {
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

const WarningDeleteProfileModal = ({ handleOpen, open, href }) => {
    return (
        <BootstrapDialog
            onClose={handleOpen}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleOpen}
            >
                Ваша оплата не прошла
            </BootstrapDialogTitle>
            <ModalContent>
                <a href={href}>Перейдите по ссылке чтобы оплатить заказ</a>
            </ModalContent>
        </BootstrapDialog>
    );
};

export default WarningDeleteProfileModal;

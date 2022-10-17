import { useState } from "react";

import { MenuItem, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import { toast } from "react-toastify";

import { MyText, WarningDeleteProfileModal } from "../..";
import { ProfileSideBarProps } from "../../../interface";
import ROUTES from "../../../routes";
import { useDeleteProfileMutation } from "../../../services/AccountUser";

import { FormattedMessage } from "react-intl";

const Menu = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: 240,
    background: "white",
    marginRight: 30,
    height: 250,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const ProfileSideBar: React.FC<ProfileSideBarProps> = ({ title }) => {
    const [open, setOpen] = useState(false);

    const [deleteProfile] = useDeleteProfileMutation();

    const navigate = useNavigate();
    const links = [
        {
            label: <FormattedMessage id="basic_information" />,
            to: ROUTES.BASICINFORMATION,
        },
        {
            label: <FormattedMessage id="my_orders" />,
            to: ROUTES.MYORDERS,
        },
        {
            label: <FormattedMessage id="loyalty_program" />,
            to: ROUTES.MYORDERS,
        },
    ];

    const handleExit = () => {
        cookie.remove("jwttoken");
        navigate(ROUTES.HOME);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleDeleteProfile = () => {
        deleteProfile("").then((res: any) => {
            if (res.data) {
                cookie.remove("jwttoken");
                navigate(ROUTES.HOME);
            } else {
                toast.error("Ваш аккаунт не удалился");
            }
        });
    };

    return (
        <Box>
            {open && (
                <WarningDeleteProfileModal
                    open={open}
                    handleOpen={handleOpen}
                    handleDeleteProfile={handleDeleteProfile}
                />
            )}
            <MyText variant="h5" sx={{ mb: 2.4 }}>
                {title}
            </MyText>
            <Menu>
                {links.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => navigate(item.to)}
                        sx={{
                            pl: 2.4,
                            borderBottom: "1px solid #F7F9F7",
                            height: 56,
                        }}
                    >
                        {item.label}
                    </MenuItem>
                ))}
                <MenuItem
                    sx={{ pl: 2.4, height: 56, color: "red" }}
                    onClick={handleOpen}
                >
                    Удалить профиль
                </MenuItem>
                <MenuItem sx={{ pl: 2.4, height: 56 }} onClick={handleExit}>
                    <FormattedMessage id="quit" />
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default ProfileSideBar;

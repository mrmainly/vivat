import React from "react";

import { MenuItem, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

import { MyText } from "../..";
import { ProfileSideBarProps } from "../../../interface";
import ROUTES from "../../../routes";

import { FormattedMessage } from "react-intl";

const Menu = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: 240,
    background: "white",
    marginRight: 30,
    height: 220,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const ProfileSideBar: React.FC<ProfileSideBarProps> = ({ title }) => {
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
    return (
        <Box>
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
                    sx={{ pl: 2.4, height: 56 }}
                    onClick={() => {
                        cookie.remove("jwttoken");
                        navigate("/");
                    }}
                >
                    <FormattedMessage id="quit" />
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default ProfileSideBar;

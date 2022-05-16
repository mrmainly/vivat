import React from "react";

import { Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import { MyText } from "../..";
import ROUTES from "../../../routes";

const Root = styled(Box)(({ theme }) => ({
    width: 200,
    display: "flex",
    flexDirection: "column",
    marginTop: "-15px",
}));

const CusLink = styled(Link)(({ theme }) => ({
    marginTop: 15,
    textDecoration: "none",
    color: "#babbba",
    "&:hover": {
        color: "#007C57",
    },
    fontSize: 18,
}));

const PharmacySideBar = () => {
    const menuItems = [
        {
            label: "Преимущества работы в Виват",
            to: ROUTES.VIVAT_INFO,
        },
        {
            label: "Работа в аптеке",
            to: ROUTES.PHARMACY_WORK,
        },
        {
            label: "Контакты",
            to: ROUTES.PHARMACY_CONTACTS,
        },
    ];
    return (
        <Box>
            <Root>
                {menuItems.map((item, index) => (
                    <CusLink to={item.to} key={index}>
                        <MyText style={{ fontWeight: 600 }}>
                            {item.label}
                        </MyText>
                    </CusLink>
                ))}
            </Root>
        </Box>
    );
};

export default PharmacySideBar;

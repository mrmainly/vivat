import React, { useContext } from "react";

import { Drawer, Box, MenuItem, IconButton } from "@mui/material";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { MyLink, BorderLine, MyText } from "../..";
import ROUTES from "../../../routes";
import { ModalAndDrawer } from "../../../interface";

const SubProductDrawer: React.FC<ModalAndDrawer> = ({ state, handleClose }) => {
    const navigate = useNavigate();

    return (
        <Drawer
            {...{
                anchor: "right",
                open: state,
                onClose: handleClose,
            }}
        >
            <Box
                style={{
                    width: 300,
                    padding: 15,
                    height: "100%",
                    color: "#20B12E",
                }}
            >
                asd
            </Box>
        </Drawer>
    );
};

export default SubProductDrawer;

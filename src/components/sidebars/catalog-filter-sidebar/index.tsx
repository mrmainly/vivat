import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Drawer,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import { MyText, BorderLine, MyButton, Form } from "../..";
import ThemeMain from "../../../theme";
import Body from "./components/Body";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    width: "100%",
    [theme.breakpoints.down("md")]: {
        width: 300,
    },
}));

interface CatalogFilterSideBarProps {
    open: any;
    setOpen: any;
    formState: any;
    formDispatch: any;
    getProducts: any;
}

const CatalogFilterSideBar: React.FC<CatalogFilterSideBarProps> = ({
    formState,
    formDispatch,
    open,
    setOpen,
    getProducts,
}) => {
    const [drawerState, setDrawerState] = useState(true);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900) {
                setDrawerState(true);
            }
            if (window.innerWidth > 900) {
                setDrawerState(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {drawerState ? (
                <Drawer
                    {...{
                        anchor: "left",
                        open: open,
                        onClose: () => setOpen(false),
                    }}
                >
                    <Body
                        formState={formState}
                        formDispatch={formDispatch}
                        open={open}
                        setOpen={setOpen}
                        getProducts={getProducts}
                    />
                </Drawer>
            ) : (
                <Body
                    formState={formState}
                    formDispatch={formDispatch}
                    open={open}
                    setOpen={setOpen}
                    getProducts={getProducts}
                />
            )}
        </>
    );
};

export default CatalogFilterSideBar;

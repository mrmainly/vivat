import React, { useEffect, useState } from "react";

import { Drawer, Box, IconButton, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { BorderLine } from "../..";
import drawer_links from "../../../local_data/drawer_links";
import API from "../../../api";
import ROUTES from "../../../routes";
import ThemeMain from "../../../theme";
import MyText from "../../text";

interface MainDrawerProps {
    state: any;
    handleClose: any;
}

const MainDrawer: React.FC<MainDrawerProps> = ({ state, handleClose }) => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        API.getProductCatalog()
            .then((res) => {
                setData(res.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Drawer
            {...{
                anchor: "left",
                open: state,
                onClose: handleClose,
            }}
        >
            <Box
                style={{
                    width: 300,
                    padding: 15,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={() => handleClose()}>
                        <CloseIcon
                            sx={{ color: ThemeMain.palette.primary.main }}
                            fontSize="large"
                        />
                    </IconButton>
                </Box>
                <Box>
                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                    {data.map((item: any, index: number) => (
                        <MenuItem
                            key={index}
                            onClick={() => {
                                navigate(ROUTES.PRODUCT_PAGE, {
                                    state: { id: item.id, title: item.name },
                                });
                                handleClose();
                            }}
                        >
                            <MyText
                                sx={{
                                    color: "#20B12E",
                                    textTransform: "uppercase",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {item.name}
                            </MyText>
                        </MenuItem>
                    ))}

                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                </Box>
                <Box>
                    {drawer_links.map((item: any, index: number) => (
                        <MenuItem
                            onClick={() => {
                                navigate(item.to);
                                handleClose();
                            }}
                            key={index}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                    <BorderLine sx={{ mt: 1 }} />
                </Box>
            </Box>
            {/* <SubProductMenu
                state={stateOpen}
                handleClose={setStateOpen(false)}
            /> */}
        </Drawer>
    );
};

export default MainDrawer;

import React, { useEffect, useState } from "react";

import { Drawer, Box, IconButton, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";

import { BorderLine } from "../..";
import drawer_links from "../../../local_data/drawer_links";
import API from "../../../api";
import ROUTES from "../../../routes";
import ThemeMain from "../../../theme";
import MyText from "../../text";
import { drawersSlice } from "../../../reducer/drawers_slice";

const MainDrawer = () => {
    const [data, setData] = useState([]);
    const { main_drawer_open } = useSelector(
        (state: any) => state.drawers_slice
    );
    const { handleMainDrawerOpen } = drawersSlice.actions;
    const dispatch = useDispatch();

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
                open: main_drawer_open,
                onClose: () => dispatch(handleMainDrawerOpen(false)),
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
                    <IconButton
                        onClick={() => dispatch(handleMainDrawerOpen(false))}
                    >
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
                                dispatch(handleMainDrawerOpen(false));
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
                                dispatch(handleMainDrawerOpen(false));
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

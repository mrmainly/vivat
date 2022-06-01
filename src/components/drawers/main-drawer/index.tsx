import React, { useEffect, useState } from "react";

import { Drawer, Box, IconButton, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { MyLink, BorderLine } from "../..";
import drawer_links from "../../../local_data/drawer_links";
import drawer_elements from "../../../local_data/drawer_elements";
import API from "../../../api";
import SubProductMenu from "../sub-product-drawer";
import ROUTES from "../../../routes";

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
                console.log(res);
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
                        <img src="/img/Close_round_light.png" />
                    </IconButton>
                </Box>
                <Box>
                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                    {data.map((item: any, index: number) => (
                        <MenuItem
                            key={index}
                            sx={{
                                color: "#20B12E",
                                textTransform: "uppercase",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                            }}
                            onClick={() =>
                                navigate(ROUTES.PRODUCT_PAGE, {
                                    state: { id: item.id, title: item.name },
                                })
                            }
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                </Box>
                <Box>
                    {drawer_links.map((item: any, index: number) => (
                        <MyLink href={item.to} key={index}>
                            {item.label}
                        </MyLink>
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

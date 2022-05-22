import React, { useContext, useEffect, useState } from "react";

import { Drawer, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { MyText, FavoritesCard } from "../..";
import { StateContext, DispatchContext } from "../../../store";
import ThemeMain from "../../../theme";
import API from "../../../api";

interface MainDrawerProps {
    state: any;
    handleClose: any;
}

const FavoritesDrawer: React.FC<MainDrawerProps> = ({ state, handleClose }) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        API.getFavorites()
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => console.log(error));
    }, [status]);
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
                    padding: 30,
                    height: "100%",
                }}
            >
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <IconButton onClick={() => handleClose()}>
                        <img src="/img/Close_round_light.png" />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/img/Favorite_light.png" />
                    <MyText
                        variant="h6"
                        sx={{ ml: 1, color: ThemeMain.palette.primary.main }}
                    >
                        Избранные товары
                    </MyText>
                </Box>
                <MyText variant="body1" sx={{ mt: 1.5 }}>
                    <span>{data.length}</span> товара
                </MyText>
                {data.length !== 0
                    ? data.map((item, index) => (
                          <FavoritesCard
                              {...item}
                              key={index}
                              status={status}
                              setStatus={setStatus}
                          />
                      ))
                    : "Нет избранных товаров"}
            </Box>
        </Drawer>
    );
};

export default FavoritesDrawer;

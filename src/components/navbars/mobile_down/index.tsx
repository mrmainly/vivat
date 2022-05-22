import React, { useContext, useState } from "react";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { DispatchContext } from "../../../store";
import MyContainer from "../../container";
import { ProfileDrawer, FavoritesDrawer } from "../..";
import ROUTES from "../../../routes";

const MobileBox = styled(Box)(({ theme }) => ({
    background: "white",
    height: 48,
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
    boxShadow: "0px -1px 12px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: 0,
    width: "100%",
}));

const MobileDown = () => {
    const [profileDrawer, setProfileDrawer] = useState(false);
    const [favoriteDrawer, setFavotiteDrawer] = useState(false);

    const handleProfileDrawerClose = () => setProfileDrawer(false);
    const handleFavoriteDrawerClose = () => setProfileDrawer(false);

    const dispatch = useContext(DispatchContext);
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    console.log("mobile");
    return (
        <MobileBox>
            <MyContainer wrapper={false}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton>
                        <img src="/img/darhboard.png" />
                    </IconButton>
                    <IconButton>
                        <img src="/img/Component17.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? setFavotiteDrawer(true)
                                : dispatch({
                                      type: "auth_modal",
                                      payload: {
                                          sign_in: true,
                                          sign_up: false,
                                          forgot: false,
                                      },
                                  });
                        }}
                    >
                        <img src="/img/Favorite_light.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? setProfileDrawer(true)
                                : dispatch({
                                      type: "auth_modal",
                                      payload: {
                                          sign_in: true,
                                          sign_up: false,
                                          forgot: false,
                                      },
                                  });
                        }}
                    >
                        <img src="/img/User_cicrle_light.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? navigate(ROUTES.BASKET)
                                : dispatch({
                                      type: "auth_modal",
                                      payload: {
                                          sign_in: true,
                                          sign_up: false,
                                          forgot: false,
                                      },
                                  });
                        }}
                    >
                        <img src="/img/Bag_light.png" />
                    </IconButton>
                </Box>
            </MyContainer>
            <ProfileDrawer
                state={profileDrawer}
                handleClose={handleProfileDrawerClose}
            />
        </MobileBox>
    );
};

export default MobileDown;

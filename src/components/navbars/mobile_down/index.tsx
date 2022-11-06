import { Box, IconButton, Badge } from "@mui/material";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

import MyContainer from "../../container";
import ROUTES from "../../../routes";
import { drawersSlice } from "../../../reducer/drawers_slice";
import { authModalSlice } from "../../../reducer/auth_modal_slice";

const MobileBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
        background: "white",
        height: 48,
        boxShadow: "0px -1px 12px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1,
    },
}));

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        background: "red",
        color: "white",
    },
    marginRight: 10,
});

const MobileDown = () => {
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleFavoritesDrawerOpen } = drawersSlice.actions;
    const { openLoginModal } = authModalSlice.actions;
    const { count } = useSelector((state: any) => state.basket_count_slice);

    return (
        <MobileBox>
            <MyContainer wrapper={false}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton onClick={() => navigate(ROUTES.HOME)}>
                        <img src="/img/darhboard.svg" alt="" />
                    </IconButton>
                    <IconButton
                        onClick={() => navigate(ROUTES.SEARCH_PAGE_MOBILE)}
                    >
                        <img src="/img/component17.svg" alt="" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? dispatch(handleFavoritesDrawerOpen(true))
                                : dispatch(openLoginModal(true));
                        }}
                    >
                        <img src="/img/favorite-light.svg" alt="" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? navigate(ROUTES.BASICINFORMATION)
                                : dispatch(openLoginModal(true));
                        }}
                    >
                        <AccountCircleIcon
                            sx={{ color: "#55CD61" }}
                            fontSize="large"
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? navigate(ROUTES.BASKET)
                                : dispatch(openLoginModal(true));
                        }}
                    >
                        <StyledBadge badgeContent={jwttoken ? count : 0}>
                            <img src="/img/bag-light.svg" alt="" />
                        </StyledBadge>
                    </IconButton>
                </Box>
            </MyContainer>
        </MobileBox>
    );
};

export default MobileDown;

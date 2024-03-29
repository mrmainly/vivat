import React from "react";
import { styled } from "@mui/system";
import { Box, MenuItem } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { MyText } from "../../..";
import ROUTES from "../../../../routes";

const MidleBar = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 105,
    marginBottom: "-6px",
});

const MidleBarItem = styled(Box)({
    display: "flex",
    alignItems: "center",
});

const Middle = () => {
    const navigate = useNavigate();
    return (
        <MidleBar>
            <MidleBarItem>
                <MenuItem onClick={() => navigate(ROUTES.HOME)}>
                    <img
                        src="/img/Frame60.png"
                        style={{ height: 90 }}
                        alt=""
                    />
                </MenuItem>
            </MidleBarItem>
            <MidleBarItem sx={{ width: "100%", ml: 2, mr: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img src="/img/Frame3.png" alt="" />
                    <Box>
                        <MyText>Якутск</MyText>
                        <MyText
                            variant="body2"
                            sx={{ color: "#999999" }}
                        >
                            Город
                        </MyText>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: 3,
                    }}
                >
                    <img src="/img/Frame212.png" alt="" />
                    <Box>
                        <MyText>Лермонтова 38</MyText>
                        <MyText
                            variant="body2"
                            sx={{ color: "#999999" }}
                        >
                            Адрес аптеки
                        </MyText>
                    </Box>
                </Box>
                <Box sx={{ ml: 3, mt: 0.5 }}>
                    <MyText>08:00-24:00</MyText>
                    <MyText sx={{ color: "#999999" }}>
                        ежедневно, без выходных
                    </MyText>
                </Box>
            </MidleBarItem>
            <MidleBarItem>
                <img
                    src="/img/_x0020_1.png"
                    style={{ height: 103, width: 92 }}
                    alt=""
                />
                <img
                    src="/img/Frame949.png"
                    style={{ height: 90 }}
                    alt=""
                />
            </MidleBarItem>
        </MidleBar>
    );
};

export default Middle;

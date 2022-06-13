import React from "react";

import { Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../..";
import ThemeMain from "../../../theme";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    minHeight: 780,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
    height: 60,
}));

const Title = styled(Box)(({ theme }) => ({
    padding: 15,
}));

const AddressSideBar = () => {
    return (
        <Main>
            <Title>
                <MyText variant="h6">
                    Аптеки в{" "}
                    <span style={{ color: ThemeMain.palette.primary.main }}>
                        якутске
                    </span>
                </MyText>
            </Title>
            <CusMenuItem>
                <MyText
                    variant="h6"
                    sx={{
                        color: "#20B12E",

                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    Семейная стоматологическая клиника Виват
                </MyText>
            </CusMenuItem>
        </Main>
    );
};

export default AddressSideBar;

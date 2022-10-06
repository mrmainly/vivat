import React from "react";

import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import { MyDrawer, BorderLine } from "../..";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

const Main = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
});

const DesktopWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    color: "#222222",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.25);",
    paddingTop: 0.5,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

interface HeaderProps {
    basketCount?: number;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <DesktopWrapper position="static">
                <Container>
                    <Main aria-label="mailbox folders">
                        <Top />
                        <BorderLine />
                        <Middle />
                        <BorderLine />
                        <Bottom />
                    </Main>
                </Container>
            </DesktopWrapper>
            <MyDrawer />
        </>
    );
};

export default Header;

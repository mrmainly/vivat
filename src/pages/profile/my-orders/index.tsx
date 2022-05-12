import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { ProfileSideBar, MyOrdersTable } from "../../../components";

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const MyOrders = () => {
  return (
    <Main>
      <ProfileSideBar title="Мои заказы" />
      <Box sx={{ mt: 6.3, width: "100%" }}>
        <MyOrdersTable />
      </Box>
    </Main>
  );
};

export default MyOrders;

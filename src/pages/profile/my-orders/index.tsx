import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { ProfileSideBar, MyOrdersTable } from "../../../components";
import ROUTES from "../../../routes";
import { useGetOrderMeQuery } from "../../../services/ProductsService";

import { FormattedMessage } from "react-intl";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const MyOrders = () => {
    const { data, isLoading } = useGetOrderMeQuery("");

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Main>
            <ProfileSideBar
                title={<FormattedMessage id="my_orders" />}
            />
            <Box sx={{ mt: 6.3, width: "100%" }}>
                <MyOrdersTable
                    data={data.results}
                    navigate_to={ROUTES.MY_ORDERS_DETAIL}
                />
            </Box>
        </Main>
    );
};

export default MyOrders;

import { Drawer, Box, IconButton, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";

import { BorderLine } from "../..";
import drawer_links from "../../../local_data/drawer_links";
import ROUTES from "../../../routes";
import ThemeMain from "../../../theme";
import MyText from "../../text";
import { drawersSlice } from "../../../reducer/drawers_slice";
import { useGetProductCatalogQuery } from "../../../services/ProductsService";

const Root = styled(Box)({
    width: 300,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
        width: 10,
        backgroundColor: "#f9f9fd",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "grey",
    },
});

const MainDrawer = () => {
    const { main_drawer_open } = useSelector(
        (state: any) => state.drawers_slice
    );
    const { handleMainDrawerOpen } = drawersSlice.actions;
    const { data } = useGetProductCatalogQuery("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleNavigate = (item: any) => {
        navigate(ROUTES.PRODUCT_PAGE, {
            state: {
                id: item.id,
                title: item.name,
            },
        });
        dispatch(handleMainDrawerOpen(false));
    };

    return (
        <Drawer
            {...{
                anchor: "left",
                open: main_drawer_open,
                onClose: () => dispatch(handleMainDrawerOpen(false)),
            }}
        >
            <Root>
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
                    {data?.results.length &&
                        data?.results?.map((item: any, index: number) => (
                            <MenuItem
                                key={index}
                                onClick={() => handleNavigate(item)}
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
                    {drawer_links?.map((item: any, index: number) => (
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
            </Root>
        </Drawer>
    );
};

export default MainDrawer;

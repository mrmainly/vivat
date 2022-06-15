import React, {
    useEffect,
    useState,
    useContext,
    useReducer,
    useLayoutEffect,
} from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import { StateContext } from "../../store";
import API from "../../api";

const WrapperBox = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const ButtonShow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "row",
    },
}));

interface CustomizedState {
    id: number | string;
    title?: string;
}

const initialFormState = {
    notRecept: false,
    jnvls: false,
    ordering_qty: false,
    min_price: "",
    max_price: "",
    producer: "",
};

const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case "input":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "checkbox":
            return {
                ...state,
                [action.field]: action.payload,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    const location = useLocation();
    const state = location.state as CustomizedState;
    const stateContext = useContext(StateContext);

    const { id, title } = state;

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    const getProducts = async () => {
        setLoading(true);
        await API.getProductsList(id, currentPage, formState)
            .then((res) => {
                console.log(res);
                if (res.data.results) {
                    setData(res.data.results);
                } else {
                    setData(res.data);
                }
                setCount(res.data.count);
            })
            .catch((error) => console.log(error));
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, [currentPage, id, stateContext.favorite_status.status, formState]);

    let countNumber = Math.ceil(count / 20);

    return (
        <Box sx={{ width: "100%" }}>
            <MyText variant="h5" sx={{ mb: 2 }}>
                {title}
            </MyText>
            <Grid container spacing={2}>
                <Grid lg={3} xl={3} md={3} sm={0} xs={0} item>
                    <CatalogFilterSideBar
                        open={drawerOpen}
                        setOpen={setDrawerOpen}
                        formState={formState}
                        formDispatch={formDispatch}
                    />
                </Grid>
                <Grid lg={9} xl={9} md={9} sm={12} xs={12} item>
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            <Pagination
                                count={countNumber}
                                onChange={(event, value) => {
                                    setCurrentPage(value);
                                    backToTop();
                                }}
                            />
                            <ButtonShow
                                onClick={() => {
                                    setDrawerOpen(true);
                                }}
                            >
                                <Hamburger toggled={drawerOpen} />
                            </ButtonShow>
                        </Box>
                        <MainCardsConstructor data={data} loading={loading} />
                        <Pagination
                            count={countNumber}
                            style={{ marginTop: 20 }}
                            onChange={(event, value) => {
                                setCurrentPage(value);
                                backToTop();
                            }}
                        />
                    </>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;

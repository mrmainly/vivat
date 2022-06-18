import React, { useEffect, useState, useContext, useReducer } from "react";
import {
    Box,
    Grid,
    Pagination,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import { StateContext } from "../../store";
import API from "../../api";
import ThemeMain from "../../theme";

const WrapperBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "start",
    },
}));

const SelectDesktop = styled(FormControl)(({ theme }) => ({
    width: 250,
    background: "white",
}));

const BoxInside = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        marginTop: 20,
        width: "100%",
    },
}));

const ButtonShow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
        display: "flex",
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
    const [sort, setSort] = useState("");

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

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            await API.getProductsList(id, currentPage, formState, sort)
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
        getProducts();
    }, [currentPage, id, stateContext.favorite_status.status, formState, sort]);

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
                        <WrapperBox>
                            <Pagination
                                page={currentPage}
                                count={countNumber}
                                onChange={(event, value) => {
                                    setCurrentPage(value);
                                }}
                            />
                            <BoxInside>
                                <SelectDesktop size="small">
                                    <InputLabel id="demo-simple-select-label">
                                        Сортировка
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Сортировка"
                                        value={sort}
                                        onChange={(e) =>
                                            setSort(e.target.value)
                                        }
                                    >
                                        <MenuItem value="priceSale">
                                            по возрастанию цены
                                        </MenuItem>
                                        <MenuItem value="-priceSale">
                                            по убыванию цены
                                        </MenuItem>
                                        <MenuItem value="name">
                                            по алфавиту а-я
                                        </MenuItem>
                                        <MenuItem value="-name">
                                            по алфавиту я-а
                                        </MenuItem>
                                    </Select>
                                </SelectDesktop>
                                <ButtonShow
                                    onClick={() => {
                                        setDrawerOpen(true);
                                    }}
                                >
                                    <Hamburger
                                        toggled={drawerOpen}
                                        color="#55CD61"
                                    />
                                </ButtonShow>
                            </BoxInside>
                        </WrapperBox>
                        <MainCardsConstructor data={data} loading={loading} />
                        <Pagination
                            count={countNumber}
                            page={currentPage}
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

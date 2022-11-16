import { useState, useReducer } from "react";
import { Box, Grid, Pagination, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import { useGetProductsQuery } from "../../services/ProductsService";

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
    min_price: 3.8,
    max_price: 4864,
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
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sort, setSort] = useState("priceSale");

    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    const location = useLocation();
    const state = location.state as CustomizedState;

    const { id, title } = state;

    const { data, isFetching, isLoading } = useGetProductsQuery({
        id,
        currentPage,
        formState,
        sort,
    });

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let countNumber = Math.ceil(data?.count / 20);

    const sortName = [
        {
            label: "по возрастанию цены",
            value: "priceSale",
        },
        {
            label: "по убыванию цены",
            value: "-priceSale",
        },
        {
            label: "по алфавиту а-я",
            value: "name",
        },
        {
            label: "по алфавиту я-а",
            value: "-name",
        },
        {
            label: "по популярности",
            value: "good_views",
        },
    ];

    return (
        <Box sx={{ width: "100%" }}>
            <MyText variant="h5" sx={{ mb: 2 }}>
                {title}
            </MyText>
            <Grid container spacing={2}>
                <Grid lg={3} xl={3} md={3} sm={0} xs={0} item>
                    <CatalogFilterSideBar open={drawerOpen} setOpen={setDrawerOpen} formState={formState} formDispatch={formDispatch} />
                </Grid>
                <Grid lg={9} xl={9} md={9} sm={12} xs={12} item>
                    <>
                        {data?.results?.length > 0 && (
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
                                        <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Сортировка" value={sort} onChange={(e) => setSort(e.target.value)}>
                                            {sortName.map((item, index) => (
                                                <MenuItem value={item.value} key={index}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </SelectDesktop>
                                    <ButtonShow
                                        onClick={() => {
                                            setDrawerOpen(true);
                                        }}
                                    >
                                        <Hamburger toggled={drawerOpen} color="#55CD61" />
                                    </ButtonShow>
                                </BoxInside>
                            </WrapperBox>
                        )}
                        <MainCardsConstructor data={data?.results} loading={isLoading} isFetching={isFetching} />
                        {data?.results?.length > 0 && (
                            <Pagination
                                count={countNumber}
                                page={currentPage}
                                style={{ marginTop: 20 }}
                                onChange={(event, value) => {
                                    setCurrentPage(value);
                                    backToTop();
                                }}
                            />
                        )}
                    </>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;

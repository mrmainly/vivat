import React, { useReducer, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";

import "./panton/stylesheet.css"

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { DispatchContext, StateContext, defaultStore, LanguageContext } from "./store";
import { stateReducer } from "./reducer";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Layout from "./layout";
import {
    Home,
    Basket,
    MyOrders,
    ProductPage,
    BasicInformation,
    ChangePassword,
    ProductDetail,
    Order,
    Team,
    Delivery,
    Work,
    Contacts,
    Booking,
    Stock,
    IssueOrdering,
    Blog,
    BlogDetail,
    BlogTheme,
    VivatInfo,
    PharmacyWork,
    PharmacyContacts,
    BasketForm,
    PharmacyDetailWork,
    StockDetail,
    StatusProduct,
    StatusProductDetail,
    MyOrdersDetail,
    SearchPage,
    Address,
    SuccessPayment,
    ErrorPayment,
    PrivacyPolicy
} from "./pages";
import ROUTES from "./routes";

const App = () => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore);
    const [currentLocale, setCurrentLocale] = useState(LOCALES.RUSSIAN)

    const changeLocale = (localeCode: string) => {
        setCurrentLocale(localeCode)
    }

    return (
        <IntlProvider messages={messages[currentLocale]} defaultLocale={currentLocale} locale={LOCALES.RUSSIAN}>
            <LanguageContext.Provider value={{ currentLocale, changeLocale }}>
                <DispatchContext.Provider value={dispatch}>
                    <StateContext.Provider value={state}>
                        <BrowserRouter>
                            <Routes>
                                <Route path={ROUTES.HOME} element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route element={<Basket />} path={ROUTES.BASKET} />
                                    <Route
                                        element={<BasketForm />}
                                        path={ROUTES.BASKET_FORM}
                                    />
                                    <Route
                                        path={`${ROUTES.PRODUCT_DETAIL}/:id`}
                                        element={<ProductDetail />}
                                    />
                                    <Route
                                        element={<IssueOrdering />}
                                        path={ROUTES.ISSUE_ORDERING}
                                    />
                                    <Route
                                        element={<ProductPage />}
                                        path={ROUTES.PRODUCT_PAGE}
                                    />

                                    {/* profile */}
                                    <Route
                                        element={<MyOrders />}
                                        path={ROUTES.MYORDERS}
                                    />
                                    <Route
                                        element={<BasicInformation />}
                                        path={ROUTES.BASICINFORMATION}
                                    />
                                    <Route
                                        element={<ChangePassword />}
                                        path={ROUTES.CHANGEPASSWORD}
                                    />

                                    {/* Info-pages */}
                                    <Route element={<Team />} path={ROUTES.TEAM} />
                                    <Route
                                        element={<Delivery />}
                                        path={ROUTES.DELIVERY}
                                    />
                                    <Route element={<PrivacyPolicy />} path={ROUTES.PRIVACY_POLICY} />
                                    <Route element={<Work />} path={ROUTES.WORK} />
                                    <Route
                                        element={<Contacts />}
                                        path={ROUTES.CONTACTS}
                                    />
                                    <Route
                                        element={<Booking />}
                                        path={ROUTES.BOOKING}
                                    />
                                    <Route element={<Stock />} path={ROUTES.STOCK} />
                                    <Route
                                        element={<StockDetail />}
                                        path={`${ROUTES.STOCK_DETAIL}/:id`}
                                    />
                                    <Route element={<Order />} path={ROUTES.ORDER} />

                                    <Route element={<Blog />} path={ROUTES.BLOG} />
                                    <Route
                                        element={<BlogTheme />}
                                        path={ROUTES.BLOG_THEME}
                                    />
                                    <Route
                                        element={<BlogDetail />}
                                        path={`${ROUTES.BLOG_DETAIL}/:id`}
                                    />

                                    <Route
                                        element={<VivatInfo />}
                                        path={ROUTES.VIVAT_INFO}
                                    />

                                    <Route
                                        element={<PharmacyWork />}
                                        path={ROUTES.PHARMACY_WORK}
                                    />

                                    <Route
                                        element={<PharmacyContacts />}
                                        path={ROUTES.PHARMACY_CONTACTS}
                                    />

                                    <Route
                                        element={<PharmacyDetailWork />}
                                        path={`${ROUTES.PHARMACY_DETAIL_WORK}/:id`}
                                    />

                                    <Route
                                        element={<StatusProduct />}
                                        path={ROUTES.STATUS_PRODUCT}
                                    />
                                    <Route
                                        element={<StatusProductDetail />}
                                        path={`${ROUTES.STATUS_PRODUCT_DETAIL}/:id`}
                                    />
                                    <Route
                                        element={<MyOrdersDetail />}
                                        path={`${ROUTES.MY_ORDERS_DETAIL}/:id`}
                                    />
                                    <Route
                                        element={<SearchPage />}
                                        path={ROUTES.SEARCH_PAGE}
                                    />
                                    <Route
                                        element={<Address />}
                                        path={ROUTES.ADDRESS}
                                    />
                                    <Route
                                        element={<SuccessPayment />}
                                        path={ROUTES.SUCCESS_PAYMENT}
                                    />
                                    <Route
                                        element={<ErrorPayment />}
                                        path={ROUTES.ERROR_PAYMENT}
                                    />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </StateContext.Provider>
                </DispatchContext.Provider>
            </LanguageContext.Provider>
        </IntlProvider>
    );
};

export default App;

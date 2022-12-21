import { useState, Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./panton/stylesheet.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { LanguageContext } from "./store/LanguageContext";

import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Layout from "./layout";
import ROUTES from "./routes";
import PageList from "./pages";
import { PageLoading } from "./components";

const LazyHome = lazy(() => import("./pages/home"));

const App = () => {
    const [currentLocale, setCurrentLocale] = useState(
        LOCALES.RUSSIAN
    );

    const changeLocale = (localeCode: string) => {
        setCurrentLocale(localeCode);
    };

    return (
        <IntlProvider
            messages={messages[currentLocale]}
            defaultLocale={currentLocale}
            locale={LOCALES.RUSSIAN}
        >
            <LanguageContext.Provider
                value={{ currentLocale, changeLocale }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={ROUTES.HOME}
                            element={<Layout />}
                        >
                            <Route
                                index
                                element={
                                    <Suspense
                                        fallback={<PageLoading />}
                                    >
                                        <LazyHome />
                                    </Suspense>
                                }
                            />
                            {PageList.map(
                                (item: any, index: number) => (
                                    <Route
                                        key={index}
                                        element={
                                            <Suspense
                                                fallback={
                                                    <PageLoading />
                                                }
                                            >
                                                {item.element}
                                            </Suspense>
                                        }
                                        path={item.path}
                                    />
                                )
                            )}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LanguageContext.Provider>
        </IntlProvider>
    );
};

export default App;

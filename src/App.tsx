import React, { useReducer, useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { DispatchContext, StateContext, LanguageContext, defaultStore } from './store'
// import { stateReducer } from './reducer'

import HomePage from './pages/home';
import Layout from './layout';

// import { LOCALES } from "./i18n/locales";
// import { messages } from "./i18n/messages";
// import { IntlProvider } from "react-intl";

const App = () => {
  // const [state, dispatch] = useReducer(stateReducer, defaultStore)
  // const [currentLocale, setCurrentLocale] = useState(LOCALES.RUSSIAN)

  // const changeLocale = (localeCode: string) => {
  //   setCurrentLocale(localeCode)
  // }

  return (
    // <IntlProvider messages={messages[currentLocale]} defaultLocale={currentLocale} locale={LOCALES.RUSSIAN}>
    //     <LanguageContext.Provider value={{ currentLocale, changeLocale }}>
    //         <DispatchContext.Provider value={dispatch}>
    //             <StateContext.Provider value={state}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    //                 </StateContext.Provider>
    //             </DispatchContext.Provider>
    //         </LanguageContext.Provider>
    // </IntlProvider>
  );
}

export default App;

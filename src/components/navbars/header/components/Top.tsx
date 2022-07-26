import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import { MyText } from "../../..";
import ROUTES from "../../../../routes";
import { LOCALES } from "../../../../i18n/locales";
import { LanguageContext } from "../../../../store/LanguageContext";

const TopBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
}));

const TopBarItem = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const Top = () => {
    const languages = [
        { name: "Русский", code: LOCALES.RUSSIAN },
        { name: "Саха тыла", code: LOCALES.SAKHA },
    ];
    const { currentLocale, changeLocale } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <TopBar>
            <TopBarItem>
                <MenuItem onClick={() => navigate(ROUTES.ADDRESS)}>
                    <MyText variant="body1">
                        <FormattedMessage id="pharmacy" />
                    </MyText>
                </MenuItem>
            </TopBarItem>
            <TopBarItem>
                <FormControl
                    sx={{ width: 150, bgcolor: "white", mr: 1 }}
                    size="small"
                >
                    <InputLabel>
                        <FormattedMessage id="langue_select" />
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={<FormattedMessage id="langue_select" />}
                        value={currentLocale}
                        onChange={(e) => {
                            changeLocale(e.target.value);
                        }}
                    >
                        {languages.map(({ name, code }) => (
                            <MenuItem key={name} value={code}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <MenuItem>
                    <MyText variant="body1">8 (914) 280-13-13</MyText>
                </MenuItem>
            </TopBarItem>
        </TopBar>
    );
};

export default Top;

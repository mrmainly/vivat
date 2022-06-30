import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";
import theme from "../../../theme";

import { Box } from "@mui/material";

const TechnicalSupport = () => {
    return (
        <div>
            <InfoBlog title="Техническая поддержка">
                <Box>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Покупателям:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        По вопросам и замечаниям работы сайта:
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Номер телефона:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            finvest2011@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Аптекам:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        По вопросам технической поддержки:
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Номер телефона:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            finvest2011@mail.ru
                        </MyText>
                    </Box>
                </Box>
            </InfoBlog>
        </div>
    );
};

export default TechnicalSupport;

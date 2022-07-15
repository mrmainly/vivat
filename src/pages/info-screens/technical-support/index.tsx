import React from "react";
import { FormattedMessage } from "react-intl";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";
import theme from "../../../theme";

import { Box } from "@mui/material";

const TechnicalSupport = () => {
    return (
        <div>
            <InfoBlog title={<FormattedMessage id="technical_support"/>}>
                <Box>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        <FormattedMessage id="technical_support_1"/>
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        <FormattedMessage id="technical_support_1_1"/>
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            <FormattedMessage id="phone_number_2"/>
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            <FormattedMessage id="mail_2"/>
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            farmvivat@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        <FormattedMessage id="technical_support_2"/>
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        <FormattedMessage id="technical_support_2_1"/>
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            <FormattedMessage id="phone_number_2"/>
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            <FormattedMessage id="mail_2"/>
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            farmvivat@mail.ru
                        </MyText>
                    </Box>
                </Box>
            </InfoBlog>
        </div>
    );
};

export default TechnicalSupport;

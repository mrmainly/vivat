import React from "react";
import { FormattedMessage } from "react-intl";

import { Box } from "@mui/material";

import { MyText } from "../../../components";
import ThemeMain from "../../../theme";
import InfoBlog from "../components/InfoBlog";

const Contacts = () => {
    return (
        <InfoBlog title={<FormattedMessage id="contacts" />}>
            <Box>
                <MyText variant="body1" sx={{ fontWeight: 600 }}>
                    <FormattedMessage id="connect_with_us" />
                </MyText>
                <MyText variant="body2" sx={{ mt: 0.8 }}>
                    <FormattedMessage id="asks_us" />
                </MyText>
                <MyText variant="body2" sx={{ mt: 0.8 }}>
                    <span
                        style={{
                            color: ThemeMain.palette.primary.main,
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        +7 (914) 280-13-13{" "}
                    </span>{" "}
                    <FormattedMessage id="in_yakutsk" />;
                </MyText>
                <MyText variant="body2" sx={{ mt: 0.8 }}>
                    <FormattedMessage id="schedule" />
                    <span
                        style={{
                            color: ThemeMain.palette.primary.main,
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {" "}
                        с 8:00 до 24:00
                    </span>
                </MyText>
                <MyText variant="body2" sx={{ mt: 0.8 }}>
                    <FormattedMessage id="receiving_application" />
                    <span
                        style={{
                            color: ThemeMain.palette.primary.main,
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {" "}
                        farmvivat@mail.ru
                    </span>
                </MyText>
            </Box>
        </InfoBlog>
    );
};

export default Contacts;

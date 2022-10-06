import React from "react";

import { FormattedMessage } from "react-intl";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

const Booking = () => {
    const data = [
        {
            label: <FormattedMessage id="booking_1" />,
            type: "text",
        },
        {
            label: <FormattedMessage id="booking_2" />,
            type: "text",
        },
        {
            label: <FormattedMessage id="booking_3" />,
            type: "text",
        },
        {
            label: <FormattedMessage id="booking_4" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_5" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_6" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_7" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_8" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_9" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_10" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_11" />,
            type: "column",
        },
        {
            label: <FormattedMessage id="booking_12" />,
            type: "text",
        },
    ];
    return (
        <div>
            <InfoBlog title={<FormattedMessage id="medication_booking" />}>
                <MyText variant="body" sx={{ fontWeight: 600 }}>
                    <FormattedMessage id="rules" />
                </MyText>
                <Box>
                    {data.map((item: any, index: number) => (
                        <div key={index}>
                            {item.type === "text" ? (
                                <MyText variant="body2" sx={{ mt: 1.2 }}>
                                    {item.label}
                                </MyText>
                            ) : (
                                <li
                                    style={{
                                        marginTop: 12,
                                        fontSize: 14,
                                    }}
                                >
                                    {item.label}
                                </li>
                            )}
                        </div>
                    ))}
                </Box>
                <MyText variant="body2" sx={{ mt: 1.2, color: "#828282" }}>
                    <FormattedMessage id="booking_under" />
                </MyText>
            </InfoBlog>
        </div>
    );
};

export default Booking;

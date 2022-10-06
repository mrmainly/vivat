import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

const PrivacyPolicy = () => {
    const data = [
        {
            title: <FormattedMessage id="privacy_policy_1" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_1_1_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_1_2" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_1_3" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_2_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_2_2" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_2_3" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_1_3" />,
                    type: "text",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_2" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_2_1" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_2" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_3" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_4" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_5" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_6" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_7" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_8" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_2_9" />,
                    type: "column",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_3" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_3_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_2" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_3" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_4" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_5" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_6" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_7" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_8" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_9" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_10" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_11" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_12" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_2_13" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_3" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_4" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_2" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_3" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_4" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_5" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_6" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_7" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_5_8" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_6" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_3_7" />,
                    type: "text",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_4" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_4_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_4_2" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_4_3" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_4_4" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_4_5" />,
                    type: "text",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_5" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_5_1" />,
                    type: "text",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_6" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_6_1_1" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_2" />,
                    type: "text",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_3" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_4" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_5" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_6" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_7" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_8" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_9" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_10" />,
                    type: "column",
                },
                {
                    label: <FormattedMessage id="privacy_policy_6_1_11" />,
                    type: "column",
                },
            ],
        },
        {
            title: <FormattedMessage id="privacy_policy_7" />,
            texts: [
                {
                    label: <FormattedMessage id="privacy_policy_7_1" />,
                    type: "text",
                },
            ],
        },
    ];

    return (
        <div>
            <InfoBlog title={<FormattedMessage id="privacy_policy" />}>
                {data.map((item, index) => (
                    <Box key={index}>
                        <MyText variant="h6" sx={{ mt: 3.2, fontWeight: 600 }}>
                            {item.title}
                        </MyText>
                        {item.texts.map((textItem, index) => (
                            <div key={index}>
                                {textItem.type === "text" ? (
                                    <MyText variant="body1" sx={{ mt: 2 }}>
                                        {textItem.label}
                                    </MyText>
                                ) : (
                                    <li style={{ marginTop: 12 }}>
                                        {textItem.label}
                                    </li>
                                )}
                            </div>
                        ))}
                    </Box>
                ))}
                <MyText
                    variant="body2"
                    onClick={() =>
                        (window.location.href =
                            "https://docs.google.com/document/d/1aQqpTYsuiH490vCqcjLFtpboay_MrkOOqxwec7r5aAk/edit")
                    }
                    sx={{
                        display: "inline-block",
                        mt: 1.2,
                        color: "#0D99FF",
                        cursor: "pointer",
                    }}
                >
                    <FormattedMessage id="privacy_policy_application_form" />
                </MyText>
            </InfoBlog>
        </div>
    );
};

export default PrivacyPolicy;

import { FormattedMessage } from "react-intl";
import { Typography, Box } from "@mui/material";

const UserAgreements = () => {
    const data = [
        {
            title: <FormattedMessage id="user_agreements_1" />,
            textList: [
                {
                    label: <FormattedMessage id="user_agreements_1_1_label" />,
                    text: <FormattedMessage id="user_agreements_1_1_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_2_label" />,
                    text: <FormattedMessage id="user_agreements_1_2_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_3_label" />,
                    text: <FormattedMessage id="user_agreements_1_3_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_4_label" />,
                    text: <FormattedMessage id="user_agreements_1_4_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_5_label" />,
                    text: <FormattedMessage id="user_agreements_1_5_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_6_label" />,
                    text: <FormattedMessage id="user_agreements_1_6_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_7_label" />,
                    text: <FormattedMessage id="user_agreements_1_7_content" />,
                },
                {
                    label: <FormattedMessage id="user_agreements_1_8_label" />,
                    text: <FormattedMessage id="user_agreements_1_8_content" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_2" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_2_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_4" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_5" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_2_3_6" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_3" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_3_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_3_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_3_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_3_4" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_3_5" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_4" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_4_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_4" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_5" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_6" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_7" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_8" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_9" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_4_9_1" />,
                    type: "select",
                },
                {
                    text: <FormattedMessage id="user_agreements_4_9_2" />,
                    type: "select",
                },
                {
                    text: <FormattedMessage id="user_agreements_4_9_3" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_5" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_5_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_4" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_5" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_6" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_7" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_8" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_9" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_10" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_11" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_5_12" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_6" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_6_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_4" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_5" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_2_6" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_3_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_6_3_2" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_7" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_7_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_7_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_7_3" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_8" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_8_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_8_2" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_9" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_9_1" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_10" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_10_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_10_2" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_11" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_11_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_11_1_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_11_1_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_11_1_3" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_11_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_11_3" />,
                },
            ],
        },
        {
            title: <FormattedMessage id="user_agreements_12" />,
            textList: [
                {
                    text: <FormattedMessage id="user_agreements_12_1" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_12_2" />,
                },
                {
                    text: <FormattedMessage id="user_agreements_12_3" />,
                },
            ],
        },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <Box key={index}>
                    <Typography variant="h5" sx={{ mb: 2, mt: 7 }}>
                        {item.title}
                    </Typography>
                    {item.textList.map((itemList, index) => (
                        <Box sx={{ display: "flex", mt: 2 }} key={index}>
                            {itemList.label ? (
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {itemList.label}
                                    <span style={{ fontWeight: "normal" }}>{itemList.text}</span>
                                </Typography>
                            ) : itemList?.type === "select" ? (
                                <li style={{ marginTop: 12 }}>{itemList.text}</li>
                            ) : (
                                <Typography variant="body1">{itemList.text}</Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            ))}
        </div>
    );
};

export default UserAgreements;

import { FormattedMessage } from "react-intl";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const AboutUs = () => {
    const data = {
        title: <FormattedMessage id="organization_details" />,
        columns: [
            <FormattedMessage id="organization_details" />,
            "«ВИВАТ»",
            "ИНН 1435276221/143501001  ОГРН 1141447000507  р/сч 40702810976000011494",
            "Якутское ОСБ №8603 ОАО «Сбербанк России»  БИК 049805609  к/сч 301101810400000000609",
            "ИНН 7707083893   КПП 143502001  ОГРН 1027700132195",
            <FormattedMessage id="office_address" />,
            <FormattedMessage id="phone_number_1" />,
            "farmvivat@mail.ru",
        ],
    };
    const rows = [
        {
            first: <FormattedMessage id="field_name" />,
            second: <FormattedMessage id="organization_info" />,
        },
        {
            first: <FormattedMessage id="organization_fullName" />,
            second: <FormattedMessage id="LLC_VIVAT" />,
        },
        {
            first: <FormattedMessage id="organization_shortName" />,
            second: <FormattedMessage id="LLC_VIVAT_short" />,
        },
        {
            first: <FormattedMessage id="legal_address" />,
            second: <FormattedMessage id="office_legal_address" />,
        },
        {
            first: <FormattedMessage id="actual_address" />,
            second: <FormattedMessage id="office_actual_address" />,
        },
        { first: "ОГРН:", second: "1141447000507" },
        { first: "ИНН:", second: "1435276221" },
        { first: "КПП:", second: "143501001" },
        { first: "ОКПО:", second: "15265974" },
        { first: "ОКВЭД:", second: "86.23" },
        { first: "ОКТМО:", second: "98701000001" },
        { first: "ОКАТО:", second: "98401000000" },
        { first: "ОКФС/ОКОПФ:", second: "16/12165" },
        {
            first: <FormattedMessage id="bank_name" />,
            second: <FormattedMessage id="bank_address" />,
        },
        {
            first: <FormattedMessage id="checking_account" />,
            second: "40702810976000011494",
        },
        {
            first: <FormattedMessage id="сorrespondent_account" />,
            second: "30101810400000000609",
        },
        { first: "БИК:", second: "049805609" },
        {
            first: <FormattedMessage id="organization_head_position" />,
            second: <FormattedMessage id="general_directior" />,
        },
        {
            first: <FormattedMessage id="organization_head_name" />,
            second: "Михайлова Оксана Тагировна",
        },
        {
            first: <FormattedMessage id="phoneNumber_mail" />,
            second: "725-013 (офис}, farmvivat@mail.ru",
        },
        {
            first: "Лицензия:",
            second: <FormattedMessage id="license_number" />,
        },
    ];
    return (
        <div>
            <InfoBlog title={<FormattedMessage id="about_us" />}>
                <MyText variant="body1" sx={{ fontWeight: 600 }}>
                    {data.title}
                </MyText>
                <Box sx={{ mt: 1.6 }}>
                    {data.columns.map((item, index) => (
                        <MyText variant="body2" sx={{ mt: 1.6 }} key={index}>
                            {item}
                        </MyText>
                    ))}
                </Box>
                <TableContainer sx={{ mt: 3.6 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.first}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.second}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </InfoBlog>
        </div>
    );
};

export default AboutUs;

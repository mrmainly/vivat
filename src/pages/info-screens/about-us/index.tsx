import React from "react";

import { FormattedMessage } from "react-intl";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  first: any,
  second: any,
) {
  return { first, second };
}

const AboutUs = () => {
  const data = {
    title: <FormattedMessage id="organization_details"/>,
    columns: [
      <FormattedMessage id="organization_details"/>,
      "«ВИВАТ»",
      "ИНН 1435276221/143501001  ОГРН 1141447000507  р/сч 40702810976000011494",
      "Якутское ОСБ №8603 ОАО «Сбербанк России»  БИК 049805609  к/сч 301101810400000000609",
      "ИНН 7707083893   КПП 143502001  ОГРН 1027700132195",
      <FormattedMessage id="office_address"/>,
      <FormattedMessage id="phone_number_1"/>,
      "farmvivat@mail.ru",
    ]
  };
  const rows = [
    createData(<FormattedMessage id="field_name"/>, <FormattedMessage id="organization_info"/>),
    createData(<FormattedMessage id="organization_fullName"/>, <FormattedMessage id="LLC_VIVAT"/>),
    createData(<FormattedMessage id="organization_shortName"/>, <FormattedMessage id="LLC_VIVAT_short"/>),
    createData(<FormattedMessage id="legal_address"/>, <FormattedMessage id="office_legal_address"/>),
    createData(<FormattedMessage id="actual_address"/>, <FormattedMessage id="office_actual_address"/>),
    createData("ОГРН:", "1141447000507"),
    createData("ИНН:", "1435276221"),
    createData("КПП:", "143501001"),
    createData("ОКПО:", "15265974"),
    createData("ОКВЭД:", "86.23"),
    createData("ОКТМО:", "98701000001"),
    createData("ОКАТО:", "98401000000"),
    createData("ОКФС/ОКОПФ:", "16/12165"),
    createData(<FormattedMessage id="bank_name"/>, <FormattedMessage id="bank_address"/>),
    createData(<FormattedMessage id="checking_account"/>, "40702810976000011494"),
    createData(<FormattedMessage id="сorrespondent_account"/>, "30101810400000000609"),
    createData("БИК:", "049805609"),
    createData(<FormattedMessage id="organization_head_position"/>, <FormattedMessage id="general_directior"/>),
    createData(<FormattedMessage id="organization_head_name"/>, "Михайлова Оксана Тагировна"),
    createData(<FormattedMessage id="phoneNumber_mail"/>, "725-013 (офис), farmvivat@mail.ru"),
    createData("Лицензия:", <FormattedMessage id="license_number"/>),
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
            {/* <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#E4FFE3" }}>Удаленность</TableCell>
                <TableCell sx={{ backgroundColor: "#E4FFE3" }} align="left">Стоимость</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.first}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                >
                  <TableCell component="th" scope="row">
                    {row.first}
                  </TableCell>
                  <TableCell align="left">{row.second}</TableCell>
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

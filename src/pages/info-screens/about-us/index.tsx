import React from "react";

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
  first: string,
  second: string,
) {
  return { first, second };
}

const AboutUs = () => {
  const data = {
    title: "Реквизиты организации",
    columns: [
      "Реквизиты организации",
      "«ВИВАТ»",
      "ИНН 1435276221/143501001  ОГРН 1141447000507  р/сч 40702810976000011494",
      "Якутское ОСБ №8603 ОАО «Сбербанк России»  БИК 049805609  к/сч 301101810400000000609",
      "ИНН 7707083893   КПП 143502001  ОГРН 1027700132195",
      "677005, г. Якутск, ул. Лермонтова, 38, левое крыльцо , 1-й этаж",
      "Тел. 8 (914) 272-50-13",
      "finvest2011@mail.ru",
    ]
  };
  const rows = [
    createData("Наименование заполняемого поля:", "Сведения об организации"),
    createData("Полное название организации:", "Общество с ограниченной ответственностью «ВИВАТ»"),
    createData("Краткое название организации:", "ООО «ВИВАТ»"),
    createData("Юридический адрес:", "677005, Республика Саха (Якутия), город Якутск, улица Лермонтова, дом 38"),
    createData("Фактический адрес:", "677005, Республика Саха (Якутия), город Якутск, улица Лермонтова, дом 38 (левое крыльцо, 1 эт.)"),
    createData("ОГРН:", "1141447000507"),
    createData("ИНН:", "1435276221"),
    createData("КПП:", "143501001"),
    createData("ОКПО:", "15265974"),
    createData("ОКВЭД:", "86.23"),
    createData("ОКТМО:", "98701000001"),
    createData("ОКАТО:", "98401000000"),
    createData("ОКФС/ОКОПФ:", "16/12165"),
    createData("Наименование банка, в т.ч. место (город) нахождения:", "Якутское отделение № 8603 ПАО «Сбербанк России»"),
    createData("Расчетный счёт:", "40702810976000011494"),
    createData("Корреспондентский счет:", "30101810400000000609"),
    createData("БИК:", "049805609"),
    createData("Должность руководителя  организации, на основании чего действует:", "Генеральный директор, действует на основании Устава"),
    createData("ФИО руководителя организации:", "Михайлова Оксана Тагировна"),
    createData("Номер телефона, адрес электронной почты:", "725-013 (офис), finvest2011@mail.ru"),
    createData("Лицензия:", "№ЛО-14-01-002447 от 19 октября 2018 г."),
  ];
  return (
    <div>
      <InfoBlog title="О нас">
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

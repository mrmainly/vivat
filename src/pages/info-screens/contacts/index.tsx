import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import ThemeMain from "../../../theme";

const Main = styled(Box)(({ theme }) => ({
  width: 450,
}));

const Contacts = () => {
  const data = [
    {
      title: "Функциональные группы",
      columns: [
        {
          label: "Аренда:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Франчайзинг:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Работа в компании:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Прочие вопросы:",
          value: "as1233d@gmail.com",
        },
      ],
    },
    {
      title: "Взаимодействие со СМИ",
      columns: [
        {
          label: "Телефон:",
          value: "+7 (914) 123-12-12",
        },
        {
          label: "E-mail:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Работа в компании:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Прочие вопросы:",
          value: "as1233d@gmail.com",
        },
      ],
    },
  ];
  return (
    <Main>
      <MyText variant="h5">Контакты</MyText>
      <Box sx={{ mt: 1.6 }}>
        <MyText variant="h6">Время работы</MyText>
      </Box>
      <MyText variant="h6">Телефон</MyText>
      <MyText variant="body1" sx={{ mt: 1.6 }}>
        +7 (914) 123-12-12
      </MyText>
      {data.map((item, index) => (
        <Box key={index} sx={{ mt: 4 }}>
          <MyText variant="h6">{item.title}</MyText>
          {item.columns.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 1.6,
              }}
            >
              <MyText variant="body2">{item.label}</MyText>
              <MyText
                variant="body2"
                sx={{ color: ThemeMain.palette.primary.main }}
              >
                {item.value}
              </MyText>
            </Box>
          ))}
        </Box>
      ))}
    </Main>
  );
};

export default Contacts;

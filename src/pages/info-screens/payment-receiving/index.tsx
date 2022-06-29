import React from "react";
import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";
import ThemeMain from "../../../theme";

import { Box, MenuItem, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { isTemplateExpression } from "typescript";

const Main = styled(Box)(({ theme }) => ({
  padding: 20,
  background: "white",
  minHeight: 800,
  borderRadius: 12,
  marginTop: 20,
}));

const PaymentReceiving = () => {
  const array = [
    {
        title: "Отказаться от заказа и его оплаты возможно в следующих случаях:",
        columns: [
            "товар не соответствует заказанному;",
            "товар поврежден вследствие нарушения целостности упаковки;",
            "товар поврежден вследствие несоответствия упаковки характеру вложения и условиям пересылки (за исключением требований по температурному режиму). Товар может быть возвращен только в момент принятия заказа.",
        ]
    },
    {
        title: "Согласно Постановлению Правительства РФ от 19.01.1998 г. №55 не подлежат обмену и возврату следующие товары надлежащего качества:",
        columns: [
            "предметы личной гигиены, средства гигиены полости рта;",
            "инструменты, приборы и аппаратура медицинские, предметы санитарии и гигиены из металла, резины, текстиля и других материалов;",
            "предметы по уходу за детьми;",
            "линзы очковые;",
            "парфюмерно-косметические товары.",
        ]
    }
  ]  
  return (
    <div>
      <InfoBlog title="Оплата и получение заказа">
        <MyText variant="body2">
            На сайте виват-аптека.рф для получения заказа необходимо обратиться в аптеку, выбранную при оформлении заказа.
        </MyText>
        <MyText variant="body2" sx={{ mt: 1.2 }}>
            Оплата и получение при самовывозе.
        </MyText>
        <ol>
            <li>
                <MyText variant="body2" sx={{ mt: 1.2 }}>
                    Оплачиваете и получаете заказ прямо в аптеке. Проверяете на месте комплектность, стоимость, целостность, сроки годности, размер (для изделий мед. назначения) каждой позиции заказа. В случае несоответствия вы вправе отказаться от заказа.
                </MyText>
            </li>
            <li>
                <MyText variant="body2" sx={{ mt: 1.2 }}>
                    Оплачиваете на сайте и получаете заказ в аптеке. На месте называете номер вашего заказа, далее проверяете на месте комплектность, стоимость, целостность, сроки годности, размер (для изделий мед. назначения) каждой позиции заказа. В случае несоответствия вы вправе отказаться от заказа.
                </MyText>
            </li>
        </ol>

        <MyText variant="body1" sx={{ mt: 3.2, fontWeight: 600 }}>
          Оплата и получение при доставке курьером
        </MyText>
        <Grid container spacing={2} sx={{ width: "70%", mt: 1.2 }}>
            <Grid item xs={4} sx={{ backgroundColor: "#E4FFE3" }}>
                <MyText>
                    Удаленность
                </MyText>
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: "#E4FFE3" }}>
                xs=4
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: "#E4FFE3" }}>
                xs=4
            </Grid>
            <Grid item xs={4}>
                xs=8
            </Grid>
            <Grid item xs={4}>
                xs=8
            </Grid>
            <Grid item xs={4}>
                xs=8
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: "#EDF1F4" }}>
                xs=8
            </Grid>
            <Grid item xs={8} sx={{ backgroundColor: "#EDF1F4" }}>
                xs=8
            </Grid>
        </Grid>
        <MyText variant="body2" sx={{ mt: 3.2 }}>
          Оплата заказа производится онлайн на сайте в полном объеме (выбираете при оформлении заказа. В счет заказа выставляется цена на курьерскую доставку). При получении заказа проверяйте на месте содержимое заказа.
        </MyText>

        <MyText variant="body1" sx={{ mt: 3.2, fontWeight: 600 }}>
          Обмен/Возврат
        </MyText>
        {array.map((item, index) => (
          <Box key={index} sx={{ mt: 1.2 }}>
            <MyText variant="body2">
              {item.title}
            </MyText>
            <Box>
              {item.columns.map((item, index) => (
                <li
                  style={{
                    fontSize: 14,
                    marginTop: 12,
                    marginLeft: 6,
                  }}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </InfoBlog>
    </div>
  );
};

export default PaymentReceiving;
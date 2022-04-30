import React from 'react'
import InfoBlog from '../components/InfoBlog'
import { MyText } from '../../../components'
import ThemeMain from '../../../theme'

import { Box, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

const Main = styled(Box)(({ theme }) => ({
    padding: 20,
    background: 'white',
    minHeight: 800,
    borderRadius: 12,
    marginTop: 20
}))


const Delivery = () => {
    return (
        <div>
            <InfoBlog title="Доставка">
                <MyText variant="body1" >Доставка</MyText>
                <MyText variant="body2" sx={{ color: '#343434', mt: 1.2 }}>Якутск</MyText>

                <MyText variant="body1" sx={{ mt: 3.2 }}>Оплата заказа</MyText>
                <MyText variant="body2" sx={{ mt: 1.2 }}>При оформлении заказа на доставку, его можно оплатить несколькими способами:</MyText>
                <Box sx={{ mt: 1 }}>
                    <li style={{ fontFamily: 'Montserrat', fontSize: 14 }}>на сайте;</li>
                    <li style={{ fontFamily: 'Montserrat', fontSize: 14 }}>наличными или картой курьеру.</li>
                </Box>
                <MyText variant="body2" sx={{ mt: 1 }}>При оформлении заказа на доставку, его можно оплатить несколькими способами:</MyText>
                <MyText variant="body1" sx={{ mt: 3.2 }}>Сбор, обработка и хранение заказа</MyText>
                <MyText variant="body2" sx={{ mt: 1.2, mb: 1 }}>Интернет-заказы принимаются круглосуточно. Обработка заказов производится согласно графику работы аптеки.</MyText>
                <Link style={{ color: ThemeMain.palette.primary.main }} to="/">Найти аптеку</Link>
                <MyText variant="body2" sx={{ mt: 1.2 }}>При фактическом наличии выбранных товаров в аптеке, заказ будет собран в течение 2-х часов. Если в заказе присутствуют товары с пометкой «под заказ», время обработки будет увеличено.</MyText>
                <Box sx={{ mt: 1, bgcolor: '#CFE2FF', borderRadius: 4, padding: 2 }}>
                    В аптеке «Ригла» по адресу: г. Москва ул. Земляной вал д. 42/20 в наличии расширенный ассортимент лекарственных
                    препаратов и косметических средств.
                </Box>
                <MyText variant="body2" sx={{ mt: 1 }}>Забронированные товары доступны для самовывоза из аптеки в течение 48 часов. По истечении этого срока заказ отменяется. Если вы хотите продлить срок бронирования, позвоните в аптеку и сообщите об этом провизору.</MyText>
                <MyText variant="body1" sx={{ mt: 3.2 }}>Экспресс-доставка</MyText>
                <MyText variant="body2" sx={{ mt: 1 }}>Осуществляется в пределах МКАД, в течение 3-х часов с момента поступления заказа.
                    Стоимость доставки - 290 рублей.</MyText>
                <MyText variant="body2" sx={{ mt: 1 }}>За МКАД - не осуществляется.</MyText>
                <Box sx={{ mt: 1, bgcolor: '#FFF3CD', borderRadius: 4, padding: 2 }}>
                    При наличии в заказе товаров со статусом "Под заказ" дата доставки может измениться на срок поставки товара под заказ
                </Box>
                <MyText variant="body1" sx={{ mt: 3.2 }}>Стоимость доставки</MyText>
                <MyText variant="body2" sx={{ mt: 1 }}>Заказы, оформленные до 14.00, будут доставлены на следующий день.</MyText>
                <MyText variant="body2" sx={{ mt: 1 }}>Заказы, оформленные после 14.00, будут доставлены через день.</MyText>
                <MyText variant="body2" sx={{ mt: 1 }}>Доставка свыше 35км от МКАД осуществляется через день.</MyText>
            </InfoBlog>
        </div>
    )
}

export default Delivery
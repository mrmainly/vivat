import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

const Order = () => {
    const data = [
        {
            title: "Краткое описание",
            columns: [
                "Рекитт Бенкизер Хелскэр Интернешнл Лтд, Соединенное Королевство, применяют при головной и зубной боли, мигрени, болезненных менструациях, невралгии, болях в спине, мышечных, ревматических и других видах боли",
            ],
        },
        {
            title: "Фармакологическое действие",
            columns: [
                "Комбинированный препарат, действие которого обусловлено входящими в его состав компонентами. Оказывает направленное действие против боли (обезболивающее), жаропонижающее и противовоспалительное действие. Ибупрофен и парацетамол отличаются по механизму и месту действия. В результате их взаимоусиливающего действия достигается более выраженное снижение болевой чувствительности и усиление жаропонижающего действия, чем по отдельности. Ибупрофен - производное пропионовой кислоты из группы нестероидных противовоспалительных препаратов (НПВП), оказывает противовоспалительное, противоотечное, анальгезирующее и жаропонижающее действие. Механизм действия ибупрофена обусловлен ингибированием синтеза простагландинов - медиаторов боли, воспаления и гипертермической реакции, посредством неизбирательного угнетения активности циклооксигеназы 1 (ЦОГ-1) и циклооксигеназы 2 (ЦОГ-2). Обезболивающий эффект ибупрофена обеспечивается его ингибирующим действием на периферическом уровне. Антипиретический эффект ибупрофена связан с центральным ингибированием синтеза простагландинов в гипоталамусе. Ибупрофен ингибирует миграцию лейкоцитов в очаг воспаления. Кроме того, ибупрофен обратимо подавляет агрегацию тромбоцитов. Парацетамол - анальгезирующее ненаркотическое средство, обладает обезболивающим, жаропонижающим и слабым противовоспалительным действием. Неизбирательно блокирует ЦОГ-2, преимущественно в центральной нервной системе. Парацетамолтакже может стимулировать активность нисходящих путей серотонина, что приводит к купированию передачи болевого импульса в спинном мозге. На периферическом уровне парацетамол обладает слабовыраженным действием на ЦОГ-1 и ЦОГ-2. Препарат оказывает более быстрый терапевтический эффект и более выраженное обезболивающее действие, чем ибупрофен и парацетамол по отдельности. После приема одной таблетки обезболивающий эффект отмечается в среднем через 15 минут после приема препарата, клинически значимый обезболивающий эффект достигается через 40 минут после приема препарата и сохраняется в течение 8 часов. После приема двух таблеток обезболивающий эффект отмечается в среднем через 18 минут после приема препарата, клинически значимый обезболивающий эффект достигается через 45 минут после приема препарата и сохраняется в течение 9 часов.",
            ],
        },
    ];
    return (
        <div>
            <InfoBlog title="Как оформить заказ">
                <Box sx={{ marginTop: "-32px" }}>
                    {data.map((item, index) => (
                        <Box key={index} sx={{ mt: 3.2 }}>
                            <MyText variant="h6" sx={{ mb: 1 }}>
                                {item.title}
                            </MyText>
                            <Box>
                                {item.columns.map((item, index) => (
                                    <MyText variant="body1" key={index}>
                                        {item}
                                    </MyText>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </InfoBlog>
        </div>
    );
};

export default Order;

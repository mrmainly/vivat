import ROUTES from "../routes"

const drawer_links = [
    {
        label: 'Доставка',
        to: ROUTES.DELIVERY
    },
    {
        label: 'Оплата и бронирование',
        to: ROUTES.BOOKING
    },
    {
        label: 'Акции',
        to: ROUTES.STOCK
    },
    {
        label: 'Скидки',
        to: ''
    },
    {
        label: 'О компании',
        to: ROUTES.TEAM
    },
    {
        label: 'Работа',
        to: ROUTES.WORK
    },
    {
        label: 'Новости',
        to: ''
    },
    {
        label: 'Контакты',
        to: ROUTES.CONTACTS
    },
    {
        label: 'Обратная свзяь',
        to: ''
    },
    {
        label: 'Отправить рецепт',
        to: ''
    },
]

export default drawer_links
import ROUTES from "../routes";

const drawer_links = [
    {
        label: "Доставка",
        to: ROUTES.DELIVERY,
    },
    {
        label: "Оплата и бронирование",
        to: ROUTES.BOOKING,
    },
    {
        label: "Акции",
        to: ROUTES.STOCK,
    },
    {
        label: "О компании",
        to: ROUTES.TEAM,
    },
    {
        label: "Работа",
        to: ROUTES.VIVAT_INFO,
    },
    {
        label: "Новости",
        to: ROUTES.BLOG,
    },
    {
        label: "Контакты",
        to: ROUTES.CONTACTS,
    },
];

export default drawer_links;

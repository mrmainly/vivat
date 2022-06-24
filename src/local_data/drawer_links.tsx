import ROUTES from "../routes";

import { FormattedMessage } from "react-intl";

const drawer_links = [
    {
        label: <FormattedMessage id='delivery'/>,
        to: ROUTES.DELIVERY,
    },
    {
        label: <FormattedMessage id='payment_booking'/>,
        to: ROUTES.BOOKING,
    },
    {
        label: <FormattedMessage id='stock'/>,
        to: ROUTES.STOCK,
    },
    {
        label: <FormattedMessage id='about_company'/>,
        to: ROUTES.TEAM,
    },
    {
        label: <FormattedMessage id='job'/>,
        to: ROUTES.VIVAT_INFO,
    },
    {
        label: <FormattedMessage id='news'/>,
        to: ROUTES.BLOG,
    },
    {
        label: <FormattedMessage id='contacts'/>,
        to: ROUTES.CONTACTS,
    },
];

export default drawer_links;

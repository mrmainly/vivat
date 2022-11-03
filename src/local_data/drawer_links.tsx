import ROUTES from "../routes";

import { FormattedMessage } from "react-intl";

const drawer_links = [
    {
        label: <FormattedMessage id="about_company" />,
        to: ROUTES.ABOUT_US,
    },
    {
        label: <FormattedMessage id="privacy_policy" />,
        to: ROUTES.PRIVACY_POLICY,
    },
    {
        label: <FormattedMessage id="contacts" />,
        to: ROUTES.CONTACTS,
    },
    {
        label: <FormattedMessage id="pharmacy" />,
        to: ROUTES.ADDRESS,
    },
    {
        label: <FormattedMessage id="license" />,
        to: ROUTES.LICENSES,
    },
    {
        label: <FormattedMessage id="news" />,
        to: ROUTES.BLOG,
    },
    {
        label: <FormattedMessage id="stock" />,
        to: ROUTES.STOCK,
    },
    {
        label: <FormattedMessage id="medication_booking" />,
        to: ROUTES.BOOKING,
    },
    {
        label: <FormattedMessage id="payment_receipt_order" />,
        to: ROUTES.PAYMENT_RECEIVING,
    },
    {
        label: <FormattedMessage id="benefits_working" />,
        to: ROUTES.BENEFITS,
    },
    {
        label: <FormattedMessage id="vacancy" />,
        to: ROUTES.VACANCY,
    },
    {
        label: <FormattedMessage id="human_resource_department" />,
        to: ROUTES.STAFF_DEPARTMENT,
    },
    {
        label: <FormattedMessage id="manufacturers" />,
        to: ROUTES.MANUFACTURERS,
    },
    {
        label: <FormattedMessage id="advertising_in_website" />,
        to: ROUTES.ADVERTISING,
    },
    {
        label: <FormattedMessage id="technical_support" />,
        to: ROUTES.TECHNICAL_SUPPORT,
    },
    {
        label: <FormattedMessage id="user_agreements" />,
        to: ROUTES.USER_AGREEMENTS,
    },
];

export default drawer_links;

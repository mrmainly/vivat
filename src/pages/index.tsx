import { lazy } from "react";

import ROUTES from "../routes";

const Basket = lazy(() => import("./basket"));
const BasketForm = lazy(() => import("./basket/basketForm"));
const AboutUs = lazy(() => import("./info-screens/about-us"));
const Delivery = lazy(() => import("./info-screens/delivery"));
const Work = lazy(() => import("./info-screens/work"));
const Contacts = lazy(() => import("./info-screens/contacts"));
const Booking = lazy(() => import("./info-screens/booking"));
const Stock = lazy(() => import("./stock"));
const StockDetail = lazy(() => import("./stock/detail"));
const Order = lazy(() => import("./info-screens/order"));
const PrivacyPolicy = lazy(() => import("./info-screens/privacy-policy"));
const PaymentReceiving = lazy(() => import("./info-screens/payment-receiving"));
const Manufacturers = lazy(() => import("./info-screens/manufacturers"));
const StaffDepartment = lazy(() => import("./info-screens/staff-department"));
const Licenses = lazy(() => import("./info-screens/licenses"));
const Advertising = lazy(() => import("./info-screens/advertising"));
const TechnicalSupport = lazy(() => import("./info-screens/technical-support"));
const Benefits = lazy(() => import("./info-screens/benefits"));
const BasicInformation = lazy(() => import("./profile/basic-information"));
const MyOrders = lazy(() => import("./profile/my-orders"));
const ProductDetail = lazy(() => import("./product-detail"));
const BlogDetail = lazy(() => import("./blog/blog-detail"));
const Blog = lazy(() => import("./blog/main-blog"));
const BlogTheme = lazy(() => import("./blog/blog-theme"));
const VivatInfo = lazy(() => import("./pharmacy/vivat-info"));
const PharmacyWork = lazy(() => import("./pharmacy-work"));
const PharmacyContacts = lazy(() => import("./pharmacy/pharmacy-contacts"));
const PharmacyDetailWork = lazy(() => import("./pharmacy-work/detail"));
const ProductPage = lazy(() => import("./product-page"));
const StatusProduct = lazy(() => import("./status-product"));
const StatusProductDetail = lazy(() => import("./status-product/detail"));
const MyOrdersDetail = lazy(() => import("./profile/my-orders/detail"));
const SearchPage = lazy(() => import("./search-page"));
const Address = lazy(() => import("./address"));
const ErrorPayment = lazy(() => import("./payment/error"));
const SearchPageMobile = lazy(() => import("./search-page/mobile"));
const SuccessPayment = lazy(() => import("./payment/success"));

const PageList = [
    {
        element: <Basket />,
        path: ROUTES.BASKET,
    },
    {
        element: <BasketForm />,
        path: ROUTES.BASKET_FORM,
    },
    {
        element: <ProductDetail />,
        path: `${ROUTES.PRODUCT_DETAIL}/:id`,
    },
    {
        element: <ProductPage />,
        path: ROUTES.PRODUCT_PAGE,
    },
    {
        element: <MyOrders />,
        path: ROUTES.MYORDERS,
    },
    {
        element: <BasicInformation />,
        path: ROUTES.BASICINFORMATION,
    },
    {
        element: <AboutUs />,
        path: ROUTES.ABOUT_US,
    },
    {
        element: <Delivery />,
        path: ROUTES.DELIVERY,
    },
    {
        element: <PrivacyPolicy />,
        path: ROUTES.PRIVACY_POLICY,
    },
    {
        element: <PaymentReceiving />,
        path: ROUTES.PAYMENT_RECEIVING,
    },
    {
        element: <StaffDepartment />,
        path: ROUTES.STAFF_DEPARTMENT,
    },
    {
        element: <Manufacturers />,
        path: ROUTES.MANUFACTURERS,
    },
    {
        element: <Licenses />,
        path: ROUTES.LICENSES,
    },
    {
        element: <Advertising />,
        path: ROUTES.ADVERTISING,
    },
    {
        element: <TechnicalSupport />,
        path: ROUTES.TECHNICAL_SUPPORT,
    },
    {
        element: <Benefits />,
        path: ROUTES.BENEFITS,
    },
    {
        element: <PharmacyWork />,
        path: ROUTES.VACANCY,
    },
    {
        element: <Work />,
        path: ROUTES.WORK,
    },
    {
        element: <Contacts />,
        path: ROUTES.CONTACTS,
    },
    {
        element: <Booking />,
        path: ROUTES.BOOKING,
    },
    {
        element: <Stock />,
        path: ROUTES.STOCK,
    },
    {
        element: <StockDetail />,
        path: `${ROUTES.STOCK_DETAIL}/:id`,
    },
    {
        element: <Order />,
        path: ROUTES.ORDER,
    },
    {
        element: <Blog />,
        path: ROUTES.BLOG,
    },
    {
        element: <BlogTheme />,
        path: ROUTES.BLOG_THEME,
    },
    {
        element: <BlogDetail />,
        path: `${ROUTES.BLOG_DETAIL}/:id`,
    },
    {
        element: <VivatInfo />,
        path: ROUTES.VIVAT_INFO,
    },
    {
        element: <PharmacyWork />,
        path: ROUTES.PHARMACY_WORK,
    },
    {
        element: <PharmacyContacts />,
        path: ROUTES.PHARMACY_CONTACTS,
    },
    {
        element: <PharmacyDetailWork />,
        path: `${ROUTES.PHARMACY_DETAIL_WORK}/:id`,
    },
    {
        element: <StatusProduct />,
        path: ROUTES.STATUS_PRODUCT,
    },
    {
        element: <StatusProductDetail />,
        path: `${ROUTES.STATUS_PRODUCT_DETAIL}/:id`,
    },
    {
        element: <MyOrdersDetail />,
        path: `${ROUTES.MY_ORDERS_DETAIL}/:id`,
    },
    {
        element: <SearchPage />,
        path: ROUTES.SEARCH_PAGE,
    },
    {
        element: <Address />,
        path: ROUTES.ADDRESS,
    },
    {
        element: <SuccessPayment />,
        path: ROUTES.SUCCESS_PAYMENT,
    },
    {
        element: <ErrorPayment />,
        path: ROUTES.ERROR_PAYMENT,
    },
    {
        element: <SearchPageMobile />,
        path: ROUTES.SEARCH_PAGE_MOBILE,
    },
];

export default PageList;

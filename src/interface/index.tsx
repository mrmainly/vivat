import React, { ReactNode } from "react";
import { SxProps } from "@mui/system";

interface MyTextProps {
    children: ReactNode[] | ReactNode;
    sx?: SxProps;
    lg?: number;
    xl?: number;
    sm?: number;
    md?: number;
    xs?: number;
    variant?: any;
    style?: any;
}

interface ModalAndDrawer {
    state: any;
    handleClose: any;
}

interface InputProps {
    ref: any;
    label?: any;
    sx?: SxProps;
    variant?: any;
    rows?: number;
    id?: any;
    multiline?: any;
    type?: string;
    required?: any;
    size?: any;
    margin?: any;
    InputLabelProps?: {
        shrink: boolean;
    };
    defaultValue?: any;
}

interface FormProps {
    children: ReactNode[] | ReactNode;
    sx?: SxProps;
    onSubmit?: any;
    style?: React.CSSProperties;
}

interface ButtonProps {
    children: ReactNode[] | ReactNode;
    onClick?: () => void;
    variant?: string;
    style?: React.CSSProperties;
    sx?: SxProps;
    color?: any;
    size?: any;
    fullWidth?: any;
}

interface MySelectProps {
    variant?: string;
    title: string;
    sx?: SxProps;
    placeholder?: string;
    ref?: any;
    defaultValue: string;
    children?: ReactNode[] | ReactNode;
}

interface MyContainerProps {
    children: ReactNode[] | ReactNode;
    wrapper: boolean;
    bgImg?: any;
    sx?: SxProps;
    lg?: number;
    xl?: number;
    sm?: number;
    md?: number;
    xs?: number;
    minHeight?: number;
}

interface MyLinkProps {
    children: ReactNode[] | ReactNode;
    href: string;
    sx?: SxProps;
}

interface MyDrawerProps {
    setState: any;
    drawerOpen: any;
}

interface BorderLineProps {
    sx: SxProps;
}

interface MainCardsConstructorProps {
    data: any;
    title?: string;
    sx?: SxProps;
    loading?: any;
    status?: any;
    setStatus?: any;
}

interface ProfileSideBarProps {
    title?: string;
}

interface ToggleButtonProps {
    sx?: SxProps;
    toggleState: any;
    setToggleState: any;
}

interface GoodsCardProps {
    img?: string;
    description?: string;
    specialPrice?: number | string;
    specialText?: string;
    id: number | string;
    price?: number | string;
    name?: string;
    status?: any;
    setStatus?: any;
    producer?: string;
    qty?: number;
    fav?: any;
    stocks?: any;
    // barcodes?: number;
    // code?: string;
    // mmmEn?: string;
    // mnnRu?: string;
    // name?: string;
    // producer?: string;
    // refId?: number;
    // rv?: string;
}

interface ProductSliderProps {
    title: string;
    data: any;
}

interface WorkCardProps {
    title: string;
    city: any;
    id: number;
}

interface BlogCardProps {
    description?: any;
    views?: number | string;
    image?: string;
    date?: string;
    tags?: any;
    type?: string;
    id?: number;
    name?: string;
}

interface StockCardProps {
    image: string | null;
    description: any;
    date_start?: string;
    date_end?: string;
    id: number;
    city?: number;
}

interface MainDrawerProps {
    state: any;
    handleClose: any;
}

interface SignModalProps {
    login?: any;
    setLoginClose?: any;
    setLoginOpen?: any;
    registerModal?: any;
    setRegisterClose?: any;
    setRegisterOpen?: any;
    forgot?: any;
    setForgotOpen?: any;
    setForgotClose?: any;
}

export type {
    MyTextProps,
    InputProps,
    FormProps,
    MySelectProps,
    ButtonProps,
    MyContainerProps,
    MyLinkProps,
    MyDrawerProps,
    BorderLineProps,
    MainCardsConstructorProps,
    GoodsCardProps,
    ProductSliderProps,
    ProfileSideBarProps,
    ToggleButtonProps,
    WorkCardProps,
    ModalAndDrawer,
    BlogCardProps,
    StockCardProps,
    MainDrawerProps,
    SignModalProps,
};

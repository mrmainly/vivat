interface MyTextProps {
    children: any,
    sx?: any,
    lg?: number,
    xl?: number,
    sm?: number,
    md?: number,
    xs?: number,
    variant?: any
}

interface InputProps {
    ref: any,
    label?: any,
    sx?: any,
    variant: any,
    rows?: number,
    id?: any,
    multiline?: any,
    type?: string,
    required?: any
}

interface FormProps {
    children: any,
    sx?: any,
    onSubmit?: any
}

interface ButtonProps {
    children: any,
    onClick?: () => void,
    variant?: string,
    style?: any,
    sx?: any,
    color?: any,
    size?: any
}

interface MySelectProps {
    variant?: string,
    title: string,
    sx?: any,
    placeholder?: string,
    ref?: any,
    defaultValue: string,
    children?: any
}

interface MyContainerProps {
    children: any,
    wrapper: boolean,
    bgImg?: any,
    sx?: any,
    lg?: number,
    xl?: number,
    sm?: number,
    md?: number,
    xs?: number,
    minHeight?: number
}

interface MyLinkProps {
    children: any,
    href: string,
    sx?: any
}

interface MyDrawerProps {
    handleDrawerClose: any,
    drawerOpen: any
}

interface BorderLineProps {
    sx: any
}

interface MainCardsConstructorProps {

}

interface GoodsCardProps {
    img?: string,
    description?: string,
    specialPrice?: number | string,
    specialText?: string,
    id: number | string,
    price?: number | string
}

interface ProductSliderProps {
    title: string,
    data: any
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
    ProductSliderProps
}
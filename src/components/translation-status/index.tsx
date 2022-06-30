export const translationStatus = (name: any) => {
    switch (name) {
        case "NEW":
            return "Новый";
        case "REGISTERED":
            return "Зарегистрирован";
        case "RESERVEDPARTIALLY":
            return "Зарезервирован частично";
        case "CANCELLED":
            return "Отменено";
        case "READYTOPICKUP":
            return "Готов к выдаче";
        case "COMPLETED":
            return "Завершен";
        case "REJECTED":
            return "‘Отклонен’";
        default:
            throw new Error();
    }
};

export const translationDelivery = (name: any) => {
    switch (name) {
        case "DELIVARY":
            return "Самовызов";
        case "PICKUP":
            return "Доставка курьером";

        default:
            throw new Error();
    }
};

export const translationPayment = (name: any) => {
    switch (name) {
        case "CARD":
            return "картой онляйн при получении";
        case "CASH":
            return "Наличными при получении";

        default:
            throw new Error();
    }
};

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
    }
};

export const translationDelivery = (name: any) => {
    switch (name) {
        case "DELIVARY":
            return "Доставка курьером";
        case "PICKUP":
            return "Самовывоз";
    }
};

export const translationPayment = (name: any) => {
    switch (name) {
        case "CARD":
            return "картой онляйн при получении";
        case "CASH":
            return "Наличными при получении";
    }
};

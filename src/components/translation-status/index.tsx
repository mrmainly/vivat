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

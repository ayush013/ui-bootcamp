
export const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

export const getCurrentDate = () => {
    const date = new Date();
    return [date.getDate(), date.getMonth(), date.getFullYear()];
}

export const getCurrentDay = () => {
    return new Date().getDay();
}


export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default class DateService {

    constructor() {}

    getCurrentDate() {
        return new Date();
    }

    getDaysinMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }


}

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];

export const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default class DateService {

    monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    constructor() {}

    getCurrentDate() {
        return new Date();
    }

    getDaysinMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }


}
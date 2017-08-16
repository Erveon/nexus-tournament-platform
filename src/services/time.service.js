import moment from 'moment';

let Time = {};

Time.format = (at) => {
    return moment(at).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'MMMM Do YYYY'
    });
}

export default Time;
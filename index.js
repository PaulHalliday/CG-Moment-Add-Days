const moment = require('moment');

const myDate = moment().format();

const dateWithExtraFiveDays = moment()
  .add('days', 7)
  .format('DD-MM-YYYY');

console.log(dateWithExtraFiveDays);

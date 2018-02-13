var leapYearDay = [
  0,   31,   60,   91,  121,  152,  182,  213,  244,  274,  305,  335,
  366,  397,  425,  456,  486,  517,  547,  578,  609,  639,  670,  700,
  731,  762,  790,  821,  851,  882,  912,  943,  974, 1004, 1035, 1065,
  1096, 1127, 1155, 1186, 1216, 1247, 1277, 1308, 1339, 1369, 1400, 1430,
  1461
];
var EPOCH_YEAR = 2000;
var MONTHS_OF_ONE_YEAR = 12;
var DAYS_OF_4YEARS  = 1 + (365 * 4);
var ABOUT_DAYS_OF_MONTH = 30;

var Nods2000 = {
  toDate: function(days) {
    var y4 = Math.floor(days / DAYS_OF_4YEARS);
    var d0 = days % DAYS_OF_4YEARS;
    var m0 = Math.floor(d0 / ABOUT_DAYS_OF_MONTH);
    var m1 = m0 - (d0 < leapYearDay[m0]);

    var year = EPOCH_YEAR + (y4 * 4) + Math.floor(m1 / MONTHS_OF_ONE_YEAR);
    var month = (m1 % MONTHS_OF_ONE_YEAR) + 1;
    var day = (d0 - leapYearDay[m1]) + 1;

    return {year: year, month: month, day: day};
  },
  toDays: function(year, month, day) {
    var y = Math.floor((year - EPOCH_YEAR) / 4);
    var m = ((year - EPOCH_YEAR) % 4) * MONTHS_OF_ONE_YEAR + (month - 1);
    var d = (day - 1);

    return (y * DAYS_OF_4YEARS) + leapYearDay[m] + d;
  }
};
module.exports = Nods2000;
module.exports.default = Nods2000;

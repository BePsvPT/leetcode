/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

    let [year, month, day] = date.split('-').map((s) => parseInt(s, 10));
    let leap = (year % 400) === 0 || ((year % 4) === 0 && (year % 100) !== 0);

    return days.slice(0, month - 1).reduce((acc, val) => acc + val, 0) + day + (leap && month > 2 ? 1 : 0);
};

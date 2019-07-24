/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m, n;
    let ans = new Array(222).fill(0);

    for (m = num2.length - 1; m >= 0; --m) {
        let pos = ans.length - 1 - (num2.length - m - 1);

        for (n = num1.length - 1; n >= 0; --n) {
            ans[pos--] += num2[m] * num1[n];
        }
    }

    for (m = ans.length - 1; m > 0; --m) {
        ans[m - 1] += Math.trunc(ans[m] / 10);
        ans[m] = ans[m] % 10;
    }

    while (ans[0] === 0) {
        ans.shift();
    }

    return ans.join('') || '0';
};

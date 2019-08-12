/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    while (expression.length > 1) {
        expression = expression.replace(/([!&|])\(([tf,]+)\)/, (match, op, expr) => {
            if (op === '!') {
                return expr === 't' ? 'f' : 't';
            } else if (op === '&' && expr.includes('f')) {
                return 'f';
            } else if (op === '|' && !expr.includes('t')) {
                return 'f';
            }

            return 't';
        });
    }

    return expression === 't';
};

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) {
        return false;
    } 

    const As = A.split('');
    const Bs = B.split('');

    const Aso = As.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1 
        return acc;
    }, {});
    const Bso = Bs.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1 
        return acc;
    }, {});

    if (new Set(As).size !== new Set(Bs).size) {
        return false;
    } else if (!Object.keys(Aso).every((key) => Aso[key] === Bso[key])) {
        return false;
    }

    let distance = 0;

    for (let i = 0; i < As.length; ++i) {
        if (As[i] !== Bs[i]) {
            if (++distance > 2) {
                return false;
            }
        }
    }

    if (distance === 1) {
        return false;
    } else if (distance === 2) {
        return true;
    }

    return As.length - new Set(As).size > 0;
};

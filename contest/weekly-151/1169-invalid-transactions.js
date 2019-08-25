/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const transforms = transactions.map((transaction) => {
        const chunks = transaction.split(',');

        return {
            name: chunks[0],
            time: parseInt(chunks[1], 10),
            amount: parseInt(chunks[2], 10),
            city: chunks[3],
        };
    });

    const names = {};

    transforms.sort((a, b) => a.time - b.time).forEach((transform) => {
        if (!names.hasOwnProperty(transform.name)) {
            names[transform.name] = [];
        }

        names[transform.name].push(transform);
    });

    const results = [];

    Object.keys(names).forEach((name) => {
        const items = names[name];

        for (let i = 0; i < items.length; ++i) {
            if (items[i].amount > 1000) {
                results.push(items[i]);
            } else {
                for (let m = 0; m < items.length; ++m) {
                    if (i === m) {
                        continue;
                    }

                    if (items[i].city !== items[m].city && Math.abs(items[i].time - items[m].time) <= 60) {
                        results.push(items[i]);
                        break;
                    }
                }
            }
        }
    });

    return results.map((result) => Object.values(result).join(','));
};

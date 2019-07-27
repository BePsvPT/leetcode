/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let results = {};

    cpdomains.forEach((cp) => {
        let [count, domain] = cp.split(' ');
        let pos = -1;

        count = parseInt(count, 10);
        domain = '.'+domain;

        while ((pos = domain.indexOf('.', pos + 1)) > -1) {
            let target = domain.substring(pos + 1);

            if (!results.hasOwnProperty(target)) {
                results[target] = 0;
            }

            results[target] += count;

            pos += 1;
        }
    });

    return Object.keys(results).map((key) => {
        return `${results[key]} ${key}`;
    });
};

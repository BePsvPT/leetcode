const ipv4 = (ip) => {
    const chunks = ip.split('.');

    if (chunks.length !== 4) {
        return false;
    }

    return chunks.every((fragment) => {
        if (!fragment.length || fragment.length > 3 || fragment.includes('e')) {
            return false;
        }

        const num = parseInt(fragment, 10);

        if (isNaN(num)) {
            return false;
        } else if (num < 0 || num > 255) {
            return false;
        } else if (num > 0 && fragment.startsWith('0')) {
            return false;
        } else if (num === 0 && fragment.length !== 1) {
            return false;
        }

        return true;
    });
}

const ipv6 = (ip) => {
    const chunks = ip.split(':');

    if (chunks.length !== 8) {
        return false;
    }

    return chunks.every((fragment) => {
        if (!fragment.length || fragment.length > 4) {
            return false;
        }

        fragment = fragment.toLowerCase();

        for (let i = 0; i < fragment.length; ++i) {
            let code = fragment.charCodeAt(i);

            if (!((code >= 48 && code <= 57) || (code >= 97 && code <= 102))) {
                return false;
            }
        }

        return true;
    });
}

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (IP.includes('.') && ipv4(IP)) {
        return 'IPv4';
    } else if (IP.includes(':') && ipv6(IP)) {
        return 'IPv6';
    }

    return 'Neither';
};

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    emails = emails.map((email) => {
        let [local, domain] = email.split('@');

        local = local.split('+')[0].replace(/\./g, '');

        return `${local}@${domain}`;
    });

    return new Set(emails).size;
};

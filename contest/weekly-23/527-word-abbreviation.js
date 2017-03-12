/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
    const lcp = strs => {
        let prefix = strs[0]
    
        for (let i = 1; i < strs.length; i++) {
            let str = strs[i]
            
            for (let j = 0; j < prefix.length; j++) {
               if (prefix[j] !== str[j]) {
                    prefix = prefix.slice(0, j)
                    
                    break
               } 
            }
        }
    
        return prefix
    }
    
    let mapping = {}, hash = {}
    
    for (let i = 0; i < dict.length; ++i) {
        let l = dict[i].length
        
        if (! mapping.hasOwnProperty(l)) {
            mapping[l] = []
        }
        
        mapping[l].push(dict[i])
    }
    
    for (let key in mapping) {
        mapping[key].sort()
        
        if (key <= 3) {
            mapping[key].forEach(key => { hash[key] = key })
        } else {
            mapping[key].forEach(key => {
                hash[key] = `${key[0]}${key.length - 2}${key[key.length - 1]}`
            })
        }
    }
    
    while (true) {
        mapping = {}
    
        for (let key in hash) {
            if (! mapping.hasOwnProperty(hash[key])) {
                mapping[hash[key]] = []
            }
            
            mapping[hash[key]].push(key)
        }
        
        let stop = true
        
        for (let key in mapping) {
            if (1 === mapping[key].length) {
                continue
            }
            
            stop = false
            
            let lcpLength = lcp(mapping[key]).length
            
            mapping[key].forEach(key => {
                if (key.length - (lcpLength + 2) <= 1) {
                    hash[key] = key
                } else {
                    hash[key] = `${key.substr(0, lcpLength + 1)}${key.length - lcpLength - 2}${key[key.length - 1]}`
                }
            })
        }
        
        if (stop) {
            break
        }
    }
    
    let result = []
    
    dict.forEach(key => {
        result.push(hash[key])
    })
    
    return result
};

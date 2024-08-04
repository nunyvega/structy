
var firstUniqChar = function (s) {
    const obj : Record<string, number> = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj.hasOwnProperty(s[i])) obj[s[i]] = 1;
        else obj[s[i]] = obj[s[i]] + 1
    }

    for (let x = 0; x < s.length; x++) if (obj[s[x]] == 1) return x
    return -1;
};
const blacklist = [];

exports.addToBlacklist = (token) => {
    blacklist.push(token);
};

exports.isBlacklisted = (token) => {
    return blacklist.includes(token);
};

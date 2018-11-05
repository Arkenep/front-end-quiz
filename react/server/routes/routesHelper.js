const fs = require('fs');

const userFavoritesExist = (userId) => {
    return fs.existsSync(`./server/data/favorites/${userId}.json`);
};

module.exports = { userFavoritesExist };
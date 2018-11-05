const express = require('express');
const fs = require('fs');

const {userFavoritesExist} = require('./routesHelper.js');

const favoritesRouter = express.Router();

favoritesRouter.get('/:userId/:itemId', (req, res) => {
    const response = changeFavoriteStatus(req.params.userId, req.params.itemId);
    if (response.error) {
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
});

const changeFavoriteStatus = (userId, itemId) => {
    if (userFavoritesExist(userId)) {
        if (isUserItemFavorite(userId, itemId)) {
            const favoritesArr = JSON.parse(fs.readFileSync(`./server/data/favorites/${userId}.json`, 'utf8'));
            const newFavoritesArr = [];
            favoritesArr.forEach((item) => {
                if (item !== itemId) {
                    newFavoritesArr.push(item);
                }
            });
            return writeFile(newFavoritesArr, userId, false);
        } else {
            const favoritesArr = JSON.parse(fs.readFileSync(`./server/data/favorites/${userId}.json`, 'utf8'));
            favoritesArr.push(itemId);
            return writeFile(favoritesArr, userId, true);
        }
    } else {
        const favoritesArr = [itemId];
        return writeFile(favoritesArr, userId, true);
    }
};

const writeFile = (content, userId, isFavorite) => {
    try {
        fs.writeFileSync(`./server/data/favorites/${userId}.json`, JSON.stringify(content), 'utf8');
        return {favorite: isFavorite}
    } catch (e) {
        return {error: e};
    }
};

const isUserItemFavorite = (userId, itemId) => {
    const favoritesArr = JSON.parse(fs.readFileSync(`./server/data/favorites/${userId}.json`, 'utf8'));
    return Array.isArray(favoritesArr) ? favoritesArr.some((favorite) => favorite === itemId) : [];
};

module.exports = favoritesRouter;

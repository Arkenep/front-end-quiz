const express = require('express');
const fs = require('fs');

const cachedItems = require('../data/items.json');
const {userFavoritesExist} = require('./routesHelper.js');

const itemRouter = express.Router();

const getItem = function (itemId, userId) {
    const favoritesArr = userFavoritesExist(userId) ? JSON.parse(fs.readFileSync(`./server/data/favorites/${userId}.json`, 'utf8')) : [];
    const item = cachedItems.find((item) => {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
    return {
        item,
        isFavorite: favoritesArr.some(itemId => item.id === itemId)
    };
};

itemRouter.get('/:id/:userId', (req, res) => {
    const id = req.params.id;
    const userId = req.params.userId;
    const item = getItem(id, userId);
    res.status(200).json(item);
});

module.exports = itemRouter;

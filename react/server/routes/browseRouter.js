const express = require('express');
const fs = require('fs');

const cachedItems = require('../data/items.json');
const {userFavoritesExist} = require('./routesHelper.js');

const browseRouter = express.Router();

const getItems = function (payload, userId) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 9;
    const items = cachedItems.slice(start, start + limit);

    const favoritesArr = userFavoritesExist(userId) ? JSON.parse(fs.readFileSync(`./server/data/favorites/${userId}.json`, 'utf8')) : [];

    items.map(item => {
        item.isFavorite = favoritesArr.some(itemId => item.id === itemId);
        return item;
    });

    return {
        items: items,
        totalItems: cachedItems.length
    };
};

browseRouter.get('/:userId', (req, res)=>{
    const response = getItems(req.query, req.params.userId);
    res.status(200).json(response);
});

module.exports = browseRouter;

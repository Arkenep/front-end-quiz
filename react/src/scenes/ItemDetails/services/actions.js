export const ITEM_LOAD = 'ITEM_LOAD';
export const ITEM_LOAD_SUCCESS = 'ITEM_LOAD_SUCCESS';
export const ITEM_LOAD_ERROR = 'ITEM_LOAD_ERROR';
export const ITEM_LOAD_CANCEL = 'ITEM_LOAD_CANCEL';
export const ITEM_TOGGLE_FAVORITE = 'ITEM_TOGGLE_FAVORITE';
export const ITEM_TOGGLE_FAVORITE_SUCCESS = 'ITEM_TOGGLE_FAVORITE_SUCCESS';
export const ITEM_TOGGLE_FAVORITE_ERROR = 'ITEM_TOGGLE_FAVORITE_ERROR';
export const ITEM_TOGGLE_FAVORITE_CANCEL = 'ITEM_TOGGLE_FAVORITE_CANCEL';

export const itemToggleFavorite = (favoriteId) => {
    return {
        type: ITEM_TOGGLE_FAVORITE,
        payload: {
            favoriteId
        }
    };
};

export const itemToggleFavoriteSuccess = (favorite) => {
    return {
        type: ITEM_TOGGLE_FAVORITE_SUCCESS,
        payload: {
            favorite
        }
    };
};

export const itemToggleFavoriteError = (error) => {
    return {
        type: ITEM_TOGGLE_FAVORITE_ERROR,
        error
    };
};

export const itemToggleFavoriteCancel = () => {
    return {
        type: ITEM_TOGGLE_FAVORITE_CANCEL
    };
};

export const itemLoad = () => {
    return {
        type: ITEM_LOAD
    };
};

export const itemLoadSuccess = (item) => {
    return {
        type: ITEM_LOAD_SUCCESS,
        payload: {
            item
        }
    };
};

export const itemLoadError = (error) => {
    return {
        type: ITEM_LOAD_ERROR,
        error
    };
};

export const itemLoadCancel = () => {
    return {
        type: ITEM_LOAD_CANCEL
    };
};
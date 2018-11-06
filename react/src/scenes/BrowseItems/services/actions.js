export const BROWSE_ITEMS_LOAD = 'BROWSE_ITEMS_LOAD';
export const BROWSE_ITEMS_LOAD_SUCCESS = 'BROWSE_ITEMS_LOAD_SUCCESS';
export const BROWSE_ITEMS_LOAD_ERROR = 'BROWSE_ITEMS_LOAD_ERROR';
export const BROWSE_ITEMS_LOAD_CANCEL = 'BROWSE_ITEMS_LOAD_CANCEL';
export const BROWSE_ITEMS_QUERY_CHANGE = 'BROWSE_ITEMS_QUERY_CHANGE';
export const ITEMS_TOGGLE_FAVORITE = 'ITEMS_TOGGLE_FAVORITE';
export const ITEMS_TOGGLE_FAVORITE_SUCCESS = 'ITEMS_TOGGLE_FAVORITE_SUCCESS';
export const ITEMS_TOGGLE_FAVORITE_ERROR = 'ITEMS_TOGGLE_FAVORITE_ERROR';
export const ITEMS_TOGGLE_FAVORITE_CANCEL = 'ITEMS_TOGGLE_FAVORITE_CANCEL';

export const itemsToggleFavorite = (favoriteId) => {
    return {
        type: ITEMS_TOGGLE_FAVORITE,
        payload: {
            favoriteId
        }
    };
};

export const itemsToggleFavoriteSuccess = (favorite) => {
    return {
        type: ITEMS_TOGGLE_FAVORITE_SUCCESS,
        payload: {
            favorite
        }
    };
};

export const itemsToggleFavoriteError = (error) => {
    return {
        type: ITEMS_TOGGLE_FAVORITE_ERROR,
        error
    };
};

export const itemsToggleFavoriteCancel = () => {
    return {
        type: ITEMS_TOGGLE_FAVORITE_CANCEL
    };
};

export const browseItemsQueryChange = (query) => {
    return {
        type: BROWSE_ITEMS_QUERY_CHANGE,
        payload: {
            query
        }
    };
};

export const browseItemsLoad = () => {
    return {
        type: BROWSE_ITEMS_LOAD
    };
};

export const browseItemsLoadSuccess = (items) => {
    return {
        type: BROWSE_ITEMS_LOAD_SUCCESS,
        payload: {
            items
        }
    };
};

export const browseItemsLoadError = (error) => {
    return {
        type: BROWSE_ITEMS_LOAD_ERROR,
        error
    };
};

export const browseItemsLoadCancel = () => {
    return {
        type: BROWSE_ITEMS_LOAD_CANCEL
    };
};
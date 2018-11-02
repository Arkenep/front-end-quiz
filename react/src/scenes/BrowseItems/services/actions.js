export const BROWSE_ITEMS_LOAD = 'BROWSE_ITEMS_LOAD';
export const BROWSE_ITEMS_LOAD_SUCCESS = 'BROWSE_ITEMS_LOAD_SUCCESS';
export const BROWSE_ITEMS_LOAD_ERROR = 'BROWSE_ITEMS_LOAD_ERROR';
export const BROWSE_ITEMS_LOAD_CANCEL = 'BROWSE_ITEMS_LOAD_CANCEL';
export const BROWSE_ITEMS_QUERY_CHANGE = 'BROWSE_ITEMS_QUERY_CHANGE';

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
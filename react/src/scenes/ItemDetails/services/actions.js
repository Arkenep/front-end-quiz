export const ITEM_LOAD = 'ITEM_LOAD';
export const ITEM_LOAD_SUCCESS = 'ITEM_LOAD_SUCCESS';
export const ITEM_LOAD_ERROR = 'ITEM_LOAD_ERROR';
export const ITEM_LOAD_CANCEL = 'ITEM_LOAD_CANCEL';


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
import * as actions from './actions';

const defaultState = {
    items: null,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.BROWSE_ITEMS_LOAD: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case actions.BROWSE_ITEMS_LOAD_SUCCESS: {
            return {
                ...state,
                items: action.payload.items,
                loading: false,
            };
        }

        case actions.BROWSE_ITEMS_LOAD_CANCEL: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }

        default: {
            return state;
        }
    }
};
import * as actions from './actions';

const defaultState = {
    item: null,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {

        case actions.ITEM_TOGGLE_FAVORITE: {
            return {
                ...state
            };
        }

        case actions.ITEM_TOGGLE_FAVORITE_SUCCESS: {
            return {
                item: {
                    ...state.item,
                    isFavorite: action.payload.favorite.favorite
                }
            };
        }

        case actions.ITEM_LOAD: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case actions.ITEM_LOAD_SUCCESS: {
            return {
                ...state,
                item: action.payload.item,
                loading: false,
            };
        }

        case actions.ITEM_LOAD_CANCEL: {
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
import * as actions from './actions';

const defaultState = {
    items: null,
    query: 0,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case actions.ITEMS_TOGGLE_FAVORITE: {
            return {
                ...state
            };
        }

        case actions.ITEMS_TOGGLE_FAVORITE_SUCCESS: {
            return {
                items: {
                    ...state.items,
                    isFavorite: action.payload.favorite.favorite
                }
            };
        }

        case actions.BROWSE_ITEMS_QUERY_CHANGE: {
            return {
                ...state,
                query: action.payload.query
            };
        }

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
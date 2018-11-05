import {routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import {reducer as browseItemsReducer} from '../scenes/BrowseItems/services/reducer';
import {reducer as itemReducer} from '../scenes/ItemDetails/services/reducer';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import browseItemsEpic from '../scenes/BrowseItems/services/epics';
import itemEpic from '../scenes/ItemDetails/services/epics';

export const createAppStore = (history) => {
    const routerHistoryMiddleware = routerMiddleware(history);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootEpic = combineEpics(
        browseItemsEpic,
        itemEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);

    return createStore(

        combineReducers({
            router: routerReducer,
            browseItems: browseItemsReducer,
            item: itemReducer
        }),
        composeEnhancers(
            applyMiddleware(
                routerHistoryMiddleware,
                epicMiddleware
            )
        )
    );
};

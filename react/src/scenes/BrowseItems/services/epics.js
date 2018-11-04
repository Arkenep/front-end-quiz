import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, map, catchError, takeUntil} from 'rxjs/operators';
import * as qs from 'qs';
import * as actions from './actions';
import {ajax} from 'rxjs/ajax';
import {BROWSE_ITEMS_QUERY_CHANGE} from "./actions";

const URL = 'http://localhost:3001/browse';

const browseItemsLoad = (action$) =>
    action$.ofType(actions.BROWSE_ITEMS_QUERY_CHANGE).pipe(
        switchMap((action) => {
            const params = qs.stringify({
                start: action.payload.query
            });

            return ajax({
                url: `${URL}?${params}`,
                method: 'GET',
                contentType: "application/json;charset=utf-8",
            }).pipe(
                map(({response}) => {
                    return actions.browseItemsLoadSuccess(response);
                }),
                catchError(() => {
                    return of(actions.browseItemsLoadError('An error!'));
                }),
                takeUntil(action$.ofType(actions.BROWSE_ITEMS_LOAD_CANCEL))
            );
        })
    );

export default combineEpics(
    browseItemsLoad
)
import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, map, catchError, takeUntil} from 'rxjs/operators';
import * as actions from './actions';
import {ajax} from 'rxjs/ajax';
import {ITEM_LOAD} from "./actions";
import {ITEM_LOAD_CANCEL} from "./actions";

const URL = 'http://localhost:3001/item/f_3906702';

const itemLoad = (action$) =>
    action$.ofType(actions.ITEM_LOAD).pipe(
        switchMap(() => {
            return ajax({
                url: `${URL}`,
                method: 'GET',
                contentType: "application/json;charset=utf-8",
            }).pipe(
                map(({response}) => {
                    console.log(response);
                    return actions.itemLoadSuccess(response);
                }),
                catchError(() => {
                    return of(actions.itemLoadError('An error!'));
                }),
                takeUntil(action$.ofType(actions.ITEM_LOAD_CANCEL))
            );
        })
    );

export default combineEpics(
    itemLoad
)
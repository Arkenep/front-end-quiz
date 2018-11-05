import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, map, catchError, takeUntil} from 'rxjs/operators';
import * as actions from './actions';
import {ajax} from 'rxjs/ajax';

const URL = 'http://localhost:3001';

const itemLoad = (action$, state$) =>
    action$.ofType(actions.ITEM_LOAD).pipe(
        switchMap(() => {
            return ajax({
                url: `${URL}${state$.getState().router.location.pathname}`,
                method: 'GET',
                contentType: "application/json;charset=utf-8",
            }).pipe(
                map(({response}) => {
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
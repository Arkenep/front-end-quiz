import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import BrowseItemsScene from './scenes/BrowseItems/BrowseItems'
import ItemDetailsScene from './scenes/ItemDetails/ItemDetails'
import {Provider} from "react-redux";
import {createAppStore} from './store/store';
import './App.css';

const history = createHistory();
const store = createAppStore(history);

class App extends Component {

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Fragment>
                            <Switch>
                                <Route exact path="/" component={BrowseItemsScene}/>
                                <Route path={'/browse'} component={BrowseItemsScene}/>
                                <Route path={'/item'} component={ItemDetailsScene}/>
                                <Redirect to={'/'}/>
                            </Switch>
                        </Fragment>
                    </ConnectedRouter>
                </Provider>
            </div>
        );
    }
}

export default App;

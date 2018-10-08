import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

//middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { AppState } from "./../app-state";
import { TheReducer } from "./../reducers/index";

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));
const AppStore: Store<AppState> = createStore(TheReducer, middleware);

export default AppStore;
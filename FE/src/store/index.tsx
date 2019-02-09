import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

//middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { IAppState } from "./../app-state";
import { TheReducer } from "./../reducers/index";

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));
const AppStore: Store<IAppState> = createStore(TheReducer, middleware);

export default AppStore;
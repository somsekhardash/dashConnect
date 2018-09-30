import { applyMiddleware, createStore, Store } from "redux";

//middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { AppState } from "./../app-state";
import { TheReducer } from "./../reducers/index";

const middleware = applyMiddleware(promise(), thunk);
const AppStore: Store<AppState> = createStore(TheReducer, middleware);

export default AppStore;
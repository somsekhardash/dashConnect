// import { Toggle } from "./models/index";

export interface IAppState {
    isLogIn: boolean,
    dash_token: string,
    auth: boolean
}

declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
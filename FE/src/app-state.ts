// import { Toggle } from "./models/index";

export interface IAppState {
    showLogIn: boolean;
    dash_token: string;
    auth: boolean;
    profile: IProfileState;
    loader: boolean;
}

export interface IWindow {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

export interface IProfileState {
    userDetails: IUserDetails;
}

export interface IUserDetails {
    fullName: string;
    email: string;
    number: string;
    aboutMe: string;
}

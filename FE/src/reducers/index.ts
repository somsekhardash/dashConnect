import { Reducer } from 'redux';
import { ActionTypes } from '../actions/action-types';
import { IAppState, IProfileState, IUserDetails } from '../app-state';

const initialUserDetailsState: IUserDetails = {
    fullName: '',
    email: '',
    number: '',
    aboutMe: ''
};

const initialProfileSate: IProfileState = {
    userDetails: initialUserDetailsState
};

const initialState: IAppState = {
    showLogIn: false,
    dash_token: '',
    auth: false,
    profile: initialProfileSate,
    loader: false
};

export const TheReducer: Reducer<IAppState> = (state: IAppState = initialState , action: any) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_COUNTER: {
            return {
                ...state,
                showLogIn: action.delta
            };
        }
        case ActionTypes.SET_LOGIN_TOKEN: {
            return {
                ...state,
                auth: true,
                dash_token: action.delta
            };
        }
        case ActionTypes.GET_PROFILE: {
            return {
                ...state,
                profile: {...action.delta.userDetails}
            };
        }
        case ActionTypes.TOGGLE_LOADER: {
            return {
                ...state,
                loader: action.delta
            };
        }
        default:
            return state;
    }
};

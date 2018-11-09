import { Reducer } from "redux";
import { ActionTypes } from "../actions/action-types";
import { ActionType } from "../actions";
import { AppState } from "../app-state";

const initialState : AppState = {
    isLogIn: false,
    dash_token: '',
    auth: false
}

export const TheReducer: Reducer<AppState> = (state: AppState = initialState , action: ActionType) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_COUNTER: {
            return {
                ...state,
                isLogIn: action.delta
            };
        }
        case ActionTypes.UPDATE_TOKEN: {
            return {
                ...state,
                auth: true,
                dash_token: action.delta+''
            };
        }
        default:
            return state
    }
}
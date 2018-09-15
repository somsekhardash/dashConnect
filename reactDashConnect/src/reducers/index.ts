import { Reducer } from "redux";
import { ActionTypes } from "../actions/action-types";
import { ActionType } from "../actions";

import { AppState } from "../app-state";

export const TheReducer: Reducer<AppState> = (state: AppState = { isLogIn: true }, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_COUNTER: {
            return {
                ...state,
                isLogIn: action.delta
            };

        }
        default:
            return state
    }
}
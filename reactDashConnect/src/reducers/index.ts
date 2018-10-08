import { Reducer } from "redux";
import { ActionTypes } from "../actions/action-types";
import { ActionType } from "../actions";
import { AppState } from "../app-state";

const initialState : AppState = {
    isLogIn: true
}

export const TheReducer: Reducer<AppState> = (state: AppState = initialState , action: ActionType) => {
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
import { Action } from "redux";
import { ActionTypes } from "./action-types";

export interface ActionType extends Action {
    type: ActionTypes,
    delta?: boolean
}

export const ToggleCounter = (delta: boolean): ActionType => ({
    type: ActionTypes.TOGGLE_COUNTER,
    delta: delta,
});

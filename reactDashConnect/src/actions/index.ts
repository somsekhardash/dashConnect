import { Action } from "redux";
import { ActionTypes } from "./action-types";
import { environmentSettings } from "./../../etc/config";
import axios from "axios";

export interface ActionType extends Action {
  type: ActionTypes;
  delta?: boolean;
}

export const ToggleCounter = (delta: boolean): ActionType => ({
  type: ActionTypes.TOGGLE_COUNTER,
  delta: delta
});

export const RegisterUser = (user: any): any => (dispatch: any): any => {
  return axios
    .post(`${environmentSettings.apiUrl}/api/user/register`, user)
    .then(function(response) {
      dispatch({
        type: ActionTypes.TOGGLE_COUNTER,
        delta: true
      });
    })
    .catch(function(error) {
      console.log(this.errorStatus);
      return {
        type: ActionTypes.TOGGLE_ERROR,
        delta: error
      };
    });
};
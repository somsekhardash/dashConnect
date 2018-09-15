import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ToggleCounter } from "../actions";
import { StartPage } from "../components/StartPage";

import { AppState } from "../app-state";

const mapStateToProps = (state: AppState) => ({
    isLogIn: state.isLogIn,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ToggleCounter }, dispatch);
export const StartPageC = connect(mapStateToProps, mapDispatchToProps)(StartPage);




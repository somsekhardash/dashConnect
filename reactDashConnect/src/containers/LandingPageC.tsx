import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCounter } from "../actions";
import { AppState } from "../app-state";

export class LandingPageC extends React.Component {
    render() {
        return <h1> Landing Page </h1>
    }
}

export const mapStateToProps = (store:AppState) => ({
    isLogIn: store.isLogIn
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ToggleCounter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageC);

import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCounter } from "../actions";
import { StartPage } from "../components/StartPage";
import { AppState } from "../app-state";

interface IStartPageCProps {
    isLogIn: boolean
}

interface IStartPageCDispatch {
    ToggleCounter(): void
}

export class StartPageC extends React.Component<IStartPageCProps, IStartPageCDispatch> {
    render() {
        return <div className="container">
            <StartPage {...this.props}/>
        </div>
    }
}

export const mapStateToProps = (store:AppState) => ({
    isLogIn: store.isLogIn
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ToggleCounter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StartPageC);

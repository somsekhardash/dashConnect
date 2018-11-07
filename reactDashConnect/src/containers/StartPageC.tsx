import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCounter,RegisterUser,LoginUser } from "../actions";
import { StartPage } from "../components/StartPage";
import { AppState } from "../app-state";

interface IStartPageCProps {
    isLogIn: boolean
}

interface IStartPageCDispatch {
    ToggleCounter(): void,
    RegisterUser(): void,
    LoginUser(): void
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

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ToggleCounter,RegisterUser,LoginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StartPageC);

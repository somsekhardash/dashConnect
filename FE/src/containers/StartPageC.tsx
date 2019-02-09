import * as React from 'react';
import { connect } from "react-redux";
import * as ActionCreator from "../actions";
import { StartPage } from "../components/StartPage";
import { IAppState } from "../app-state";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {History} from 'history';

interface IStartPageCState {
    isLogIn: boolean
}

interface IStartPageCDispatch {
    dispatchToggleCounter(): void,
    dispatchRegisterUser(): void,
    dispatchLoginUser(): void,
    redirectLanding(history: History): void
}

export interface IStartPageCProps extends IStartPageCState, IStartPageCDispatch {
    redirectLanding(history:History): void;  
    history: History
}

export class StartPageC extends React.Component<IStartPageCProps> {
    componentDidMount(){
        // this.props.redirectLanding(this.props.history);
    }

    render() {
        return <div className="container">
            <StartPage 
                {...this.props} 
            />
        </div>
    }
}

export const mapStateToProps = (store:IAppState):IStartPageCState => ({
    isLogIn: store.isLogIn
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchToggleCounter: (delta: boolean) => dispatch(ActionCreator.ToggleCounter(delta)),
        dispatchRegisterUser: (user: any) => dispatch(ActionCreator.RegisterUser(user)),
        dispatchLoginUser: (user: any, history: History) => dispatch(ActionCreator.LoginUser(user,history)),
        dispathRedirectLanding: (history: History) => dispatch(ActionCreator.redirectLanding(history))
    }
};

function mergeProps(propsFromState: IAppState, propsFromDispatch: any, ownProps: RouteComponentProps<void>) {
    return {
        ...propsFromState,
        ...propsFromDispatch,
        ...ownProps,
        history: ownProps.history,
        redirectLanding: propsFromDispatch.dispathRedirectLanding
    };
};

export default withRouter(connect<IStartPageCState, any, RouteComponentProps<void>>(mapStateToProps, mapDispatchToProps, mergeProps)(StartPageC));


import {History} from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as ActionCreator from '../actions';
import { IAppState } from '../app-state';
import { StartPage } from '../components/StartPage';

interface IStartPageCState {
    isLogIn: boolean;
}

interface IStartPageCDispatch {
    dispatchToggleCounter(): void;
    dispatchRegisterUser(): void;
    dispatchLoginUser(): void;
    redirectLanding(history: History): void;
}

export interface IStartPageCProps extends IStartPageCState, IStartPageCDispatch {
    history: History;
    redirectLanding(history: History): void;  
}

export class StartPageC extends React.Component<IStartPageCProps> {
    public render() {
        return (
        <div className='container'>
            <StartPage 
                {...this.props} 
            />
        </div>);
    }
}

const mapStateToProps = (store: IAppState): IStartPageCState => {
    return ({
        isLogIn: store.isLogIn
    });
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchToggleCounter: (delta: boolean) => dispatch(ActionCreator.ToggleCounter(delta)),
        dispatchRegisterUser: (user: any) => dispatch(ActionCreator.RegisterUser(user)),
        dispatchLoginUser: (user: any, history: History) => dispatch(ActionCreator.LoginUser(user, history)),
        dispathRedirectLanding: (history: History) => dispatch(ActionCreator.redirectLanding(history))
    };
};

const mergeProps = (propsFromState: IAppState, propsFromDispatch: any, ownProps: RouteComponentProps<void>) => ({
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps,
    history: ownProps.history,
    redirectLanding: propsFromDispatch.dispathRedirectLanding
});

const connectnow = connect<IStartPageCState, any, RouteComponentProps<void>>(mapStateToProps, mapDispatchToProps, mergeProps)(StartPageC);
export default withRouter(connectnow);

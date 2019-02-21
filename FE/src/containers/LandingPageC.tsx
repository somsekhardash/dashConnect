import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as ActionCreator from '../actions';
import { IAppState } from '../app-state';
import { Profile } from './../components/Profile/index';

interface IProfilePageState {
    isLogIn: boolean;
    dash_token: string;
}

interface IProfilePageDispatch {
    dispatchGetProfile(): void;
    dispatchSetProfile(): void;
}

export interface  IProfilePageProps extends IProfilePageState, IProfilePageDispatch {
    history: History;
    dispatchSetProfile(): void;
    dispatchGetProfile(): void;
}

export class LandingPageC extends React.Component<IProfilePageProps> {
    public render() {
        return (
            <div className='container'>
                <Profile {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState): IProfilePageState => {
    return ({
        isLogIn: store.isLogIn,
        dash_token: store.dash_token
    });
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchGetProfile: () => dispatch(ActionCreator.getProfile()),
        dispatchSetProfile: (user: any) => dispatch(ActionCreator.setProfile(user))
    };
};

const mergeProps = (propsFromState: IAppState, propsFromDispatch: any, ownProps: RouteComponentProps<void>) => {
    console.log(propsFromState);
    debugger;
    return {
        ...propsFromState,
        ...propsFromDispatch,
        ...ownProps,
        history: ownProps.history,
        getProfile: propsFromDispatch.dispatchGetProfile,
        setProfile: propsFromDispatch.dispatchSetProfile    
    };
};

const connectnow = connect<IProfilePageState, any, RouteComponentProps<void>>(mapStateToProps, mapDispatchToProps, mergeProps)(LandingPageC);
export default withRouter(connectnow);

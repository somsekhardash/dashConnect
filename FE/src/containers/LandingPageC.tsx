import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import * as ActionCreator from '../actions';
import { IAppState, IProfileState } from '../app-state';
import { Profile } from './../components/Profile/index';

interface IProfilePageState {
    dash_token: string;
    profile: IProfileState;
    loader: boolean;
}

interface IProfilePageDispatch {
    dispatchGetProfile(): void;
    dispatchSetProfile(): void;
}

interface  IProfilePageProps extends IProfilePageState, IProfilePageDispatch {
    dispatchSetProfile(): void;
    dispatchGetProfile(): void;
}

class LandingPageC extends React.Component<IProfilePageProps> {
    public constructor(props: IProfilePageProps) {
        super(props);
        this.props.dispatchGetProfile();
    }
    public render() {
        return (
            <div className='container'>
                {this.props.loader && <h1> ........loading</h1>}
                {!this.props.loader && <Profile {...this.props} />}
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState): IProfilePageState => {
    return ({
        dash_token: store.dash_token,
        profile: store.profile,
        loader: store.loader
    });
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchGetProfile: () => dispatch(ActionCreator.getProfile()),
        dispatchSetProfile: (user: any) => dispatch(ActionCreator.setProfile(user))
    };
};

const mergeProps = (propsFromState: IAppState, propsFromDispatch: any, ownProps: RouteComponentProps<void>) => {
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

import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCounter,getProfile, setProfile } from "../actions";
import { IAppState } from "../app-state";
import { Profile } from "./../components/Profile/index";
import { Dispatch } from 'redux';

export class LandingPageC extends React.Component {
    render() {
        return <Profile {...this.props}></Profile>
    }
}

export const mapStateToProps = (store:IAppState) => ({
    isLogIn: store.isLogIn
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ToggleCounter,getProfile, setProfile }, dispatch);

// export function mapDispatchToProps(dispatch: Dispatch<IAppState>): IDispatchProps {
//     return {
//         dispatchGetProfile: () =>
//             dispatch(ActionCreators.onGetAssetTrend(days))
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageC);

import * as React from 'react';
// import { StartPage } from "./../StartPage/index";
import { StartPageC } from "./../../containers/StartPageC";
import { Provider } from "react-redux";
import AppStore from "./../../store/index";

export class SetupPage extends React.Component<{}, {}> {
    render() {
        return <Provider store={AppStore}>
            <StartPageC></StartPageC>
        </Provider>
    }
}   
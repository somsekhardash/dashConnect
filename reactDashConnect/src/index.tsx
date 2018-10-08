import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppStore from './store';
import StartPageC from './containers/StartPageC';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPageC } from './containers/LandingPageC';

const Index = () => {
    return <Provider store={AppStore}>
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={StartPageC} />
                    <Route path="/landing" component={LandingPageC} />
                </React.Fragment>  
            </Router>
        </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
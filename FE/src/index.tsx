import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppStore from './store';
import StartPageC from './containers/StartPageC';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPageC } from './containers/LandingPageC';

const routes = [
    {
      path: "/",
      exact : true,
      component: StartPageC
    },
    {
      path: "/landing",
      component: LandingPageC
    }
];

const renderComponet = ( props: any, Component: any ) => {
    return <Component {...props}/>
}

const Index = () => {
    return <Provider store={AppStore}>
            <Router>
                <div className='router-parent'>
                    {routes.map(({component,path,exact},index)=> {
                        return  <Route
                                    {...{ path, exact}}
                                    key = {index}
                                    render={props => (
                                        renderComponet(props, component)
                                    )}
                                />
                    })}  
                </div>
            </Router>      
        </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

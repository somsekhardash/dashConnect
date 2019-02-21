import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPageC } from './containers/LandingPageC';
import StartPageC from './containers/StartPageC';
import AppStore from './store';

const routes = [
    {
      path: '/',
      exact : true,
      component: StartPageC
    },
    {
      path: '/landing',
      component: LandingPageC
    }
];

const renderComponet = (props: any, Component: any) => {
    return <Component {...props}/>;
};

const getRoute = () => {
    return (routes.map(({component, path, exact}, index) => {
        return (
            <Route
                    {...{ path, exact}}
                    key={index}
                    // tslint:disable-next-line:jsx-no-multiline-js
                    render={ props => (
                        renderComponet(props, component)
                    )}
                />
            );
    })); 
};

const Index = () => {
    return ( 
        <Provider store={AppStore}>
            <Router>
                <div className='router-parent'>
                    {getRoute()}
                </div>
            </Router>      
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('index'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import AppStore from './store';

class App extends React.Component {

    public renderComponet = (props: any, Component: any) => {
        return <Component {...props}/>;
    }
    
    public getRoute = () => {
        return (routes.map(({component, path, exact}, index) => {
            return (
                <Route
                        {...{ path, exact}}
                        key={index}
                        // tslint:disable-next-line:jsx-no-multiline-js
                        render={ props => (
                            this.renderComponet(props, component)
                        )}
                    />
                );
        })); 
    }

    public render() {
        return (
            <div className='container-parent'>
                <Provider store={AppStore}>
                    <Router>
                        <div className='router-parent'>
                            {this.getRoute()}
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('index'));

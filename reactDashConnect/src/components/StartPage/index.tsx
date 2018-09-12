import * as React from 'react';
import { LogIn } from "./../LogIn/index";
import { SignUp } from "./../SignUp/index";
import { LoginPanel } from "./../LoginPanel/index";
import './index.scss';

export class StartPage extends React.Component<{}, {}> {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <LoginPanel></LoginPanel>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <LogIn></LogIn>
                                    <SignUp></SignUp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


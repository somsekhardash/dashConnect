import * as React from 'react';
import { LogIn } from "./../LogIn/index";
import { SignUp } from "./../SignUp/index";
import { LoginPanel } from "./../LoginPanel/index";
import './index.scss';

interface StartPageProps {
    isLogIn: boolean,
    ToggleCounter(event: any): void,
}

export class StartPage extends React.Component<StartPageProps, {}> {
    constructor(props: any) {
        super(props);
    }

    toggleLogin(isLogIn: boolean) {
        this.props.ToggleCounter(isLogIn);
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <LoginPanel toggleLogin={this.toggleLogin.bind(this)} isLogIn={this.props.isLogIn}></LoginPanel>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    {this.props.isLogIn && <LogIn></LogIn>}
                                    {!this.props.isLogIn && <SignUp></SignUp>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


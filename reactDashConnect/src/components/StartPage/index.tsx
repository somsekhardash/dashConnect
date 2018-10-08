import * as React from 'react';
import { LogIn, ILogInProps, ILogInState } from "./../LogIn/index";
import { SignUp, ISignUp } from "./../SignUp/index";
import { LoginPanel } from "./../LoginPanel/index";
import './index.scss';

export interface StartPageProps {
    isLogIn?: boolean,
    ToggleCounter?(event: any): void,
    RegisterUser?(event: any): void
}

export class StartPage extends React.Component<StartPageProps, {}> {
    constructor(props: any) {
        super(props);
        this.fireLogin = this.fireLogin.bind(this);
        this.fireRegister = this.fireRegister.bind(this);
    }

    toggleLogin(isLogIn: boolean) {
        this.props.ToggleCounter(isLogIn);
    }

    fireLogin(obj:ILogInState){
        console.log(obj);
    }

    fireRegister(obj: ISignUp){
        this.props.RegisterUser(obj);
    }

    render() {
        return <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <LoginPanel toggleLogin={this.toggleLogin.bind(this)} isLogIn={this.props.isLogIn}></LoginPanel>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    {this.props.isLogIn && <LogIn fireLogin={this.fireLogin}></LogIn>}
                                    {!this.props.isLogIn && <SignUp fireRegister={this.fireRegister}></SignUp>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}


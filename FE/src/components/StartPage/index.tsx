import {History} from 'history';
import * as React from 'react';
import { ILogInProps, ILogInState, LogIn } from './../LogIn/index';
import { LoginPanel } from './../LoginPanel/index';
import { ISignUp, SignUp } from './../SignUp/index';
import './index.scss';

export interface IStartPageProps {
    isLogIn: boolean;
    history?: History;
    dispatchToggleCounter(event: any): void;
    dispatchRegisterUser(event: any): void;
    dispatchLoginUser(event: any, history: History): void;
}

export class StartPage extends React.Component<IStartPageProps, {}> {
    constructor(props: any) {
        super(props);
        this.fireLogin = this.fireLogin.bind(this);
        this.fireRegister = this.fireRegister.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
    }

    public render() {
        return (
            <div className='row'>
                <div className='col-md-6 col-md-offset-3'>
                    <div className='panel panel-login'>
                        <LoginPanel toggleLogin={this.toggleLogin} isLogIn={this.props.isLogIn} />
                        <div className='panel-body'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    {this.props.isLogIn && <LogIn fireLogin={this.fireLogin} />}
                                    {!this.props.isLogIn && <SignUp fireRegister={this.fireRegister} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private toggleLogin(isLogIn: boolean) {
        this.props.dispatchToggleCounter(isLogIn);
    }

    private fireLogin(obj: ILogInState) {
        this.props.dispatchLoginUser(obj, this.props.history);
    }

    private fireRegister(obj: ISignUp) {
        this.props.dispatchRegisterUser(obj);
    }
}

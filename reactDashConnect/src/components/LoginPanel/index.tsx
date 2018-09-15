import * as React from 'react';

interface LoginPanelProps {
    toggleLogin(event: any): void,
    isLogIn: boolean
}


export class LoginPanel extends React.Component<LoginPanelProps, any> {
    public handleChange(event: any, val: boolean): void {
        this.props.toggleLogin(val);
    }

    render() {
        return <div className="panel-heading">
            <div className="row">
                <div className="col-xs-6">
                    <a href="#"
                        className={`${this.props.isLogIn ? 'active' : ''}`}
                        id="login-form-link"
                        onClick={e => this.handleChange(e, true)}>Login</a>
                </div>
                <div className="col-xs-6">
                    <a href="#"
                        id="register-form-link"
                        className={`${this.props.isLogIn ? '' : 'active'}`}
                        onClick={e => this.handleChange(e, false)}>Register</a>
                </div>
            </div>
        </div>
    }
}
import * as React from 'react';

interface ILoginPanelProps {
    showLogIn: boolean;
    toggleLogin(event: any): void;
}

export class LoginPanel extends React.Component<ILoginPanelProps, {}> {
    public handleChange(event: any, val: boolean): void {
        this.props.toggleLogin(val);
    }

    public render() {
        return (
        <div className='panel-heading'>
            <div className='row'>
                <div className='col-xs-6'>
                    <a href='#'
                        className={`${this.props.showLogIn ? 'active' : ''}`}
                        id='login-form-link'
                        onClick={e => this.handleChange(e, true)}>Login</a>
                </div>
                <div className='col-xs-6'>
                    <a href='#'
                        id='register-form-link'
                        className={`${this.props.showLogIn ? '' : 'active'}`}
                        onClick={e => this.handleChange(e, false)}>Register</a>
                </div>
            </div>
        </div>
        );
    }
}

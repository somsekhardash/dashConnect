import * as React from 'react';

export class LoginPanel extends React.Component<{}, {}> {
    render() {
        return <div className="panel-heading">
            <div className="row">
                <div className="col-xs-6">
                    <a href="#" className="active" id="login-form-link">Login</a>
                </div>
                <div className="col-xs-6">
                    <a href="#" id="register-form-link">Register</a>
                </div>
            </div>
            <hr />
        </div>
    }
}
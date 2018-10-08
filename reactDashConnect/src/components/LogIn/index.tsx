import * as React from "react";

export interface ILogInState {
  username: String;
  password: String;
}

export interface ILogInProps {
  fireLogin(obj:ILogInState): any;
}

export class LogIn extends React.Component<ILogInProps, ILogInState> {
  constructor(props: Readonly<ILogInProps>) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.fireLogin = this.fireLogin.bind(this);
  }

  onInputChange(event: any) {
    event.preventDefault();
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    } as ILogInState);
  }

  fireLogin(){
    this.props.fireLogin({...this.state})
  }

  render() {
    return (
      <div id="login-form">
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            tabIndex={1}
            onChange={this.onInputChange}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            tabIndex={2}
            onChange={this.onInputChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <input
                type="submit"
                name="login-submit"
                id="login-submit"
                tabIndex={4}
                className="form-control btn btn-login"
                onClick={this.fireLogin}
                value="Log In"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

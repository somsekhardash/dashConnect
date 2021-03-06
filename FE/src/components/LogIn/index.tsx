import * as React from 'react';

export interface ILogInState {
  email: string;
  password: string;
}

export interface ILogInProps {
  fireLogin(obj: ILogInState): any;
}

export class LogIn extends React.Component<ILogInProps, ILogInState> {
  constructor(props: Readonly<ILogInProps>) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.fireLogin = this.fireLogin.bind(this);
  }

  public onInputChange = (event: any) => {
    event.preventDefault();
    // tslint:disable-next-line:no-object-literal-type-assertion
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    } as ILogInState);
  }

  public fireLogin = () => {
    this.props.fireLogin({...this.state});
  }

  public render() {
    return (
      <div id='login-form'>
        <div className='form-group'>
          <input
            type='text'
            name='email'
            id='email'
            tabIndex={1}
            onChange={this.onInputChange}
            className='form-control'
            placeholder='EmailID'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            id='password'
            tabIndex={2}
            onChange={this.onInputChange}
            className='form-control'
            placeholder='Password'
          />
        </div>
        <div className='form-group'>
          <div className='row'>
            <div className='col-sm-6 col-sm-offset-3'>
              <input
                type='submit'
                name='login-submit'
                id='login-submit'
                tabIndex={4}
                className='form-control btn btn-login'
                onClick={this.fireLogin}
                value='Log In'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

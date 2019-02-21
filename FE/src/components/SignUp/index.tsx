import * as React from 'react';

export interface ISignUp {
    name: string;
    password: string;
    email: string;
}

export interface ISignUpProps {
    fireRegister(event: ISignUp): void;
}

export class SignUp extends React.Component<ISignUpProps, ISignUp> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.makeRegister = this.makeRegister.bind(this);
    }

    public onInputChange(event: any) {
        event.preventDefault();
        // tslint:disable-next-line:no-object-literal-type-assertion
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        } as ISignUp);
    }

    public makeRegister() {
        this.props.fireRegister({...this.state});
    }

    public render() {
        return (
            <div id='register-form'>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    id='name'
                    tabIndex={1}
                    className='form-control'
                    placeholder='Username'
                    onChange={this.onInputChange} />
            </div>
            <div className='form-group'>
                <input
                    type='email'
                    name='email'
                    id='email'
                    tabIndex={1}
                    className='form-control'
                    placeholder='Email Address'
                    onChange={this.onInputChange} />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    id='password'
                    tabIndex={2}
                    onChange={this.onInputChange}
                    className='form-control'
                    placeholder='Password' />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    tabIndex={2}
                    className='form-control'
                    placeholder='Confirm Password' />
            </div>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-sm-6 col-sm-offset-3'>
                        <button
                            name='register-submit'
                            id='register-submit'
                            tabIndex={4}
                            className='form-control btn btn-register'
                            onClick={this.makeRegister}>
                            Register
                        </button>    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

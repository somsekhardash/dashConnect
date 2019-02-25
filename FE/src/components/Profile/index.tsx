import * as React from 'react';

export interface IProfileState {
  name: string;
  number: number;
  email: string;
  gender: string;
}

export interface IProfileProps {
  showLogIn?: boolean;
  dispatchGetProfile(): void;
  dispatchSetProfile(user: any): void;
}

export class Profile extends React.Component<IProfileProps, IProfileState> {
  
  constructor(props: Readonly<IProfileProps>) {
    super(props);
    this.setProfile = this.setProfile.bind(this);
  }

  public setProfile() {
    this.props.dispatchSetProfile({
      name: 'som'
    });
  }

  public render() {
    return (
      <div>
     <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    id='name'
                    tabIndex={1}
                    className='form-control'
                    placeholder='full name'
                     />
            </div>
            <div className='form-group'>
                <input
                    type='email'
                    name='email'
                    id='email'
                    tabIndex={1}
                    className='form-control'
                    placeholder='Email Address'
                     />
            </div>
            <div className='form-group'>
                <input
                    type='mobile'
                    name='mobile'
                    id='mobile'
                    tabIndex={2}
                    className='form-control'
                    placeholder='mobile' />
            </div>
            <div className='form-group'>
                <input
                    type='aboutMe'
                    name='aboutMe'
                    id='aboutMe'
                    tabIndex={2}
                    className='form-control'
                    placeholder='aboutMe' />
            </div>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-sm-6 col-sm-offset-3'>
                        <button
                            name='register-submit'
                            id='register-submit'
                            tabIndex={4}
                            className='form-control btn btn-register'
                            onClick={this.setProfile}>
                            Register
                        </button>    
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

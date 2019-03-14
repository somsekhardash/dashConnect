import * as React from 'react';
import { IProfile } from './../../models/index';

export interface IProfileProps {
  showLogIn?: boolean;
  dispatchGetProfile(): void;
  dispatchSetProfile(user: any): void;
}

export class Profile extends React.Component<IProfileProps, IProfile> {
  constructor(props: Readonly<IProfileProps>) {
    super(props);
    this.state = {
      fullname: '',
      workemail: '',
      aboutme: '',
      mobilenumber: ''
    };
    this.setProfile = this.setProfile.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.setProfile = this.setProfile.bind(this);
  }

  public UNSAFE_componentWillReceiveProps(newprops: any) {
    if (newprops.profile.fullname !== this.state.fullname) {
      this.setState({
        fullname: newprops.profile.fullname,
        workemail: newprops.profile.workemail,
        aboutme: newprops.profile.aboutme,
        mobilenumber: newprops.profile.mobilenumber
      });
    }
  }

  public setProfile() {
    this.props.dispatchSetProfile({...this.state});
  }

  public inputChange(event: any) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  public render() {
    return (
      <div>
     <div className='form-group'>
                <input
                    type='text'
                    name='fullname'
                    id='fullname'
                    tabIndex={1}
                    className='form-control'
                    placeholder='full name'
                    value={this.state.fullname}
                    onChange={this.inputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='email'
                    name='workemail'
                    id='workemail'
                    tabIndex={1}
                    className='form-control'
                    placeholder='Email Address'
                    value={this.state.workemail}
                    onChange={this.inputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='mobile'
                    name='mobilenumber'
                    id='mobilenumber'
                    tabIndex={2}
                    className='form-control'
                    placeholder='mobilenumber'
                    value={this.state.mobilenumber} 
                    onChange={this.inputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='aboutme'
                    id='aboutme'
                    tabIndex={2}
                    className='form-control'
                    placeholder='aboutme' 
                    value={this.state.aboutme}
                    onChange={this.inputChange}
                />
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

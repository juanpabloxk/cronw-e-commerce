import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-bottom/custom-bottom.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.prevendDefault();
    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;
    console.log(event);
    console.log({name, value});
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='E-mail'
            required
          />
          <FormInput 
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
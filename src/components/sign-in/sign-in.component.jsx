import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss'
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({ ...userCredentials, [name]: value })
  }

  return(
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='E-mail'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  )
  
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null,mapDispatchToProps)(SignIn);

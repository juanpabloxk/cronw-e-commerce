import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      photoURL: '',
      confirmPassword: ''
    })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords dont match!');
      return;
    }
    signUpStart({ email, displayName, password })
  }

  const handleChange = event => {
    const {name, value} = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }
  
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with e-mail and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          label='Displayname'
          handleChange={handleChange}
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email}
          label='E-mail'
          handleChange={handleChange}
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
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);

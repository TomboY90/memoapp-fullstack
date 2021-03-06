import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

// Actions
import { signinRequest, signupRequest } from 'redux/auth/actions';
import styled from 'styled-components';


const Login = () => {
  const dispatch = useDispatch();

  const [ tab, setTab ] = useState('signin');
  const [ form, setForm ] = useState({
    name: "",
    password: "",
  });

  const [ newForm, setNewForm ] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupFormChange = e => {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignin = () => {
    dispatch(signinRequest(form))
  }

  const handleSignup = () => {
    dispatch(signupRequest(newForm))
  }

  return (
    <Container className={ tab === 'signup' ? 'right-panel-active' : null }>
      {/* for sign-up */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <span>use your nickname for registration</span>
          <input type="text" placeholder="Name" name="name" value={newForm.name} onChange={e => handleSignupFormChange(e)} />
          <input type="password" placeholder="Password" name="password" value={newForm.password} onChange={e => handleSignupFormChange(e)} />
          <button type="button" onClick={handleSignup}>Sign Up</button>
        </form>
      </div>

      {/* for sign-in */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <input type="text" placeholder="Name" name="name" value={form.name} onChange={e => handleChange(e)} />
          <input type="password" placeholder="Password" name="password" value={form.password} onChange={e => handleChange(e)} />
          <button type="button" onClick={handleSignin}>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setTab('signin')} >Sign In</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={() => setTab('signup')}>Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Login);

const Container = styled.div`
  background-color: #fff;
	border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
  min-height: 480px;
  margin: 10% auto;

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  button {
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
  }

  form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  &.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }
    
    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  &.right-panel-active .overlay-container{
    transform: translateX(-100%);
  }

  .overlay {
    background: #FF416C;
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
    background: linear-gradient(to right, #FF4B2B, #FF416C);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  &.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-9%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(-9%);
  }

  .overlay-right {
    right: 0;
    transform: translateX(9%);
  }

  &.right-panel-active .overlay-right {
    transform: translateX(9%);
  }
`
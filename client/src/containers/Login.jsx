import React, { useState } from 'react';
import { WhiteBox } from 'components/WriteMemo';
import { AuthInput, SaveButton } from 'components/Shared';
import { connect, useDispatch } from 'react-redux';

// Actions
import { loginRequest } from 'redux/auth/actions';


const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    password: "",
  });  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(loginRequest(form))
  }

  return (
    <WhiteBox>
      <AuthInput name="name" value={form.name} onChange={handleChange} />
      <AuthInput name="password" type="password" value={form.password} onChange={handleChange} />
      <SaveButton onClick={handleLogin} />
    </WhiteBox>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Login);
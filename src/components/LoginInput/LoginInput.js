import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField/TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';

function LoginInput() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (email, password) => {
    dispatch(loginAction(email, password));
    navigate('/');
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        const { email, password } = values;
        console.log(values);
        login(email, password);
        resetForm();
      }}
    >
      {(props) => (
        <Form>
          <TextField
            label="Email "
            name="email"
            type="email"
            datatitle="Email"
            title="Email"
          />
          <TextField
            label="Password "
            name="password"
            type="password"
            datatitle="Password"
          />
          <Button disable={props.values.email && props.values.password}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginInput;

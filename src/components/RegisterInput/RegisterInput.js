import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField/TextField';
import '../TextField/textField.css';
import * as Yup from 'yup';
import { registerAction } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';

function RegisterInput() {
  const validate = Yup.object({
    name: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (name, email, password) => {
    dispatch(registerAction(name, email, password));
    navigate('/register');
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        const { name, email, password } = values;
        register(name, email, password);
        resetForm();
      }}
    >
      <Form>
        <TextField label="Name " name="name" type="name" datatitle="Name" />
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
        <Button>Register</Button>
      </Form>
    </Formik>
  );
}

export default RegisterInput;

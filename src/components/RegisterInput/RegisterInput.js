import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField/TextField';
import * as Yup from 'yup';
import '../TextField/textField.css';

function RegisterInput() {
  const validate = Yup.object({
    name: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
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
      </Form>
    </Formik>
  );
}

export default RegisterInput;

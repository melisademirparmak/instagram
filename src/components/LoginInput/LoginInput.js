import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../TextField/TextField';
import * as Yup from 'yup';

function LoginInput() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
    >
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
      </Form>
    </Formik>
  );
}

export default LoginInput;

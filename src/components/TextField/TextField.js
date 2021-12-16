import React from 'react';
import { useField, ErrorMessage } from 'formik';
import '../TextField/textField.css';

export const TextField = ({ label, datatitle, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <div className="field">
        <input {...field} {...props} autoComplete="off" id={field.name} />
        <label htmlFor={datatitle} data-title={datatitle} title={datatitle} />
        <ErrorMessage
          component="div"
          name={field.name}
          className="form__error"
        />
      </div>
    </>
  );
};

/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';

function useFormik({
  initialValues,
  validate,
}) {
  const [touched, setTouchedFields] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const chave = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [chave]: value,
    });
  }

  function handleBlur(event) {
    const fildName = event.target.getAttribute('name');
    setTouchedFields({
      ...values,
      [fildName]: true,
    });
  }

  function validateValues(variable) {
    setErrors(validate(variable));
  }

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
    clearForm,
  };
}

export default useFormik;

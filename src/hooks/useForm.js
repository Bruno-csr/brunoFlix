/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    errors,
    setErrors,
    handleChange,
    clearForm,
  };
}

export default useForm;

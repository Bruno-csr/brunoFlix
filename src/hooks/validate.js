// import useForm from './useForm';

function validate(values) {
  const errors = {};

  if (!values.userEmail.includes('@')) {
    errors.userEmail = 'plis, insert a valid email';
  }
  return errors;
}

// const errors = {
//   userEmail: 'plis, insert a valid email',
//   userPassword: 'plis, insert a valid password',
// };

export default validate;

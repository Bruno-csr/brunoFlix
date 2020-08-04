// /* eslint-disable linebreak-style */
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PageDefault from '../../../components/PageDefault';
// import FormField from '../../../components/FormField';
// import { Span } from '../../../components/FormField/styles';
// import Button from '../../../components/Button';
// import useFormik from '../../../hooks/useFormik';
// import usuarioRepository from '../../../repositores/usuarios';
// import usuarios from '../../../repositores/usuarios';

// function Loguin() {
//   const [usuarios, setUsuarios] = useState([]);

//   // const { handleChange, values, clearForm } = useForm(valoresIniciais);
//   const formik = useFormik({
//     initialValues: {
//       usuario: '',
//       senha: '',
//     },
//     validate: function(values){
//       const errors = {};

//       // validando usuario categoria
//       if (values.usuario !== '--Bruno') {
//         errors.usuario = 'Entre com o usuário Admin';
//       }

//       // validando senha
//       if (values.senha !== '--Passowrd') {
//         errors.senha = 'Entre com a senha Admin';
//       }

//       return errors;
//     },
//   });

//   useEffect(() => {
//     const URL_TOP = window.location.hostname.includes('localhost')
//       ? 'http://localhost:8080/usuarios'
//       : 'https://bruno-flix.herokuapp.com/usuarios';

//     fetch(URL_TOP)
//       .then(async (result) => {
//         const resposta = await result.json();
//         setUsuarios([
//           ...resposta,
//         ]);
//       });
//   }, []);

//   console.log(usuarios);
//   return (
//     <PageDefault>
//       <h1>
//         Tela de Loguin
//       </h1>

//       <form onSubmit={function handleChange(event) {
//         event.preventDefault();
//         if (formik.values.usuario === '') {
//           alert('Digite o usuário Admin');
//         } else if (formik.values.senha === '') {
//           alert('senha incorreta');
//           // formik.clearForm();
//           console.log(usuarios);
//         }}
//     }
//       >
//         <FormField
//           label="Nome de usuário"
//           name="usuario"
//           value={formik.values.usuario}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.usuario && <Span className="Span_Error">{formik.errors.usuario}</Span>}

//         <FormField
//           label="Senha"
//           name="senha"
//           value={formik.values.senha}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.senha && <Span className="Span_Error">{formik.errors.senha}</Span>}

//         <Button type="submit">
//           Entrar
//         </Button>
//       </form>

//       <Link to="/">
//         Ir para home
//       </Link>
//     </PageDefault>
//   );
// }

// export default Loguin;

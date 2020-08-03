/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
// import useForm from '../../../hooks/useForm';
// import validate from '../../../hooks/validate';
import FormField from '../../../components/FormField/index';
import { Span } from '../../../components/FormField/styles';
import Button from '../../../components/Button';
import videosRepository from '../../../repositores/videos';
import categoriasRepository from '../../../repositores/categorias';

function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateValues(values);
  },[values])

  function handleChange(event) {
    const chave = event.target.getAttribute('name');
    const { value } = event.target
    setValues({
      ...values,
      [chave]: value,
    });
  }

  function handleBlur(event) {
    const fildName = event.target.getAttribute('name');
    console.log(fildName);
    setValues({
      ...values,
      [fildName]: true,
    })
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

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

function CadastroVideo() {
  const formik = useFormik({
    initialValues: {
      titulo: '',
      url: '',
      categoria: '',
    },
    validate: function (values) {
      const errors = {};
      let igual = false;

      // validando categoria
      categoryTitles.forEach((titulo) => {
        if (values.categoria === titulo) {
          igual = true;
        }
      });
      if (!igual) {
        errors.categoria = 'Essa categoria não existe';
      }

      // validando Url
      if (!values.url.includes('https://www.youtube.com/')) {
        errors.url = 'Digite uma URL do YouTube';
      }

      // validando Título
      if (values.titulo.length < 1) {
        errors.titulo = 'O título precisa ter pelo menos 1 caracteres';
      }

      return errors;
      }
  });

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  // console.log(`cat. video = ${categorias}`);

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(formik.values)

        //validateValues(form.values)
        // eslint-disable-next-line max-len
        // const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        // videosRepository.create({
        //   titulo: values.titulo,
        //   url: values.url,
        //   categoriaId: categoriaEscolhida.id,
        // })
        //   .then(() => {
        //     history.push('/');
        //   });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.titulo}
          />
        {formik.touched.titulo && formik.errors.titulo && <Span className="Span_Error">{formik.errors.titulo}</Span>}

        <FormField
          label="URL"
          name="url"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        {formik.errors.url && <Span className="Span_Error">{formik.errors.url}</Span>}

        <FormField
          label="Categoria"
          name="categoria"
          suggestions={categoryTitles}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.categoria}
        />
        {formik.touched.categoria && formik.errors.categoria && <Span className="Span_Error">{formik.errors.categoria}</Span>}

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/Categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;

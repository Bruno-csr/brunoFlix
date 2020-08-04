/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useFormik from '../../../hooks/useFormik';
import FormField from '../../../components/FormField/index';
import { Span } from '../../../components/FormField/styles';
import Button from '../../../components/Button';
import videosRepository from '../../../repositores/videos';
import categoriasRepository from '../../../repositores/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const formik = useFormik({
    initialValues: {
      titulo: '',
      url: '',
      categoria: '',
      senha: '',
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
        errors.categoria = 'Selelcione uma categoria existente';
      }

      // validando Url
      if (!values.url.includes('https://www.youtube.com/')) {
        errors.url = 'Digite uma URL do YouTube';
      }

      // validando Título
      if (values.titulo.length < 1) {
        errors.titulo = 'Digite um título com pelo menos 1 caractere';
      }

      return errors;
    },
  });

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

        if (formik.values.senha === '--BrunoAdd') {
          // eslint-disable-next-line max-len
          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === formik.values.categoria);

          // Tratamento de erro :(
          if (categoriaEscolhida === undefined) {
            alert('insira uma categoria válida');
          } else if (formik.values.url === '') {
            alert('insira algum URL');
          } else if (formik.values.titulo === '') {
            alert('insira algum Título para o vídeo');
          } else {
            videosRepository.create({
              titulo: formik.values.titulo,
              url: formik.values.url,
              categoriaId: categoriaEscolhida.id,
            })
              .then(() => {
                history.push('/');
              });
          }
        } else {
          alert('A senha está incorreta e não é possivel adicionar um vídeo');
        }
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.titulo}
        />
        {formik.errors.titulo && <Span className="Span_Error">{formik.errors.titulo}</Span>}

        <FormField
          label="URL"
          name="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        {formik.errors.categoria && <Span className="Span_Error">{formik.errors.categoria}</Span>}

        <FormField
          label="Senha para cadastrar um vídeo"
          name="senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.senha}
        />

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

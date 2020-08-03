/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Span } from '../../../components/FormField/styles';
import Button from '../../../components/Button';
import useFormik from '../../../hooks/useFormik';
import categoriasRepository from '../../../repositores/categorias';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  // const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const formik = useFormik({
    valoresIniciais: {
      nome: '',
      descricao: '',
      cor: '',
    },
    validate: '',
  });

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://bruno-flix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (result) => {
        const resposta = await result.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formik.values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          formik.values,
        ]);
        formik.clearForm();

        categoriasRepository.create({
          titulo: formik.values.nome,
          cor: formik.values.cor,
        })
          .then(() => {
            console.log('Cadastrado com sucesso!');
          });
      }}
      >
        <FormField
          label="Nome da categoria"
          name="nome"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
        {formik.errors.nome && <Span className="Span_Error">{formik.errors.nome}</Span>}

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={formik.values.descricao}
          onChange={formik.handleChange}
        />
        {formik.errors.descricao && <Span className="Span_Error">{formik.errors.descricao}</Span>}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={formik.values.cor}
          onChange={formik.handleChange}
        />
        {formik.errors.cor && <Span className="Span_Error">{formik.errors.cor}</Span>}

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

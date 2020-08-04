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
    initialValues: {
      nome: '',
      descricao: '',
      cor: '',
      senha: '',
    },
    validate: function (values) {
      const errors = {};

      // validando nome categoria
      if (values.nome.length < 1) {
        errors.nome = 'Digite um nome com pelo menos 1 caractere';
      }

      // validando Descrição
      if (values.descricao === '') {
        errors.descricao = 'Faça um resumo da categoria (Não Obrigatório)';
      }

      // validando cor
      if (values.cor === '') {
        errors.cor = 'Selecione uma cor';
      }

      return errors;
    },
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

      <form onSubmit={function handleChange(event) {
        event.preventDefault();
        if (formik.values.senha === '--BrunoAdd') {
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
        } else {
          alert('A senha está incorreta e não é possivel adicionar uma categoria');
        }
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

        <FormField
          label="Senha para cadastrar uma categoria"
          name="senha"
          suggestions={['']}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.senha}
        />

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

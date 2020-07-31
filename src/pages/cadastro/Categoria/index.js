import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    Descrição: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor){
    //chave: nome
    setValues({
      ...values,
      [chave]: valor //nome: 'valor'
    })
  }

  function handleChange(event){
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'), 
      event.target.value
    );
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event){
          event.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valoresIniciais)
      }}>

        <FormField 
          label='Nome da categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange = {handleChange}
        />

        <FormField
          label='Descrição'
          type='??'
          name='Descrição'
          value={values.nome}
          onChange = {handleChange}
        />

        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={values.nome}
          onChange = {handleChange}
        />


        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value = {values.Descrição}
              name='desgricao'
              onChange = {handleChange}
            />
          </label>
        </div> */}

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value = {values.cor}
              name='cor'
              onChange = {handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>
            
      <ul>
        {categorias.map((categoria, indice) =>{
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to='/'>
        Ir para home
      </Link>
    </PageDefault>
  )
      }

export default CadastroCategoria;
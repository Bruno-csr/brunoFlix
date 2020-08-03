function validate(categorias, values) {
  const errors = {};
  const categoryTitles = categorias.map(({ titulo }) => titulo);
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

export default validate;

function trataErroVideo(categoriaEscolhida, values, videosRepository, history) {
  console.log(values);
  if (categoriaEscolhida === undefined) {
    alert('insira uma categoria válida');
  } else if (values.url === '') {
    alert('insira algum URL');
  } else if (values.titulo === '') {
    alert('insira algum Título para o vídeo');
  } else {
    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        history.push('/');
      });
  }
}

export default trataErroVideo;

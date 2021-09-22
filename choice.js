let codigoFinal = []

function clicar(c) {
    codigoFinal.push(c);
    localStorage.setItem('codigoFinal', codigoFinal);
}

function pegarCodigoFinal() {
  return localStorage.getItem('codigoFinal');
  // console.log(localStorage.getItem('codigoFinal'));
}
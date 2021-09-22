let codigoFinal = ['a','b','c']

function clicar(c) {
    codigoFinal.push(c);
    localStorage.setItem('codigoFinal', codigoFinal);
}

function pegarCodigoFinal() {
  return localStorage.getItem('codigoFinal', codigoFinal);
  // console.log(localStorage.getItem('codigoFinal'));
}
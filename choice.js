function clicar(c) {
  let codigoFinal = pegarCodigoFinal();
  codigoFinal.push(c);
  console.log(codigoFinal);
  localStorage.setItem('codigoFinal', JSON.stringify(codigoFinal));
}

function excluir() {
  let codigoFinal = pegarCodigoFinal();
  codigoFinal.pop();
  console.log(codigoFinal);
  localStorage.setItem('codigoFinal', JSON.stringify(codigoFinal));
}

function pegarCodigoFinal() {
  let atual = localStorage.getItem('codigoFinal');

  if (!atual) {
    console.log('Chegou aqui!');
    return [];
  }

  try {
    return JSON.parse(atual)
  } catch {
    return [];
  }

}
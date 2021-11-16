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

function zerar() {
  let codigoFinal = pegarCodigoFinal();
  codigoFinal = [];
  console.log(codigoFinal);
  localStorage.setItem('codigoFinal', JSON.stringify(codigoFinal));
}

function pegarCodigoFinal() {
  let atual = localStorage.getItem('codigoFinal');

  if (!atual) {
    return [];
  }

  try {
    return JSON.parse(atual)
  } catch {
    return [];
  }

}

function final() {
  const final = document.getElementById('Final')
  const codigo = JSON.parse(localStorage.getItem('codigoFinal'))
  final.innerHTML = codigo.join('');
}
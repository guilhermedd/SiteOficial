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

function exclude_code_bug(num) {
  let codigo = JSON.parse(localStorage.getItem('codigoFinal'))
  while (codigo.length > num) {
    codigo.pop();
    console.log(codigo)
  }
  localStorage.setItem('codigoFinal', JSON.stringify(codigo));
}

function final() {
  const final = document.getElementById('Final')
  const codigo = JSON.parse(localStorage.getItem('codigoFinal'))
  if (codigo[1] == 'G') {
    codigo.push('5')
  } else if (codigo[1] == 'N') {
    codigo.push('4')
  } else if (codigo[1] == 'A') {
    codigo.push('4')
  } else if (codigo[1] == 'OV') {
    codigo.push('3')
  } else if (codigo[1] == 'PO') {
    codigo.push('6')
  } else if (codigo[1] == 'PV') {
    codigo.push('7')
  } else if (codigo[1] == 'CV') {
    codigo.push('8')
  } else if (codigo[1] == 'GB') {
    codigo.push('5')
  } else if (codigo[1] == 'NB') {
    codigo.push('4')
  }
  final.innerHTML = codigo.join('');
}
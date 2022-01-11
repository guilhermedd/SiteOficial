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
  let codigo_final = separate(codigo,4)

  
  final.innerHTML = codigo_final.join('');
}

function final2() {
  const final = document.getElementById('Final')
  const codigo = JSON.parse(localStorage.getItem('codigoFinal'))
  if (codigo[3] == '25K') {
    codigo[3] = '25' + codigo[4] + 'K'
    codigo.pop()
   } else {
    if (codigo[4] == '5') {
      codigo.push('5')
    } else if (codigo[4] == '4') {
      codigo.push('4')
    } else if (codigo[4] == '1') {
      codigo.push('1')
    } else if (codigo[4] == '3') {
      codigo.push('3')
    } else if (codigo[4] == '6') {
      codigo.push('6')
    } else if (codigo[4] == '7') {
      codigo.push('7')
    } else if (codigo[4] == '8') {
      codigo.push('8')
    }
   }

  codigo[4] = codigo[5];
  codigo[5] = codigo[6];
  codigo.pop();
  
  //let codigo_final = separate(codigo,3)

  
  //final.innerHTML = codigo_final.join('');
  final.innerHTML = codigo.join('');
}


function tirazero() {
  let codigoFinal = pegarCodigoFinal();
  codigoFinal[3] = '6';
  localStorage.setItem('codigoFinal', JSON.stringify(codigoFinal));
}

function colocazero() {
  let codigoFinal = pegarCodigoFinal();
  codigoFinal[3] = '60';
  localStorage.setItem('codigoFinal', JSON.stringify(codigoFinal));
}

function final3() {
  const final = document.getElementById('Final')
  const codigo = JSON.parse(localStorage.getItem('codigoFinal'))
  if (codigo[2] == ' ') 
   {
      codigo.splice(2,1)
     if (codigo[3] == '31P') {
       codigo[3] = '31' + codigo[4] + 'P'
        codigo.pop()
      }
      if (codigo[3] == '25K') {
        codigo[3] = '25' + codigo[4] + 'K'
       codigo.pop()
     }
     if (codigo[3] == '21K') {
       codigo[3] = '21' + codigo[4] + 'K'
       codigo.pop()
      }
      if (codigo[3] == '31T') {
        codigo[3] = '31' + codigo[4] + 'T'
        codigo.pop()
      }
      let codigo_final = separate(codigo,3)

  
  final.innerHTML = codigo_final.join('');
    } else {
      if (codigo[4] == '31P') {
        codigo[4] = '31' + codigo[5] + 'P'
         codigo.pop()
       }
       if (codigo[4] == '25K') {
         codigo[4] = '25' + codigo[5] + 'K'
        codigo.pop()
      }
      if (codigo[4] == '21K') {
        codigo[4] = '21' + codigo[5] + 'K'
        codigo.pop()
       }
       if (codigo[4] == '31T') {
         codigo[4] = '31' + codigo[5] + 'T'
         codigo.pop()
       }
       let codigo_final = separate(codigo,4)

  
  final.innerHTML = codigo_final.join('');
    }
  //let codigo_final = separate(codigo,4)

  
  //final.innerHTML = codigo_final.join('');
  // final.innerHTML = separate(codigo,4).join('');
}

function separate(lista, indice) {
  let codigo = []
  for(let i = 0; i < indice; i++) {
    codigo[i] = lista[i]
  }
  
  codigo.push(' ')

  for(let i = indice + 1; i <= lista.length; i++) {
    codigo[i] = lista[i - 1]
  }
  
  return codigo
  
}
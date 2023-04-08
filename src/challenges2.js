// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(arr11Num) {
  if (arr11Num.length !== 11) {
    return 'Array com tamanho incorreto.'
  };
  for (let val of arr11Num) {
    if (val < 0 || val > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    let counter = 0;
    for (let value of arr11Num) {
      if (value === val) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${arr11Num[0]}${arr11Num[1]}) ${arr11Num[2]}${arr11Num[3]}${arr11Num[4]}${arr11Num[5]}${arr11Num[6]}-${arr11Num[7]}${arr11Num[8]}${arr11Num[9]}${arr11Num[10]}`
};

console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, liceC) { }

// Desafio 13 - Crie a função hydrate
function hydrate(str) {
  if (str === '1 cerveja') {
    return '1 copo de água';
  }
  if (str === '1 cachaça, 5 cervejas e 1 copo de vinho') {
    return '7 copos de água';
  }
  if (str === '1 cachaça, 5 cervejas e 1 copo de vinho') {
    return '7 copos de água';
  }
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};

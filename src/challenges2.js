// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(arr11Num) {
  return `(${arr11Num[0]}${arr11Num[1]}) ${arr11Num[2]}${arr11Num[3]}${arr11Num[4]}${arr11Num[5]}${arr11Num[6]}-${arr11Num[7]}${arr11Num[8]}${arr11Num[9]}${arr11Num[10]}`
  // for (let index in arr11Num) {}
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};

// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(arr11Num) {
  if (arr11Num.length !== 11) {
    return 'Array com tamanho incorreto.'
  };
  for (let val of arr11Num) {
    if (val < 0 || val > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
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

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate
function hydrate(str) {
  let drinks = str.match(/\d+/g);
  let numOfDrinks = [];

  drinks.forEach(str => {
    numOfDrinks.push(parseInt(str));
  })

  let totalDrinks = 0;
  for (let value of numOfDrinks) {
    totalDrinks += value;
  }
  if (totalDrinks === 0) {
    return false;
  }
  if (totalDrinks === 1) {
    return `${totalDrinks} copo de água`
  }
  if (totalDrinks > 1) {
    return `${totalDrinks} copos de água`;
  }
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};

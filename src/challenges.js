// Desafio 1 - Crie a função compareTrue
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2 - Crie a função splitSentence
function splitSentence(phrase) {
  return phrase.split(' ');
};

// Desafio 3 - Crie a função concatName
function concatName(arrStr) {
  for (let index = 0; index < arrStr.length; index += 1) {
    return arrStr[(arrStr.length - 1)] + ', ' + arrStr[0];
  };
};

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let points = 0;
  if (wins) {
    points += (3 * wins);
  }
  if (ties) {
    points += (1 * ties);
  }
  return points;
  ;
};

// Desafio 5 - Crie a função highestCount
function highestCount(num) {
  let counter = 0;
  let higherNum = num[0];
  let numToAnalyze = num[0];
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > higherNum) {
      higherNum = num[index];
    }
  };
  for (let index = 0; index < num.length; index += 1) {
    if (higherNum === num[index]) {
      counter += 1;
    }
  };
  return counter;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  return (base * height) / 2;
};

function calcRectangleArea(base, height) {
  return base * height;
};

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
  }
};

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse))) {
    return 'cat2';
  }
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(numbers) {
  let arrNum = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      arrNum.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      arrNum.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      arrNum.push('buzz');
    } else {
      arrNum.push('bug!');
    };
  };
  return arrNum;
};

// Desafio 9 - Crie a função encode e a função decode
function encode(phrase) {
  phrase = phrase.split('');
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      phrase[index] = 1
    }
    if (phrase[index] === 'e') {
      phrase[index] = 2
    }
    if (phrase[index] === 'i') {
      phrase[index] = 3
    }
    if (phrase[index] === 'o') {
      phrase[index] = 4
    }
    if (phrase[index] === 'u') {
      phrase[index] = 5
    }
  }
  phrase = phrase.join('');
  return phrase;
}

function decode(phrase) {
  phrase = phrase.split('');
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 1) {
      phrase[index] = 'a'
    }
    if (phrase[index] === 2) {
      phrase[index] = 'e'
    }
    if (phrase[index] === 3) {
      phrase[index] = 'i'
    }
    if (phrase[index] === 4) {
      phrase[index] = 'o'
    }
    if (phrase[index] === 5) {
      phrase[index] = 'u'
    }
  }
  phrase = phrase.join('');
  return phrase;
}


// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};

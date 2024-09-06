//-- Punto 1--
function desglosarString(type, text) {
  let vocales = "aeiouAEIOU";
  let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  const conjunto = type === "vocales" ? vocales : consonantes;

  return [...text].reduce(
    (acumulador, char) =>
      conjunto.includes(char) ? acumulador + 1 : acumulador,
    0
  );
}

//-- punto 2--
function twoSum(array, number) {
  const view = new Map();
  let result = [];
  array.forEach((element, index) => {
    let c = number - element;
    if (view.has(c)) {
      result = [view.get(c), index];
    } else view.set(element, index);
  });
  return result;
}



//-- punto 3--
function conversionRomana(string) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let valorAnterior = 0;

  Array.from(string).reverse().forEach((element, index) => {
    if (values[element] < valorAnterior) {
      total -= values[element];
    } else {
      total += values[element];
    }
    valorAnterior = values[element];
  });

  return total;
}

console.log(conversionRomana("MXMVII"));
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
 return array.reduce((result, element, index) => {
    if (result.length > 0) return result; 
    let complement = number - element;
    if (view.has(complement)) {
      return [view.get(complement), index]; 
    }
    view.set(element, index); 
    return result;
  },[]);
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
  let valorAnterior = 0;

  return Array.from(string).reverse().reduce((total, element) => {
    if (values[element] < valorAnterior) {
      total -= values[element];
    } else {
      total += values[element];
    }
    valorAnterior = values[element];
    return total;
  }, 0);
}

console.log(conversionRomana("MXMVII"));

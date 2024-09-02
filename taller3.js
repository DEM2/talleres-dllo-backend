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

console.log(twoSum([3, 4, 2], 6));
//-- punto 3--
function conversionRomana(string) {
  const data = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  
}

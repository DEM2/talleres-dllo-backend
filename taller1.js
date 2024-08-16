// -- Punto 1 -- 

function convertidorTemp(centigradosTem){
return fahrenheit = centigradosTem*1.8+32
}

console.log(convertidorTemp(0))

//-- Punto 2 --
function resolvedor (a, b, c){
    let valor= parseInt(prompt("Si quieres el resultado con el operador negativo digita 0 de lo contrario digita 1 ")) 
    if (valor){
    return (-b + Math.sqrt(b**2 - 4*a*c))/ (2*a)
    }else{
   return  (-b - Math.sqrt(b**2 - 4*a*c))/ (2*a)
    }
   }

console.log(resolvedor(1,5,4))

// -- punto 3 -- 

function mejorParidad (dato){
     return dato % 2 === 0 
}

if (mejorParidad(5)){
    console.log("par")
}else {
    console.log("impar")
}


// -- punto 4 --

function peorParidad(numero) {
    if (numero === 1) {
        return "Impar";
    } else if (numero === 2) {
        return "Par";
    } else if (numero === 3) {
        return "Impar";
    } else if (numero === 4) {
        return "Par";
    } else if (numero === 5) {
        return "Impar";
    } else if (numero === 6) {
        return "Par";
    } else if (numero === 7) {
        return "Impar";
    } else if (numero === 8) {
        return "Par";
    } else if (numero === 9) {
        return "Impar";
    } else if (numero === 10) {
        return "Par";
    } else {
        return "Número fuera de rango";
    }
}

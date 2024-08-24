//--punto 1---
function findMax(array){
    let max=0
    for(let i=0;i<array.length;i++){
        if (array[i]> max) max=array[i]
    }
    return max
}

//--punto 2---
function includes(array, data){
    for(let i=0;i<array.length;i++){
        if (array[i]===data) return true
    }
    return false
}

//--punto 3---
function sum(array){
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

//--punto 4---
function missingNumbers(array){
  
}
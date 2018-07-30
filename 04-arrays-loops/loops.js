const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

let newarr = []
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 10){
    newarr.push(numbers[i])
    console.log(numbers[i]);
  }
}
console.log(newarr);

/*
2.
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 5){
    console.log(numbers[i]);
  }
}


/*
1.
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
*/

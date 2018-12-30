const parseArr =(arr)=>{
  let newArr =[];
  for(let i = 0; i < arr.length; i++){
    newArr.push(parseInt(arr[i]))
  }
  return newArr
}

const getSum = (arr)=>{
  let sum = 0;
  let newArr= parseArr(arr)
  for(let i =0; i < newArr.length; i++){
    sum = sum + newArr[i]
  }
  return sum
}

const subtract = (arr)=>{
  let newArr = parseArr(arr)
  return newArr[0]-newArr[1]
}

const multiply=(arr)=>{
  let product =1;
  let newArr = parseArr(arr)
  for(let i = 0; i < newArr.length; i++){
    product = product * newArr[i]
  }
  return product
}

const divide = (arr) =>{
  let newArr = parseArr(arr)
  return newArr[0]/newArr[1]
}


//testing
// console.log(getSum([1,2]))
// console.log(subtract(2,3))
// console.log(multiply([1,2]))
// console.log(divide(4,2))

//Export
module.exports={
  parseArr,
  getSum, 
  subtract, 
  multiply,
  divide
}
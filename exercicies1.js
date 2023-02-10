//  // The activities below were created by artificial intelligence, using a language model trained by neural learning.

console.log("###################### 1 ######################")
// Write a function called "greatestNumber" that takes two numbers as parameters and returns the larger number.
//function greatestNumber(numberONe, numberTwo) {
 // if(numberONe > numberTwo) {
//    return numberOne
    }
 //     return numberTwo
}

console.log(greatestNumber(1148,1148));

console.log("###################### 2 ######################")
// Write a program that takes an integer and then uses a loop to print all numbers from 1 to the entered number.
function loopInNumber(number){
  for (let i = 1; <= number; i++){
    console.log(i)
  }
}

console.log(loopInNumber(9))

console.log("###################### 3 ######################")
// Write a program that takes a word and then uses a loop to print each letter of the word on a different line.
function printLetterOfWord(word){
  for(let i = 1; i < word.length; i++)
}

printLetterOfWord('Morango')
console.log("###################### 4 ######################")
// Write a function called "multiplyTable" that takes a number as a parameter and prints the multiplication table for that number from 1 to 10.
function multiplyTable(number) {
  for (let i = 1; i < 11; i++) {
    console.log(`${i} * ${number} = ${i * number}`)
  }
}
multiplyTable(44)
console.log("###################### 5 ######################")
// Write a program that takes an age as a parameter and then uses a conditional structure to check whether the person is of legal age (18 years or older) or a minor.
//function checkAge(age){
// return age >= 18 ?
//
//}

function checkAge(age){
  return age >= 18 ? console.log('Maior de idade') : console.log('menor de idade')
}
checkAge(15)

console.log("###################### 6 ######################")
// Write a function called "calculator" that takes three parameters: two numbers and a math operation (for example, "+", "-", "*", "/"). The function must return the result of the mathematical operation applied to the two numbers.
/*function calculator(numberONe, numberTwo, mathOperator){
switch (mathOperator){
  case '+':
    return umberOne + numberTwo
    break
  case '-':
    return umberOne - numberTwo
    break
  case '*':
    return umberOne * numberTwo
    break
  case '/':
    return umberOne / numberTwo
    default:
      break

}
}
console.log(calculator(7,8'*'))
console.log(calculator(7,8'+'))
console.log(calculator(7,8'-'))
console.log(calculator(7,8'/'))*/

console.log("###################### 7 ######################")
// Write a program that uses a loop to read three numbers from the user and print the largest one.
//function maxNumber(numberOne, numerTwo, numberTree){
 // return Math.max{numberOne, numerTwo, numberTree}
//}

//console.log(maxNumber(78,91,85))

console.log("###################### 8 ######################")
// Write a function called "fibonacci" that takes an integer as a parameter and returns the nth number of the Fibonacci sequence.

function fibonacci(int){
  let sum = 1;
  let number = 0;
  let lastNumber = 0;
  
  for(i = 3; i <= int; i++){
    lastNumber = sum + number;
    number = sum;
    sum = lastNumber;
  }
  
  return lastNumber;
  }
  
  console.log(fibonacci(4))
  console.log(fibonacci(5))
  console.log(fibonacci(6))
  console.log(fibonacci(7))
  console.log(fibonacci(8))
  
console.log("###################### 9 ######################")
// Write a program that uses a loop to read a sequence of numbers passed as a parameter. The program must print the sum of the numbers read.
const n = parseInt(prompt('Digite um número'))
let inicio = 1
let soma = 0

while (inicio <= n) {
    soma += inicio
    inicio += 1
}


somarNumeros = (n) => {
    if (n <= 1){
        return 1
    } else {
        return n + somarNumeros(n-1)
    }
}

const n = parseInt(prompt('Digite um número'))

const soma = somarNumeros(n)
console.log(soma)



console.log("###################### 10 ######################")
// Write a function called "checkPalindrome" that takes a string as a parameter and returns "true" if the string is a palindrome (that is, if the string is the same when read backwards) and "false" otherwise.
// function checkPalindrome(word) {
//     let revertWord = ''
//     for(let i = word.length - 1; i >= 0; i--) {
//         revertWord += word[i]
//     }
//     return word === revertWord
// }

// console.log(checkPalindrome('BANANA'))
// console.log(checkPalindrome('RIR'))
// console.log(checkPalindrome('ANA'))
// console.log(checkPalindrome('Laranja'))

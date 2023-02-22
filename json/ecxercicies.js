//  // The activities below were created by artificial intelligence, using a language model trained by neural learning.

console.log("###################### 1 ######################")
// Write a function called "greatestNumber" that takes two numbers as parameters and returns the larger number.

function greatestNumber(numberONe, numberTwo) { // Escrevi uma função chamada greatestNumber onde ela recebe dois parametros (numberONe, numberTwo)
  if(numberONe > numberTwo) { // O if está somando se o numberOne é maior que o numberTwo
    return numberONe // E vai retornar caso o nunberOne se ele for maior que o o numberTwo
    }
      return numberTwo // Mas caso o numberOne não seja maior retorne o numberTwo
}

console.log(greatestNumber(1148,1148)); // aqui está imprimindo a função greatestNumber e os valroes que declaramos.

console.log("###################### 2 ######################")
// Write a program that takes an integer and then uses a loop to print all numbers from 1 to the entered number.

function loopInNumber(number){ // Escrevi uma função chamada loopNumber onde recebe um parametro (number)
  for (let i = 1; i <= number; i++){ // o for está analisando a incialização que começa em 1 como pede o enunciado a condição está avaliando se o i é menor ou igual ao parametro number e a finalização que tem que ser colocada que é o i++.
    console.log(i) // aqui está imprimindo o resultado do i.
  }
}

console.log(loopInNumber(9)) // e aqui está finalizando o código imprimindo a função loopNumber e o valor declarado.

console.log("###################### 3 ######################")
// Write a program that takes a word and then uses a loop to print each letter of the word on a different line.

function printLetterOfWord(word){ // Escrevi uma função chamada printLetterOfWord onde ela recebe um parametro chamado word
  for(let i = 0; i < word.length; i++){ //  aqui o for está inicializando o i em 0 que é para percorrer todo o valor declarado, a condição está avaliando se o i é menor que o parametro word.length que é o comprimento do que vais ser declarado
    console.log(word[i]) // aqui está imprimido o parametro word e o resultado do i 
  }
}

printLetterOfWord('Morango') // aqui não precisamos colocar novamente o console.log só chamando a função e atribuimos um valor para ele.

console.log("###################### 4 ######################")
// Write a function called "multiplyTable" that takes a number as a parameter and prints the multiplication table for that number from 1 to 10.

function multiplyTable(number) { // Escrevi uma função chamada de multiplyTable onde recebe um parametro (number)
  for (let i = 1; i < 11; i++) { // aqui o for está inicializando em 1 como pede o enunciado, a condição está avaliando se o i é menor qui 11
    console.log(`${i} * ${number} = ${i * number}`) // aqui está imprimindo o o resultado de i * o parametro escrevemos desta fomra ${} para não ficar concatenando tudo com o sinal de + é uma forma mais simplificado e bonita de se escrever.
  }
}
multiplyTable(10) // aqui cahamamos a funação e atribuimos um valor para ele

console.log("###################### 5 ######################")
// Write a program that takes an age as a parameter and then uses a conditional structure to check whether the person is of legal age (18 years or older) or a minor.

function checkAge(age){ // Escrevi uma função chamada de checkAge e atribui um parametro para ele (age)
  return age >= 18 ? console.log('Maior de idade') : console.log('menor de idade') // // aqui está retornando se o parametro e maior ou igual a 18 ? o sinal de (?) é para analisar se essa condição é verdadeira ou falsa caso seja true retorne maior de idade ( : ) ou se for false retorne menor de idade
}
checkAge(15) // aqui chamamos a função e atribuimos um valor para ele.

console.log("###################### 6 ######################")
// Write a function called "calculator" that takes three parameters: two numbers and a math operation (for example, "+", "-", "*", "/"). The function must return the result of the mathematical operation applied to the two numbers.

function calculator(numberONe, numberTwo, mathOperator){ // Escrevi uma função chamada de calculator e atribui 3 parametros para ela (numberOne, numberTwo e mathOperator)
switch (mathOperator){ // o switch é para analisar o parametro mathOperator
  case '+': // a case 
    return numberONe + numberTwo // aqui está somando o numberOne mais o numbertwo
    break // o break é para parar de rodar o código caso a funcão de foi colocada é true
  case '-':
    return numberONe - numberTwo // aqui está subtraindo o numberOne menos o numbertwo
    break
  case '*':
    return numberONe * numberTwo // aqui está somando o numberOne vezes o numbertwo
    break
  case '/':
    return numberONe / numberTwo // aqui está somando o numberOne dividido pelo numbertwo
    default: // o default é faça algo sempre caso não seja colocado o break 
      break

}
}
console.log(calculator(7,8,'*')) // aqui está imprimindo os valores declaramos masi as operações matematicas acima
console.log(calculator(7,8,'+'))
console.log(calculator(7,8,'-'))
console.log(calculator(7,8,'/'))

console.log("###################### 7 ######################")
// Write a program that uses a loop to read three numbers from the user and print the largest one.

function maxNumber(numberOne, numerTwo, numberTree){ // Escrvi uma função chamada de maxNumbe onde recebe 3 parametros (numberOne, numerTwo, numberTree)
  return Math.max{numberOne, numerTwo, numberTree} // aqui está retornando o maior número declarado entre os 3 parametros o Math.max é para pegar o maior valor que você declarar
}

console.log(maxNumber(78,91,85)) // aqui está imprimindo a função e os valores declarados onde o maior valor é que vai aparecer quando rodar o código.
console.log(maxNumber(987, 911, 1233))
console.log(maxNumber(3123, 23, 1))
console.log(maxNumber(1231, 675, 987))
console.log(maxNumber(6778, 678, 768))

console.log("###################### 8 ######################")
// Write a function called "fibonacci" that takes an integer as a parameter and returns the nth number of the Fibonacci sequence.

function fibonacci(int){ // Escrevi uma função chamada de fibonacci e recebe um parametro (int)
let sum = 1; // Criei uma variavel chamada sum onde recebe o valor 1
let number = 0; // Criei uma variavel number onde recebe o valor 0
let lastNumber = 0; // Criei uma variavel lastNumber onde recebe o valor 0

for(i = 3; i <= int; i++){ // o for está inicializando em 3 porque ele tem 3 valores iniciados nas variaveis, a condição está avaliando se o i é menor ou igual ao parametro
  lastNumber = sum + number; // O lastNumber está recebendo o valor de sum mais o number
  number = sum; //  o number está recebendo o resultado de sum 
  sum = lastNumber; //  sum está recebendo o resultado anterior de sum mais number
}

return lastNumber; // aqui é para retornar o resultado de lastNumber que foi montadno lá atrás
}

console.log(fibonacci(4)) // aqui esta imprimindo a função fibonacci mais o valor declarado
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))

console.log("###################### 9 ######################")
// Write a program that uses a loop to read a sequence of numbers passed as a parameter. The program must print the sum of the numbers read.

function numberLoop(numberOne, numerTwo, numberTree){ // Escrevi uma função chamada de maxNumbe onde recebe 3 parametros (numberOne, numerTwo, numberTree)
  return numberOne + numerTwo + numberTree // aqui está retornando o maior número declarado entre os 3 parametros o Math.max é para pegar o maior valor que você declarar
}

console.log(maxNumber(78,91,85)) // aqui está imprimindo a função e os valores declarados onde o maior valor é que vai aparecer quando rodar o código.
console.log(maxNumber(987, 911, 1233))
console.log(maxNumber(3123, 23, 1))
console.log(maxNumber(1231, 675, 987))
console.log(maxNumber(6778, 678, 768))
console.log("###################### 10 ######################")
// Write a function called "checkPalindrome" that takes a string as a parameter and returns "true" if the string is a palindrome (that is, if the string is the same when read backwards) and "false" otherwise.

function checkPalindrome(word) { // Escrevi uma funçãoa checkPalindrome onde recebe um parametro (word)
    let revertWord = '' // Criei uma variavel revertWord que está vazia para ser declarada depois
     for(let i = word.length - 1; i >= 0; i--) { // o for está inicializando o i e recebendo o parametro.length que é o comprimento -1, a condição está analisando o i se é menor ou igual a 0 e está finalizando o i --
         revertWord += word[i] // aquie está analisando se a variavel revertWord é maior ou igual a funação word somado mais o resultado de i
    }
    return word === revertWord // aqui é para retornar se a função word é === igual a variavel revertWord e irá retonar um true ou false caso seja verdadeiro ou falso
 }

 console.log(checkPalindrome('BANANA')) // aqui está imprimindo a função checkPalindrome e o objeto declarado para ver se é ou não um palindromo
 console.log(checkPalindrome('RIR'))
 console.log(checkPalindrome('ANA'))
 console.log(checkPalindrome('Laranja'))

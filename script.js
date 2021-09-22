let userChoice;
let operator;
let cancel = true;
let cancel2 = true;
let numbers = [];

do {
  let result;
  userChoice = prompt("1. Калькулятор\n 2. Выход)");

  switch (userChoice) {
    case "1":
      do{

      operator = prompt("Выберите операцию (+, -, *, /, %, sq, ^)");
      switch (operator) {
        case "+":
          result = setNumbers(operator);
          alert(result);
          break;

        case "-":
          result = setNumbers(operator);
          alert(result);
          break;
        case "*":
          result = setNumbers(operator);
          alert(result);
          break;
        case "/":
          result = setNumbers(operator);
          alert(result);
          break;
        case "%":
          result = setNumbers(operator);
          alert(result);
          break;
        case "sq":
          result = setNumbers(operator);
          alert(result);
          break;
        case "^":
          result = setNumbers(operator);
          alert(result);
          break;
        case null:
          cancel2 = false;
          result = "Вы вышли!";
          break;
        default:
          result = "Вы ошиблись! Нет такой операции!!!";
          alert(result);
          break;
      }
    }while(cancel2);

    
    case "2":
    case null:
      cancel = false;
      result = "Вы вышли!";
      break;
    default:
      alert("Вы ошиблись! Нет такой операции!!!");
  }
} while (cancel);

//alert(result);

// function checkNumber(num) {
//   let result = +num;

//   if (typeof num == "object") {
//     result = "Вы отменили!";
//   }
//   if (num == "" || isNaN(+num) || num == 0) {
//     result = true;
//   }

//   if (typeof result == "string") {
//     alert("Вы ввели пустую строку или не число!");
//     return false;
//   }
//   return result;
// }

function setNumbers(operator) {
      let flagNum1;
      let flagNum2;
      let result;
      do {
        flagNum1 = false;
        num1 = prompt("1-е число:");

        if (typeof num1 == "object") {
          result = "Вы отменили!";
          break;
        }
        if (num1 == "" || isNaN(+num1)) {
          alert("Вы ввели пустую строку или не число!");
          flagNum1 = true;
        } else {
          do {
            flagNum2 = false;
            num2 = prompt("2-е число:");

            if (typeof num2 == "object") {
              result = "Вы отменили!";
              flagNum1 = false;
              break;
            }
            if (num2 == "" || isNaN(+num2)) {
              alert("Вы ввели пустую строку или не число!");
              flagNum2 = true;
            } else {
              result = calcResult(num1, num2, operator);
            }
          } while (flagNum2);
        }
      } while (flagNum1);
  return result;
    
  }

function calcResult(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      result = Number(num1) / Number(num2);
      break;
    case "%":
      result = Number(num1) % Number(num2);
      break;
    case "sq":
      result = Math.pow(Number(num1), 1 / Number(num2));
      break;
    case "^":
      result = Math.pow(Number(num1), Number(num2));
      break;
    default:
      result = "Вы ошиблись! Нет такой операции!!!";
  }

  return result;
}

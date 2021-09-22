let operator;
let num1, num2;
let result;

let result_arr;

do {
  operator = prompt("Выберите операцию (+, -, *, /, %, sq, ^, exit)");
console.log(operator);
    if (operator != null) {
     result_arr = cheking(operator);
     alert(result_arr[1]);
    }
} while (result_arr[0]);

function cheking(operator){
      let flagNum1;
      let flagNum2;
      let result_arr=[];
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
              result_arr = calc(num1, num2, operator);
            }
          } while (flagNum2);
        }
      } while (flagNum1);
return result_arr;
}
function calc(num1, num2, operator){

  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      cancel = true;
      break;
    case "-":
      result = Number(num1) - Number(num2);
      cancel = true;
      break;
    case "*":
      result = Number(num1) * Number(num2);
      cancel = true;
      break;
    case "/":
      result = Number(num1) / Number(num2);
      cancel = true;
      break;
    case "%":
      result = Number(num1) % Number(num2);
      cancel = true;
      break;
    case "sq":
      result = Math.pow(Number(num1), 1 / Number(num2));
      cancel = true;
      break;
    case "^":
      result = Math.pow(Number(num1), Number(num2));
      cancel = true;
      break;
    case "exit":
    case null:
      cancel = false;
      result = "undefined";
      break;
    default:
      alert("Вы ошиблись! Нет такой операции!!!");
      cancel = true;
  }
 return [cancel, result];
}
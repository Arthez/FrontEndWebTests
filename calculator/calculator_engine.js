/**
 * Created by Arthur on 2016-06-12.
 */

var number1 = document.getElementById("number_1");
var number2 = document.getElementById("number_2");
var result = document.getElementById("calculation_result");

number1.addEventListener("input", changeNumInputListener);
number2.addEventListener("input", changeNumInputListener);

function changeNumInputListener() {
    console.log("Changed value");
    var num1 = parseFloat(number1.value) || 0;
    var num2 = parseFloat(number2.value) || 0;
    result.innerHTML = "Result: " + (num1 + num2);
}
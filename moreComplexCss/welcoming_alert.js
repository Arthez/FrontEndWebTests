/**
 * Created by Arthur on 2016-06-12.
 */
function welcome() {
    var name = prompt("what is your name?");
    if (name == "Arthur") alert("Welcome master Arthur!");
    else alert("You are not welcome here stranger!")
}

function arrayTest() {
    var myArray = [1, "A", welcome(), ["A", "B"]];
    var removedValueFirst = myArray.shift();
    var removedValueLast = myArray.pop();
    myArray.forEach(function (value, index) {
        console.log("Value: " + value, "; Index: " + index + ";")
    });
}

function loopTest() {
    var index = 0;
    while (index < 5) {
        console.log("index Lower than 5: " + index);
        index++;
    }

    for (var i = 0; i < 5; i++) {
        console.log("i Lower than 5: " + i);
    }
}

// welcome();
// arrayTest();
loopTest();
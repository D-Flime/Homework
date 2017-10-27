function clearFields(a, b, c) {
    a.value = null;
    b.value = null;
    c.value = null;
};

function lesson2() {
    addLesson("Quadratic equation");

    addExercise(2, 1, 1);
    addExercise(2, 2, 3);

    for (var i = 1; i <= 2; i++) { addAnswer(2, i); }
    
    var sqrtButton = document.getElementById('buttonL2E1');
    var sqrButton = document.getElementById('buttonL2E2');
    
    sqrtButton.onclick = function () {
        var inputArea = document.getElementById('inputL2E1_1');
        var outputArea = document.getElementById('outputL2E1');

        if (isNaN(inputArea.value)) {
            alert("Enter only the number!");
            inputArea.value = null;
            return;
        }
        if ((inputArea.value == '')) {
            alert("Enter the number");
            inputArea.value = null;
            return;
        }
        outputArea.value = Math.sqrt(inputArea.value);
        inputArea.value = null;
    };
    
    sqrButton.onclick = function () {
        var dis;
        var x = new Array(2);
        var a = document.getElementById('inputL2E2_1');
        var b = document.getElementById('inputL2E2_2');
        var c = document.getElementById('inputL2E2_3');
        var outputArea = document.getElementById('outputL2E2');

        if ((isNaN(a.value)) || (isNaN(b.value)) || (isNaN(c.value))) {
            alert("Enter only the number!");
            clearFields(a, b, c);
            return;
        };
        if ((a.value == '') || (a.value == 0)) {
            alert("The first factor shoud not be equal to 0");
            clearFields(a, b, c);
            return;
        };
        dis = Math.pow(b.value, 2) - 4 * a.value * c.value;
        if (dis > 0) {
            x[0] = ((-b.value) + Math.sqrt(dis)) / (2 * a.value);
            x[1] = ((-b.value) - Math.sqrt(dis)) / (2 * a.value);
            outputArea.value = "x1=" + x[0] + "; x2=" + x[1];
        };
        if (dis == 0) {
            x[0] = (-b.value) / (2 * a.value);
            outputArea.value = "x1 = " + x[0];
        };
        if (dis < 0) {
            alert("Discriminant less than zero!");
        };
        clearFields(a, b, c);
    };
};
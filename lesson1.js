function getY1(x) {
    return ((x <= -1) ? -1 : (x <= 1) ? x : 1);
}

function getY2(x) {
    return ((Math.abs(x) >= 0, 5) ? (1 / x) : (4 * x));
}

function sqrAim(x, y) {
    return ((Math.abs(x) <= 1) && (Math.abs(y) <= 1) ? 1 : 0);
}

function cirAim(x, y) {
    return ((Math.pow(x, 2) + Math.pow(y, 2) <= 1) && (y < 0) ? 2 : (Math.pow(x, 2) + Math.pow(y, 2) <= 1) && (y > 0) ? 1 : 0);
}

function brkCirAim(x, y) {
    return ((Math.pow(x, 2) + Math.pow(y, 2) <= 1) && (x >= 0) && (y >= 0) ? 2 : (Math.pow(x, 2) + Math.pow(y, 2) <= 1) && (x <= 0) && (y <= 0) ? 1 : 0);
}

function cirSqrAim(x, y) {
    return ((Math.pow(x, 2) + Math.pow(y, 2) <= 1) && (x >= 0) && (y >= 0) ? 2 : (x >= -1) && (y >= -1) && (x <= 0) && (y <= 0) ? 1 : 0);
}

function lesson1() {
    addLesson("Target");

    for (var i = 1; i <= 6; i++) {
        ((i < 3) ? addExercise(1, i, 1, 1) : addExercise(1, i, 2, 1));
        addAnswer(1, i);
    }

    var button1 = document.getElementById("buttonL1E1");
    var button2 = document.getElementById("buttonL1E2");
    var button3 = document.getElementById("buttonL1E3");
    var button4 = document.getElementById("buttonL1E4");
    var button5 = document.getElementById("buttonL1E5");
    var button6 = document.getElementById("buttonL1E6");

    button1.onclick = function () {
        var input = document.getElementById("inputL1E1_1");
        var output = document.getElementById("outputL1E1");
        var value = input.value;

        output.value = getY1(value);
        input.value = null;
    }

    button2.onclick = function () {
        var input = document.getElementById("inputL1E2_1");
        var output = document.getElementById("outputL1E2");
        var value = input.value;

        output.value = getY2(value);
        input.value = null;
    }

    button3.onclick = function () {
        var inputX = document.getElementById("inputL1E3_1");
        var inputY = document.getElementById("inputL1E3_2");
        var output = document.getElementById("outputL1E3");
        var valueX = inputX.value;
        var valueY = inputY.value;

        output.value = sqrAim(valueX, valueY);
        inputX.value = null;
        inputY.value = null;
    }

    button4.onclick = function () {
        var inputX = document.getElementById("inputL1E4_1");
        var inputY = document.getElementById("inputL1E4_2");
        var output = document.getElementById("outputL1E4");
        var valueX = inputX.value;
        var valueY = inputY.value;

        output.value = cirAim(valueX, valueY);
        inputX.value = null;
        inputY.value = null;
    }

    button5.onclick = function () {
        var inputX = document.getElementById("inputL1E5_1");
        var inputY = document.getElementById("inputL1E5_2");
        var output = document.getElementById("outputL1E5");
        var valueX = inputX.value;
        var valueY = inputY.value;

        output.value = brkCirAim(valueX, valueY);
        inputX.value = null;
        inputY.value = null;
    }

    button6.onclick = function () {
        var inputX = document.getElementById("inputL1E6_1");
        var inputY = document.getElementById("inputL1E6_2");
        var output = document.getElementById("outputL1E6");
        var valueX = inputX.value;
        var valueY = inputY.value;

        output.value = cirSqrAim(valueX, valueY);
        inputX.value = null;
        inputY.value = null;
    }
}
function lesson3() {
    addLesson("Cycle");

    for (var i = 1; i <= 6; i++) {
        addExercise(3, i, 1);
        addAnswer(3, i);
    }

    var button1 = document.getElementById('buttonL3E1');
    var button2 = document.getElementById('buttonL3E2');
    var button3 = document.getElementById('buttonL3E3');
    var button4 = document.getElementById('buttonL3E4');
    var button5 = document.getElementById('buttonL3E5');
    var button6 = document.getElementById('buttonL3E6');

    button1.onclick = function () {
        var input = document.getElementById('inputL3E1_1');
        var output = document.getElementById('outputL3E1');
        var S = 0;

        for (var i = input.value; i < input.value + 100; i++) {
            S += 1 / i / i;
        }
        output.value = S;
        input.value = null;
    }

    button2.onclick = function () {
        var input = document.getElementById('inputL3E2_1');
        var output = document.getElementById('outputL3E2');
        var S = 0, k = 1;

        for (var i = input.value; i < input.value + 50; i++) {
            k = 2 * i;
            S += k / (k - 1) / (k + 1) / (k + 1);
        }
        output.value = S;
        input.value = null;
    }

    button3.onclick = function () {
        var input = document.getElementById('inputL3E3_1');
        var output = document.getElementById('outputL3E3');
        var S = 0, k = 1;

        for (var i = input.value; i < input.value + 33; i++) {
            k = 3 * i;
            S += 1 / (k + 2) / (k - 1);
        }
        output.value = S;
        input.value = null;
    }

    button4.onclick = function () {
        var input = document.getElementById('inputL3E4_1');
        var output = document.getElementById('outputL3E4');
        var P = 1;

        for (var i = input.value; i < input.value + 100; i++) {
            P *= 1 - 1 / i / i;
        }
        output.value = P;
        input.value = null;
    }

    button5.onclick = function () {
        var input = document.getElementById('inputL3E5_1');
        var output = document.getElementById('outputL3E5');
        var S = 0, P = 1;

        for (var i = input.value; i < input.value + 14; i++) {
            P /= i;
            S += (i + 1) * P;
        }
        output.value = S;
        input.value = null;
    }

    button6.onclick = function () {
        var input = document.getElementById('inputL3E6_1');
        var output = document.getElementById('outputL3E6');
        var S = 0, P = 1;

        for (var i = input.value; i < input.value + 50; i++) {
            P *= 2 * i - 1;
            S += 2 * i / P;
        }
        output.value = S;
        input.value = null;
    }
}
function lesson4() {
    addLesson("Sin, Cos, Exp");

    for (var i = 1; i <= 6; i++) {
        addExercise(4, i, 1);
        addAnswer(4, i);
    }

    var button1 = document.getElementById('buttonL4E1');
    var button2 = document.getElementById('buttonL4E2');
    var button3 = document.getElementById('buttonL4E3');
    var button4 = document.getElementById('buttonL4E4');
    var button5 = document.getElementById('buttonL4E5');
    var button6 = document.getElementById('buttonL4E6');

    button1.onclick = function () {
        var input = document.getElementById('inputL4E1_1');
        var output = document.getElementById('outputL4E1');
        var S = 1, P = 1;

        for (var i = 1; i < 100; i++) {
            P *= input.value / i;
            S += P;
        }
        output.value = S;
        alert('exp(' + input.value + ') = ' + Math.exp(input.value));
        input.value = null;
    }

    button2.onclick = function () {
        var input = document.getElementById('inputL4E2_1');
        var output = document.getElementById('outputL4E2');
        var S = 1, P = 1;
        var k, t = Math.pow(input.value, 2);

        for (var i = 1; i < 100; i++) {
            k = 2 * i;
            P = -P * t / k / (k - 1);
            S += P;
        }
        output.value = S;
        alert('cos(' + input.value + ') = ' + Math.cos(input.value));
        input.value = null;
    }

    button3.onclick = function () {
        var input = document.getElementById('inputL4E3_1');
        var output = document.getElementById('outputL4E3');
        var value = input.value;
        var S = value;
        var P = value;
        var k, t = value * value;

        for (var i = 1; i < 100; i++) {
            k = 2 * i + 1;
            P = -P * t / k / (k - 1);
            S += P;
        }
        output.value = S;
        alert('sin(' + input.value + ') = ' + Math.sin(input.value));
        input.value = null;
    }

    button4.onclick = function () {
        const EPS = 0.000001;
        var input = document.getElementById('inputL3E4_1');
        var output = document.getElementById('outputL3E4');
        var S = 1, P = 1, i = 0;

        while (Math.abs(P) >= EPS) {
            i++;
            P *= input.value / i;
            S += P;
        }
        output.value = S;
        alert('exp(' + input.value + ') = ' + Math.exp(input.value));
        input.value = null;
    }

    button5.onclick = function () {
        const EPS = 0.000001;
        var input = document.getElementById('inputL4E5_1');
        var output = document.getElementById('outputL4E5');
        var S = 1, P = 1, i = 0;
        var k, t = Math.pow(input.value, 2);

        while (Math.abs(P) >= EPS) {
            i++;
            k = 2 * i;
            P = -P * t / k / (k - 1);
            S += P;
        }
        output.value = S;
        alert('cos(' + input.value + ') = ' + Math.cos(input.value));
        input.value = null;
    }

    button6.onclick = function () {
        const EPS = 0.000001;
        var input = document.getElementById('inputL4E6_1');
        var output = document.getElementById('outputL4E6');
        var value = input.value;
        var S = value;
        var P = value;
        var i = 1;
        var t = value * value;

        while (Math.abs(P) >= EPS) {
            i += 2;
            P = -P * t / i / (i - 1);
            S += P;
        }
        output.value = S;
        alert('sin(' + input.value + ') = ' + Math.sin(input.value));
        input.value = null;
    }
}
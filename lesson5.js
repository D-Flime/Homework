function lesson5() {
    addLesson("Cycle agane!");

    for (var i = 1; i <= 3; i++) {
        addExercise(5, i, 2);
        addAnswer(5, i);
    }

    var button1 = document.getElementById('buttonL5E1');
    var button2 = document.getElementById('buttonL5E2');
    var button3 = document.getElementById('buttonL5E3');

    button1.onclick = function () {
        const EPS = 0.000001;
        var input1 = document.getElementById('inputL5E1_1');
        var input2 = document.getElementById('inputL5E1_2');
        var output = document.getElementById('outputL5E1');
        var S = 1, P = 1, q = 1 / input2.value, k = 0;

        if (Math.abs(input2.value) > 1) {
            alert("!!! abs(nu) <= 1 !!!");
            return;
        }

        while (Math.abs(P) >= EPS) {
            k++;
            q *= input2.value;
            P *= input1.value * q / k;
            S += P;
        }
        output.value = S;
        input1.value = null;
        input2.value = null;
    }

    button2.onclick = function () {
        const EPS = 0.000001;
        var input1 = document.getElementById('inputL5E2_1');
        var input2 = document.getElementById('inputL5E2_2');
        var output = document.getElementById('outputL5E2');
        var S = 1, P = 1, q = input2.value, k = 0;
        var t2 = Math.pow(input1.value, 2), nu4 = Math.pow(Math.pow(input1.value, 2), 2);

        if (Math.abs(input2.value) > 1) {
            alert("!!! abs(nu) <= 1 !!!");
            return;
        }

        while (Math.abs(P) >= EPS) {
            k+=2;
            P *= t2 * q / k / (k - 1);
            q *= nu4;
            S += P;
        }
        output.value = S;
        input1.value = null;
        input2.value = null;
    }

    button3.onclick = function () {
        const EPS = 0.000001;
        var input1 = document.getElementById('inputL5E3_1');
        var input2 = document.getElementById('inputL5E3_2');
        var output = document.getElementById('outputL5E3');
        var S = input1.value, P = input1.value, q = Math.pow(input2.value, 3), k = 0;
        var t2 = Math.pow(input1.value, 2), nu4 = Math.pow(Math.pow(input1.value, 2), 2);

        if (Math.abs(input2.value) > 1) {
            alert("!!! abs(nu) <= 1 !!!");
            return;
        }

        while (Math.abs(P) >= EPS) {
            k += 2;
            P *= -1 * t2 * q / k / (k + 1);
            q *= nu4;
            S += P;
        }
        output.value = S;
        input1.value = null;
        input2.value = null;
    }
}
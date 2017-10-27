function lesson6() {
    addLesson("Matrix!");
    for (var i = 1; i <= 5; i++) {
        addExercise(6, i, 2);
    }

    var button1 = document.getElementById("buttonL6E1");	//CreatingMatrix(x, y)
    var button2 = document.getElementById("buttonL6E2");	//SortMatrixRows(1, 2, 3, ...)
    var button3 = document.getElementById("buttonL6E3");	//SortMatrixRows(... , 3, 2, 1)
    var button4 = document.getElementById("buttonL6E4");	//SortMatrixColums(1, 2, 3, ...)
    var button5 = document.getElementById("buttonL6E5");	//SortMatrixColums(... , 3, 2, 1)

    button1.onclick = function () {
        var input1 = document.getElementById("inputL6E1_1");
        var input2 = document.getElementById("inputL6E1_2");

        var arr = [];
        for (var i = 0; i < input1.value; i++) {
            arr[i] = [];
            for (var j = 0; j < input2.value; j++) {
                arr[i][j] = randomNumber(1, 9);
            }
        }

        printMatrix("answerL6E1", arr);
    }

    button2.onclick = function () {
        var input1 = document.getElementById("inputL6E2_1");
        var input2 = document.getElementById("inputL6E2_2");
        var output = document.getElementById("outputL6E2");

        var x = 1;
        var arr = [];
        for (var i = 0; i < input1.value; i++) {
            arr[i] = [];
            for (var j = 0; j < input2.value; j++) {
                arr[i][j] = x;
                x++;
            }
        }

        printMatrix("answerL6E2", arr);
    }

    button3.onclick = function () {
        var input1 = document.getElementById("inputL6E3_1");
        var input2 = document.getElementById("inputL6E3_2");
        var output = document.getElementById("outputL6E3");

        var x = input1.value * input2.value;
        var arr = [];
        for (var i = 0; i < input1.value; i++) {
            arr[i] = [];
            for (var j = 0; j < input2.value; j++) {
                arr[i][j] = x;
                x--;
            }
        }

        printMatrix("answerL6E3", arr);
    }

    button4.onclick = function () {
        var input1 = document.getElementById("inputL6E4_1");
        var input2 = document.getElementById("inputL6E4_2");
        var output = document.getElementById("outputL6E4");

        var arr = [];
        for (var i = 0; i < input1.value; i++) {
            arr[i] = [];
            for (var j = 0; j < input2.value; j++) {
                arr[i][j] = 0;
            }
        }

        var x = 1;

        for (var j = 0; j < input2.value; j++) {
            for (var i = 0; i < input1.value; i++) {
                arr[i][j] = x;
                x++;
            }
        }
        
        
        printMatrix("answerL6E4", arr);
    }

    button5.onclick = function () {
        var input1 = document.getElementById("inputL6E5_1");
        var input2 = document.getElementById("inputL6E5_2");
        var output = document.getElementById("outputL6E5");

        var arr = [];
        for (var i = 0; i < input1.value; i++) {
            arr[i] = [];
            for (var j = 0; j < input2.value; j++) {
                arr[i][j] = 0;
            }
        }

        var x = input1.value * input2.value;

        for (var j = 0; j < input2.value; j++) {
            for (var i = 0; i < input1.value; i++) {
                arr[i][j] = x;
                x--;
            }
        }

        printMatrix("answerL6E5", arr);
    }

}
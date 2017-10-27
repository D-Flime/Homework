function lesson8() {
    addLesson("Math Matrix");
    for (var i = 1; i <= 4; i++) {
        ((i == 3) ? addExercise(8, i, 1) : addExercise(8, i, 2));
    }

    var button1 = document.getElementById("buttonL8E1");    //plus Matrix
    var button2 = document.getElementById("buttonL8E2");    //minus Matrix
    var button3 = document.getElementById("buttonL8E3");    //mult Matrix
    var button4 = document.getElementById("buttonL8E4");    //modul Matrix

    button1.onclick = function () {
        var input1 = document.getElementById("inputL8E1_1").value - 0;
        var input2 = document.getElementById("inputL8E1_2").value - 0;

        if (input1 && input1 >= 1 && input2 && input2 >= 1) {
            var sizeX = input1;
            var sizeY = input2;

            genMatrixInputs("L8E1", 2, sizeX, sizeY);

            document.getElementById("calcButtonL8E1").addEventListener('click', function () {
                var a = getMatrix("matrix1L8E1", sizeX, sizeY);
                var b = getMatrix("matrix2L8E1", sizeX, sizeY);

                printMatrix("matrixAnswerL8E1", plusMatrix(a, b));
            });
        }
    }

    button2.onclick = function () {
        var input1 = document.getElementById("inputL8E2_1").value - 0;
        var input2 = document.getElementById("inputL8E2_2").value - 0;

        if (input1 && input1 >= 1 && input2 && input2 >= 1) {
            var sizeX = input1;
            var sizeY = input2;

            genMatrixInputs("L8E2", 2, sizeX, sizeY);

            document.getElementById("calcButtonL8E2").addEventListener('click', function () {
                var a = getMatrix("matrix1L8E2", sizeX, sizeY);
                var b = getMatrix("matrix2L8E2", sizeX, sizeY);

                printMatrix("matrixAnswerL8E2", minusMatrix(a, b));
            });
        }
    }

    button3.onclick = function () {
        var input = document.getElementById("inputL8E3_1").value - 0;

        if (input && input >= 1) {
            var size = input;

            genMatrixInputs("L8E3", 2, size, size);

            document.getElementById("calcButtonL8E3").addEventListener('click', function () {
                var a = getMatrix("matrix1L8E3", size, size);
                var b = getMatrix("matrix2L8E3", size, size);

                printMatrix("matrixAnswerL8E3", multMatrix(a, b));
            });
        }
    }

    button4.onclick = function () {
        var input1 = document.getElementById("inputL8E4_1").value - 0;
        var input2 = document.getElementById("inputL8E4_2").value - 0;

        if (input1 && input1 >= 1 && input2 && input2 >= 1) {
            var sizeX = input1;
            var sizeY = input2;

            genMatrixInputs("L8E4", 1, sizeX, sizeY);

            addAnswer(8, 4);

            document.getElementById("calcButtonL8E4").addEventListener('click', function () {
                var a = getMatrix("matrix1L8E4", sizeX, sizeY);

                document.getElementById("outputL8E4").value = modulMatrix(a);
            });
        }
    }
}
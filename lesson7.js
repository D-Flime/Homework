function lesson7() {
    addLesson("Math Sqr Matrix");
    for (var i = 1; i <= 4; i++) {
        addExercise(7, i, 1);
    }

    var button1 = document.getElementById("buttonL7E1");	//plusMatrix
    var button2 = document.getElementById("buttonL7E2");	//minusMatrix
    var button3 = document.getElementById("buttonL7E3");	//multMatrix
    var button4 = document.getElementById("buttonL7E4");	//modulMatrix

    button1.onclick = function () {
        var input = document.getElementById("inputL7E1_1").value - 0;

        if (input && input >= 1) {
            var size = input;

            genMatrixInputs("L7E1", 2, size, size);

            document.getElementById("calcButtonL7E1").addEventListener('click', function () {
                var a = getMatrix("matrix1L7E1", size, size);
                var b = getMatrix("matrix2L7E1", size, size);

                printMatrix("matrixAnswerL7E1", plusMatrix(a, b));
            });
        }
    }

    button2.onclick = function () {
        var input = document.getElementById("inputL7E2_1").value - 0;

        if (input && input >= 1) {
            var size = input;

            genMatrixInputs("L7E2", 2, size, size);

            document.getElementById("calcButtonL7E2").addEventListener('click', function () {
                var a = getMatrix("matrix1L7E2", size, size);
                var b = getMatrix("matrix2L7E2", size, size);

                printMatrix("matrixAnswerL7E2", minusMatrix(a, b));
            });
        }
    }

    button3.onclick = function () {
        var input = document.getElementById("inputL7E3_1").value - 0;

        if (input && input >= 1) {
            var size = input;

            genMatrixInputs("L7E3", 2, size, size);

            document.getElementById("calcButtonL7E3").addEventListener('click', function () {
                var a = getMatrix("matrix1L7E3", size, size);
                var b = getMatrix("matrix2L7E3", size, size);

                printMatrix("matrixAnswerL7E3", multMatrix(a, b));
            });
        }
    }

    button4.onclick = function () {
        var input = document.getElementById("inputL7E4_1").value - 0;

        if (input && input >= 1) {
            var size = input;

            genMatrixInputs("L7E4", 2, size, size);

            document.getElementById("calcButtonL7E4").addEventListener('click', function () {
                var a = getMatrix("matrix1L7E4", size, size);
                var b = getMatrix("matrix2L7E4", size, size);

                printMatrix("matrixAnswerL7E4", modulMatrix(a, b));
            });
        }
    }
}
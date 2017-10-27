//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
//===== ===== ===== ===== Функции создания меню ===== ===== =====
//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

function addLesson(lessonName) {
    var head = document.getElementById("head");
    var content = document.getElementById("content");
	
    var headElem = document.createElement("div");
    headElem.setAttribute("class", "header-elem");
    headElem.setAttribute("data-content-id", "lesson_" + lessons);
    headElem.innerHTML = "L" + lessons + ". " + lessonName;
    head.appendChild(headElem);
	
    var contentElem = document.createElement("div");
    contentElem.setAttribute("class", "content-elem hide");
    contentElem.setAttribute("id", "lesson_" + lessons);
    content.appendChild(contentElem);
	
    lessons++;
}

function addExercise(lesson, slot, inputNum) {
    var content = document.getElementById("lesson_" + lesson);
    var exercise = document.createElement("div");
    exercise.setAttribute("class", "exercise");
    content.appendChild(exercise);
    var exeTitle = document.createElement("h3");
    exeTitle.innerHTML = "Ex" + slot + ". ";
    exercise.appendChild(exeTitle);
    for (var i = 1; i <= inputNum; i++) {
        var inText = document.createElement("span");
        inText.innerHTML = "Input the number: ";
        exercise.appendChild(inText);
        var input = document.createElement("input");
        input.setAttribute("id", "inputL" + lesson + "E" + slot + "_" + i);
        input.setAttribute("type", "text");
        exercise.appendChild(input);
        if (i == inputNum) {
            var button = document.createElement("input");
            button.setAttribute("id", "buttonL" + lesson + "E" + slot);
            button.setAttribute("type", "button");
            button.setAttribute("value", "Enter");
            exercise.appendChild(button);
        }
        var newLine = document.createElement("br");
        exercise.appendChild(newLine);
    }
    var answerBlock = document.createElement("div");
    answerBlock.setAttribute("id", "answerL" + lesson + "E" + slot);
    answerBlock.setAttribute("class", "answer");
    exercise.appendChild(answerBlock);
}

function addAnswer(lesson, slot) {
    var answerBlock = document.getElementById("answerL" + lesson + "E" + slot);
    var outText = document.createElement("span");
    outText.innerHTML = "Answer: ";
    answerBlock.appendChild(outText);
    var output = document.createElement("input");
    output.setAttribute("id", "outputL" + lesson + "E" + slot);
    output.setAttribute("type", "text");
    output.setAttribute("readonly", true);
    answerBlock.appendChild(output);
}

function addClass(elem, _class) {
    var arr = elem.className.split(" ");
    if (!(arr.indexOf(_class) > -1)) {
        arr.push(_class);
        elem.className = arr.join(" ");
    }
};

function removeClass(elem, _class) {
    var arr = elem.className.split(" ");
    if (arr.indexOf(_class) > -1) {
        arr.splice(arr.indexOf(_class), 1);
        elem.className = arr.join(" ");
    }
};

//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
//===== ===== ===== ===== Вспомогательные функции ===== ===== =====
//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

function randomNumber(min, max) {
    var num = min - 0.5 + Math.random() * (max - min + 1);
    num = Math.round(num);
    return num;
}

//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
//===== ===== ===== ===== Функции матриц ===== ===== ===== =====
//===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

function genMatrixInputs(elemId, num, sizeX, sizeY) {
    var str = '';
    var inputValue;
    for (var n = 1; n <= num; n++) {
        str += '<div id="matrix' + n + elemId + '"><span> Matrix #' + n + '</span></br>';
        for (var i = 0; i < sizeX; i++) {
            for (var j = 0; j < sizeY; j++) {
                inputValue = randomNumber(1, 9);
                if (document.getElementById("matrix" + n + elemId + "Elem(" + i + ";" + j + ")") != null) {
                    inputValue = document.getElementById("matrix" + n + elemId + "Elem(" + i + ";" + j + ")").value - 0;
                }
                str += '<input id="matrix' + n + elemId + 'Elem(' + i + ';' + j + ')" type="text" size="1" maxlength="2" value="' + inputValue + '" />';
            }
            str += '</br>';
        }
        str += '</div>';
    }
    str += '<input id="calcButton' + elemId + '" type="button" value="Calculation" /></br>';
    str += '<div id="matrixAnswer' + elemId + '"></div>';
    document.getElementById("answer" + elemId).innerHTML = str;
}

function getMatrix(elemId, sizeX, sizeY) {
    var arr = [];
    for (var i = 0; i < sizeX; i++) {
        arr[i] = [];
        for (var j = 0; j < sizeY; j++) {
            arr[i][j] = document.getElementById(elemId + "Elem(" + i + ";" + j + ")").value - 0;
        }
    }
    return arr;
}

function printMatrix(elemId, arr) {
    var str = '<span>=== Answer ===</span></br>';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            str += '<input type="text" size="1" readonly value="' + arr[i][j] + '">';
        }
        str += '</br>';
    }
    document.getElementById(elemId).innerHTML = str;
}

function plusMatrix(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr[i] = [];
        for (var j = 0; j < a[i].length; j++) {
            arr[i][j] = a[i][j] + b[i][j];
        }
    }
    return arr;
}

function minusMatrix(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr[i] = [];
        for (var j = 0; j < a[i].length; j++) {
            arr[i][j] = a[i][j] - b[i][j];
        }
    }
    return arr;
}

function multMatrix(a, b) {
    var arr = [];
	var s = 0;
    for (var i = 0; i < a.length; i++) {
        arr[i] = [];
        for (var j = 0; j < a[i].length; j++) {
			s = 0;
            for (var k = 0; k < a[i].length; k++) {
				s += a[i][k] * b[k][j];
			};
			arr[i][j] = s;
        }
    }
    return arr;
}

function modulMatrix(a) {
    var modul = 0, sum;
    for (var i = 0; i < a.length; i++) {
        sum = 0;
        for (var j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        if (sum > modul) {
            modul = sum;
        }
    }
    return modul;
}


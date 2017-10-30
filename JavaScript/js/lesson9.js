//===== ===== ===== Ресурсная часть ===== ===== =====

const partsOfLine = 3;		//Кол-во элементов в линии для победы
var xoField = [];
var fieldSize = 0;
var moveCounter = 1;
var users = {};
var gamer_1, gamer_2;

//===== ===== ===== Вспомогательные функции ===== ===== =====

function createXOGameField (elem, size) {
	//Удаляем предыдущее поле
	elem.innerHTML = '';
	//Запоминаем размер поля
	fieldSize = size;
	//Заполняем матрицу в памяти
	xoField = [];
	for (var i = 0; i < fieldSize; i++) {
		xoField[i] = [];
		for (var j = 0; j < fieldSize; j++) {
			xoField[i][j] = null;
		}
	}
	//Создаем матрицу на странице
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			var matrixElem = document.createElement('input');
			matrixElem.setAttribute('type', 'text');
			matrixElem.setAttribute('class', 'matrix-elem');
			matrixElem.setAttribute('maxlength', 1);
			elem.appendChild(matrixElem);
		}
		elem.innerHTML += '</br>';
	}
}

function gamersRegistration (gamer1, gamer2) {
	var gamers = [gamer1, gamer2];
	
	for (var i = 0; i < gamers.length; i++) {
		//Проверка на ИИ
		if (!gamers[i]) {gamers[i] = 'Hard_AI';}
		//Проверка на наличее игрока в памяти
		if (!users[gamers[i]]) {
			users[gamers[i]] = {name: gamers[i], gameCount: 0, winCount: 0};
		}
	}
	//Сохраняем имена игроков
	gamer_1 = gamers[0];
	gamer_2 = gamers[1];
	//Засчитываем участие в игре
	users[gamer_1].gameCount++;
	users[gamer_2].gameCount++;
}

function gameLogic (xoField) {
	var xCounter = 0;
	var oCounter = 0;
	//Проверка по горизонталям
	for (var i = 0; i < fieldSize; i++) {
		for (var j = 0; j < fieldSize; j++) {
			if (xoField[i][j] == 1) {
				xCounter++;
				oCounter = 0;
			}
			if (xoField[i][j] == 0) {
				xCounter = 0;
				oCounter++;
			}
			if (xoField[i][j] === null) {
				xCounter = 0;
				oCounter = 0;
			}
			if (xCounter == partsOfLine) {
				return 1;
			} 
			if (oCounter == partsOfLine) {
				return 0;
			} 
		}
	}
	//Проверка по вертикалям
	for (var i = 0; i < fieldSize; i++) {
		for (var j = 0; j < fieldSize; j++) {
			if (xoField[j][i] == 1) {
				xCounter++;
				oCounter = 0;
			}
			if (xoField[j][i] == 0) {
				xCounter = 0;
				oCounter++;
			}
			if (xoField[j][i] === null) {
				xCounter = 0;
				oCounter = 0;
			}
			if (xCounter == partsOfLine) {
				return 1;
			} 
			if (oCounter == partsOfLine) {
				return 0;
			} 
		}
	}
	//Проверка по диагонали		(исправить)
	for (var i = 0; i < fieldSize; i++) {
		for (var j = 0; j < fieldSize; j++) {
			if (xoField[i][j + i] == 1) {
				xCounter++;
				oCounter = 0;
			}
			if (xoField[i][j + i] == 0) {
				xCounter = 0;
				oCounter++;
			}
			if (xoField[i][j + i] === null) {
				xCounter = 0;
				oCounter = 0;
			}
			if (xCounter == partsOfLine) {
				return 1;
			} 
			if (oCounter == partsOfLine) {
				return 0;
			} 
		}
	}
	//Проверка на ничью
	if (moveCounter > fieldSize * fieldSize) {return 2;}
	//Ничего не произошло
	return 3;
}

function checkingMove (fieldElem, output, moveResult) {
	switch(moveResult) {
		case 0:		//Победа второго игрока
			for (var i = 0; i < fieldElem.length; i++) {
				fieldElem[i].setAttribute('disabled', true);
			}
			alert(users[gamer_2].name + ' is a winner!');
			users[gamer_2].winCount++;
			output.value = 'GC: ' + users[gamer_2].gameCount + '; WC: ' + users[gamer_2].winCount;
			break;
		case 1:		//Победа первого игрока
			for (var i = 0; i < fieldElem.length; i++) {
				fieldElem[i].setAttribute('disabled', true);
			}
			alert(users[gamer_1].name + ' is a winner!');
			users[gamer_1].winCount++;
			output.value = 'GC: ' + users[gamer_1].gameCount + '; WC: ' + users[gamer_1].winCount;
			break;
		case 2:		//Ничья
			for (var i = 0; i < fieldElem.length; i++) {
				fieldElem[i].setAttribute('disabled', true);
			}
			alert('Draw!');
			output.value = 'Draw!';
			break;
		default:
			break;
	}
}

//===== ===== ===== Главная функция ===== ===== =====

function lesson9() {
	//Заголовок задания
	const exerciseName = 'XO - Game';
	//Добавляем урок
	addLesson('XO - Game');
	//Добавляем задание
	addExercise(9, 1, 3);
	//Добавляем поле ответа
	addMatrixAnswer(9, 1, 1);
	addAnswer(9, 1);
	
	var contents = document.getElementsByClassName('content-elem');
	var exercises = contents[8].getElementsByClassName('exercise')[0];
	var answerField = exercises.getElementsByClassName('answer')[0];
	var matrixField = answerField.getElementsByClassName('matrix-field')[0];
	
	exercises.getElementsByClassName('enter-button')[0].onclick = function () {
		var output = answerField.getElementsByClassName('output-field')[0];
		//Считываем данные
		var size = exercises.getElementsByClassName('input-field')[0].value - 0;
		var gamer1 = exercises.getElementsByClassName('input-field')[1].value + '';
		var gamer2 = exercises.getElementsByClassName('input-field')[2].value + '';
		//Сбрасываем счетчик ходов
		moveCounter = 1;
		//Создаем игровое поле
		if (size >= 3 && size <= 15) {
			createXOGameField(matrixField, size);
		} else {
			alert("Game field can't be less 3 and more 15!");
			return;
		}
		//Регистрируем игроков
		if (gamer1 !== gamer2) {
			gamersRegistration(gamer1, gamer2);
		} else {
			alert("Gamer's nicknames must be different!");
			return;
		}
		//Проявляем игровое поле
		removeClass(answerField, 'hide');
		addClass(answerField, 'show');
		//Назначаем "слушателей" на ячейки игрового поля
		var xoFieldElems = matrixField.getElementsByClassName('matrix-elem');
		
		for (var i = 0; i < xoFieldElems.length; i++) {
			(function(i, output) {
				xoFieldElems[i].addEventListener('keyup', function(event) {
					//Проверка нажатой клавиши
					switch(event.keyCode) {
						case 88: 		//Нажатие "Х"
							if (moveCounter % 2 != 0) {
								this.value = 'X';
								this.setAttribute('disabled', true);
								xoField[Math.floor(i / fieldSize)][Math.floor(i % fieldSize)] = 1;
								moveCounter++;
								checkingMove(xoFieldElems, output, gameLogic(xoField));
							} else {
								this.value = '';
							}
							break;
						case 79:		//Нажатие "О"
							if (moveCounter % 2 == 0) {
								this.value = 'O';
								this.setAttribute('disabled', true);
								xoField[Math.floor(i / fieldSize)][Math.floor(i % fieldSize)] = 0;
								moveCounter++;
								checkingMove(xoFieldElems, output, gameLogic(xoField));
							} else {
								this.value = '';
							}
							break;
						default:
							this.value = '';
							console.log(xoFieldElems);
					}
				});
			})(i, output);
		}
	}
}
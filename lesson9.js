var fieldSize = 0;
var xo = [];

var moveCounter = 1;

function createXOGameField() {
    var content = document.getElementById("answerL9E1");
	var gameField = document.createElement('div');
	gameField.setAttribute('class', 'xo-gameField hide');
	gameField.setAttribute('id', 'XOgameField');
	content.appendChild(gameField);
	var title = document.createElement('span');
	title.innerHTML = 'XO - Game';
	gameField.appendChild(title);
}

function createXOregistrarionField(num) {
    var content = document.getElementById("answerL9E1");
	var registrationField = document.createElement('div');
	registrationField.setAttribute('class', 'xo-usersInput hide');
	registrationField.setAttribute('id', 'XORegistrationField');
	content.appendChild(registrationField);
	for (var i = 1; i <= num; i++) {
		var gamerText = document.createElement('span');
		gamerText.innerHTML = 'Player ' + i + ': ';
		registrationField.appendChild(gamerText);
		var player = document.createElement('input');
		player.setAttribute('id', 'gamer' + i);
		player.setAttribute('type', 'text');
		registrationField.appendChild(player);
		registrationField.innerHTML += '</br>';
	}
	var startButton = document.createElement('input');
	startButton.setAttribute('type', 'button');
	startButton.setAttribute('id', 'XORegistrationButton');
	startButton.setAttribute('value', 'New Game');
	registrationField.appendChild(startButton);
}

function xoGameLogic(xoField) {
	//Условия Победы
	for (var i = 0; i < fieldSize; i++) {
		for (var j = 0; j < fieldSize - 2; j++) {
			if (xoField[i][j] == xoField[i][j + 1] && xoField[i][j] == xoField[i][j + 2] && xoField[i][j] != null) {return xoField[i][j];};	//По строчкам
		}
	}
	for (var i = 0; i < fieldSize - 2; i++) {
		for (var j = 0; j < fieldSize; j++) {
			if (xoField[i][j] == xoField[i + 1][j] && xoField[i][j] == xoField[i + 2][j] && xoField[i][j] != null) {return xoField[i][j];};	//По столбцам
		}
	}
	for (var i = 0; i < fieldSize - 2; i++) {
		for (var j = 0; j < fieldSize - 2; j++) {
			if (xoField[i][j] == xoField[i + 1][j + 1] && xoField[i][j] == xoField[i + 2][j + 2] && xoField[i][j] != null) {return xoField[i][j];};	//По диагонали
		}
	}
	for (var i = fieldSize - 1; i > 2; i--) {
		for (var j = 0; j < fieldSize - 2; j++) {
			if (xoField[i][j] == xoField[i - 1][j + 1] && xoField[i][j] == xoField[i - 2][j + 2] && xoField[i][j] != null) {return xoField[i][j];};	//По обратной диагонали
		}
	}
	//Условия Ничьей
	if (moveCounter >= fieldSize * fieldSize + 1) {return 2};
	return 3;
}

function firstTurn(x, y) {
	//Первый ряд
	if (y == 0) {
		if (x == 0) {
			if (xo[x + 1][y] == 1 || xo[x + 1][y + 1] == 1 || xo[x][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else if (x == fieldSize - 1) {
			if (xo[x - 1][y] == 1 || xo[x - 1][y + 1] == 1 || xo[x][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else {
			if (xo[x - 1][y] == 1 || xo[x - 1][y + 1] == 1 || xo[x][y + 1] == 1 || xo[x + 1][y] == 1 || xo[x + 1][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		}
	}
	//Последний ряд
	if (y == fieldSize - 1) {
		if (x == 0) {
			if (xo[x + 1][y] == 1 || xo[x + 1][y - 1] == 1 || xo[x][y - 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else if (x == fieldSize - 1) {
			if (xo[x - 1][y] == 1 || xo[x - 1][y - 1] == 1 || xo[x][y - 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else {
			if (xo[x + 1][y] == 1 || xo[x + 1][y - 1] == 1 || xo[x][y - 1] == 1 || xo[x - 1][y] == 1 || xo[x - 1][y - 1] == 1) {
				return true;
			} else {
				return false;
			}
		}
	}
	//Первый столбец
	if (x == 0) {
		if (y == 0) {
			if (xo[x + 1][y] == 1 || xo[x + 1][y + 1] == 1 || xo[x][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else if (y == fieldSize - 1) {
			if (xo[x + 1][y] == 1 || xo[x + 1][y - 1] == 1 || xo[x][y - 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else {
			if (xo[x][y - 1] == 1 || xo[x + 1][y - 1] == 1 || xo[x + 1][y] == 1 || xo[x + 1][y + 1] == 1 || xo[x][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		}
	}
	//Последний столбец
	if (x == fieldSize - 1) {
		if (y == 0) {
			if (xo[x - 1][y] == 1 || xo[x - 1][y + 1] == 1 || xo[x][y + 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else if (y == fieldSize - 1) {
			if (xo[x - 1][y] == 1 || xo[x - 1][y - 1] == 1 || xo[x][y - 1] == 1) {
				return true;
			} else {
				return false;
			}
		} else {
			if (xo[x - 1][y] == 1 || xo[x - 1][y + 1] == 1 || xo[x][y + 1] == 1 || xo[x - 1][y + 1] == 1 || xo[x + 1][y] == 1) {
				return true;
			} else {
				return false;
			}
		}
	}
	//Общее положение
	if ((xo[x - 1][y - 1] == 1 || xo[x - 1][y] == 1 || xo[x][y - 1] == 1 || 
		xo[x + 1][y + 1] == 1 || xo[x + 1][y] == 1 || xo[x][y + 1] == 1 ||
		xo[x + 1][y - 1] == 1 || xo[x - 1][y + 1] == 1) && moveCounter == 3) {
		return true;
	}
	return false;
}

function AI(gamer) {
	var xoCopy = [];
	for (var i = 0; i < xo.length; i++) {
		xoCopy[i] = [];
		for (var j = 0; j < xo[i].length; j++) {
			xoCopy[i][j] = xo[i][j];
		}
	}
	for (var i = 0; i < xoCopy.length; i++) {
		for (var j = 0; j < xoCopy[i].length; j++) {
			if (xoCopy[i][j] == null) {
				if (gamer.name == 'AI_1') {		//Ход первого ИИ
					xoCopy[i][j] == 1;
					if (xoGameLogic(xoCopy) == 1) {
						for (var a = 0; a < xoCopy.length; a++) {
							for (var b = 0; b < xoCopy[a].length; b++) {
								xo[a][b] = xoCopy[a][b];
								return;
							}
						}
					} else {
						xoCopy[i][j] == 0;
						if (xoGameLogic(xoCopy) == 0) {
							xoCopy[i][j] == 1;
							for (var a = 0; a < xoCopy.length; a++) {
								for (var b = 0; b < xoCopy[a].length; b++) {
									xo[a][b] = xoCopy[a][b];
									return;
								}
							}
						}
					}
					xo[i][j] = 1;
					moveCounter++;
				} else if (gamer.name == 'AI_2') {		//Ход второго ИИ
					xoCopy[i][j] == 0;
					if (xoGameLogic(xoCopy) == 1) {
						for (var a = 0; a < xoCopy.length; a++) {
							for (var b = 0; b < xoCopy[a].length; b++) {
								xo[a][b] = xoCopy[a][b];
								return;
							}
						}
					} else {
						xoCopy[i][j] == 1;
						if (xoGameLogic(xoCopy) == 0) {
							xoCopy[i][j] == 0;
							for (var a = 0; a < xoCopy.length; a++) {
								for (var b = 0; b < xoCopy[a].length; b++) {
									xo[a][b] = xoCopy[a][b];
									return;
								}
							}
						}
					}
					xo[i][j] = 0;
					moveCounter++;
				}
			}
		}
	}
}

function lesson9() {
	addLesson("XO-Game!");
	addExercise(9, 1, 1);
	createXOregistrarionField(2);
	createXOGameField();
	
	
	//Кнопка размера поля
	document.getElementById('buttonL9E1').onclick = function() {
		var gameField = document.getElementById('XOgameField');
		var size = document.getElementById('inputL9E1_1').value - 0;
		
		if (!size || size > 20) {
			alert("Size of the field can't be more then 20!");
			return;
		}
		
		gameField.innerHTML = '';	//Обнуляем поле
		fieldSize = size;	//Устанавливаем размер
		xo = [];	//Создаем матрицу игрового поля
		for (var i = 0; i < fieldSize; i++) {
			xo[i] = [];
			for (var j = 0; j < fieldSize; j++) {
				xo[i][j] = null;
			}
		}
		//Создаем игровое поле
		for (var i = 0; i < fieldSize; i++) {
			var row = document.createElement('div');
			gameField.appendChild(row);
			for (var j = 0; j < fieldSize; j++) {
				var inputField = document.createElement('input');
				inputField.setAttribute('class', 'xo-input');
				inputField.setAttribute('type', 'text');
				inputField.setAttribute('disabled', 'true');
				gameField.appendChild(inputField);
			}
		}
		//Скрываем игровое поле
		removeClass(document.getElementById('XOgameField'), 'show');
		addClass(document.getElementById('XOgameField'), 'hide');
		//Раскрываем поле регистрации
		removeClass(document.getElementById('XORegistrationField'), 'hide');
		addClass(document.getElementById('XORegistrationField'), 'show');
	}
	
	//Кнопка старта
	document.getElementById('XORegistrationButton').onclick = function() {
		var users = {};	//Создаем игроков
		xoField = document.getElementsByClassName('xo-input');	//Запоминаем игровое поле
		var gamer1, gamer2;
		gamer1 = document.getElementById('gamer1').value;
		gamer2 = document.getElementById('gamer2').value;
		var gameField = document.getElementById('XOgameField');
		//Регистрируем AI
		/*if (!gamer1) {
			gamer1 = 'AI_1';
			if (!users[gamer1]) {
				users[gamer1] = {name: gamer1, gameCount: 0, winCount: 0};
			}
		}
		if (!gamer2) {
			gamer2 = 'AI_2';
			if (!users[gamer2]) {
				users[gamer2] = {name: gamer1, gameCount: 0, winCount: 0};
			}
		}*/
		//Регистрируем игроков
		if (gamer1 && gamer2 && gamer1 !== gamer2) {
			if (!users[gamer1]) {
				users[gamer1] = {name: gamer1, gameCount: 0, winCount: 0};
			}
			if (!users[gamer2]) {
				users[gamer2] = {name: gamer2, gameCount: 0, winCount: 0};
			}
			for (var i = 0; i < xoField.length; i++) {
				//Удаление disabled с ячеек
				xoField[i].removeAttribute('disabled');
				//Установка пустых значений
				xoField[i].value = '';
				//Очистка игрового массива
				xo[Math.floor(i / fieldSize)][Math.floor(i % fieldSize)] = null;
				//Обновление счетчика
				moveCounter = 1;
			}
			//Обновление счетчика игр
			users[gamer1].gameCount++;
			users[gamer2].gameCount++;
			//Раскрываем игровое поле
			removeClass(gameField, "hide");
			addClass(gameField, "show");
			//Скрываем поле регистрации
			removeClass(document.getElementById('XORegistrationField'), 'show');
			addClass(document.getElementById('XORegistrationField'), 'hide');
		}
		//Ход игры
		for (var i = 0; i < xoField.length; i++) {
			(function(i, users) {
				xoField[i].addEventListener('keyup', function(event) {
					switch(event.keyCode) {
						case 88: 	//X
							if ((moveCounter % 2 != 0 && moveCounter != 3) || (moveCounter == 3 && !firstTurn(Math.floor(i / fieldSize), Math.floor(i % fieldSize)))) {
								moveCounter++;
								this.value = 'X';
								this.setAttribute('disabled', 'true');
								xo[Math.floor(i / fieldSize)][Math.floor(i % fieldSize)] = 1;
							} else {
								this.value = '';
							}
							break;
						case 79: 	//O
							if ((moveCounter % 2 == 0)) {
								moveCounter++;
								this.value = 'O';
								this.setAttribute('disabled', 'true');
								xo[Math.floor(i / fieldSize)][Math.floor(i % fieldSize)] = 0;
							} else {
								this.value = '';
							}
							break;
						default:
							this.value = '';
							break;
					}
					//Окончание игры
					switch(xoGameLogic(xo)) {
						case 0: 	//Победа "О"
							for (var a = 0; a < xoField.length; a++) {
								xoField[a].setAttribute('disabled', 'true');
							}
							users[gamer2].winCount++;
							alert(users[gamer2].name + ' победил!');
							console.log(users);
							break;
						case 1: 	//Победа "Х"
							for (var a = 0; a < xoField.length; a++) {
								xoField[a].setAttribute('disabled', 'true');
							}
							users[gamer1].winCount++;
							alert(users[gamer1].name + ' победил!');
							console.log(users);
							break;
						case 2: 	//Ничья
							alert('Ничья!');
							break;
						default:
							break;
					}
				});
			})(i, users);
		}
	}
};
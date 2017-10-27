var lessons = 1;

function mainMenu() {
    var heads = document.getElementsByClassName("header-elem");
    var contents = document.getElementsByClassName("content-elem");
    for (var i = 0; i < heads.length; i++) {
        heads[i].addEventListener("click", function () {
            for (var j = 0; j < heads.length; j++) {
                removeClass(heads[j], "header-selected");
            }
            addClass(this, "header-selected");
            for (var j = 0; j < heads.length; j++) {
                removeClass(contents[j], "show");
                addClass(contents[j], "hide");
            }
            var content = document.getElementById(this.getAttribute("data-content-id"));
            removeClass(content, "hide");
            addClass(content, "show");
        });
    }
}

window.onload = function () {
    lesson1();
    lesson2();
    lesson3();
    lesson4();
    lesson5();
    lesson6();
    lesson7();
    lesson8();
	lesson9();
    mainMenu();
};
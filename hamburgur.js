// HAM, BUR, GER 버튼의 인터랙션들
var addstack_list = document.querySelectorAll(".btn-addstack");
var hamburgur_container = document.querySelector("#container-hamburgur");
var audio_ham = document.getElementById("audio-ham");
var audio_bur = document.getElementById("audio-bur");
var audio_gur = document.getElementById("audio-gur");
addstack_list.forEach(function (addstack) {
    addstack.addEventListener("mouseover", function () { this.style.color = "#fff"; });
    addstack.addEventListener("mouseout", function () { this.style.color = "#ccc"; });
    addstack.addEventListener("mousedown", function () { this.style.color = "#666"; });
    addstack.addEventListener("mouseup", function () { this.style.color = "#fff"; });
    addstack.addEventListener("click", function () {
        if (addstack.classList.contains("add-ham")) {
            addImageInHamburgurContainer("ham");
            audio_ham.play();
        }
        else if (addstack.classList.contains("add-bur")) {
            addImageInHamburgurContainer("bur");
            audio_bur.play();
        }
        else if (addstack.classList.contains("add-gur")) {
            addImageInHamburgurContainer("gur");
            audio_gur.play();
        }
        else {
            console.log("버튼에 ham도 bur도 gur도 없답니다...");
        }
    });
});
function addImageInHamburgurContainer(hamburgur_type) {
    if (hamburgur_container instanceof Element) {
        hamburgur_container.insertAdjacentHTML("beforeend", "<img class=\"img-hamburgur img-".concat(hamburgur_type, "\" src=\"./resource/img/").concat(hamburgur_type, ".png\" alt=\"").concat(hamburgur_type, "\">"));
    }
    else {
        console.log("hamburgur_container\uAC00 Element \uD0C0\uC785\uC774 \uC544\uB2C8\uB78D\uB2C8\uB2E4. (hamburgur_container: ".concat(hamburgur_container, ")"));
    }
}

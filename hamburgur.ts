// HAM, BUR, GER 버튼의 인터랙션들
const addstack_list = document.querySelectorAll(".btn-addstack");
const hamburgur_container = document.querySelector("#container-hamburgur");
const audio_ham = document.getElementById("audio-ham") as HTMLAudioElement;
const audio_bur = document.getElementById("audio-bur") as HTMLAudioElement;
const audio_gur = document.getElementById("audio-gur") as HTMLAudioElement;

addstack_list.forEach((addstack) => {
    addstack.addEventListener("mouseover", function () {this.style.color = "#fff";});
    addstack.addEventListener("mouseout", function () {this.style.color = "#ccc";});
    addstack.addEventListener("mousedown", function () {this.style.color = "#666";});
    addstack.addEventListener("mouseup", function () {this.style.color = "#fff";});
    addstack.addEventListener("click", function () {
        if (addstack.classList.contains("add-ham")) {
            addImageInHamburgurContainer("ham");
            audio_ham.play();
        } else if (addstack.classList.contains("add-bur")) {
            addImageInHamburgurContainer("bur");
            audio_bur.play();
        } else if (addstack.classList.contains("add-gur")) {
            addImageInHamburgurContainer("gur");
            audio_gur.play();
        } else {
            console.log("버튼에 ham도 bur도 gur도 없답니다...");
        }
    });
});

function addImageInHamburgurContainer(hamburgur_type:String) {
    if (hamburgur_container instanceof Element) {
        hamburgur_container.insertAdjacentHTML("beforeend",
            `<img class="img-hamburgur img-${hamburgur_type}" src="./resource/img/${hamburgur_type}.png" alt="${hamburgur_type}">`)
    } else {
        console.log(`hamburgur_container가 Element 타입이 아니랍니다. (hamburgur_container: ${hamburgur_container})`);
    }
}
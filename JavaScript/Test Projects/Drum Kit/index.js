let btns = document.querySelectorAll(".drum");

for (let btn of btns) { 
    let btn_text = btn.innerHTML;   
    btn.addEventListener("click", function(event) {
        makeSound(btn_text);
        buttonAnimation(btn_text);
    }); 
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key_letter) {
    let activeButton = document.querySelector("." + key_letter);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(key_letter) {
    switch (key_letter) {
        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            let bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;
        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(event.key);
    }
}

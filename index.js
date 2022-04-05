
//detecting button press

let numberOfButtons = document.querySelectorAll('.drum').length;

for(i=0; i<numberOfButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });
};

// detecting keyboard press

document.addEventListener("keydown", function(event){
        makeSound(event.key)
        buttonAnimation(event.key);
    });

function makeSound(key){
    switch (key) {
            case 'w':
                let tomFirst = new Audio('./sounds/tom-1.mp3');
                tomFirst.play()
                break;
            case 'a':
                let tomSecond = new Audio('./sounds/tom-2.mp3');
                tomSecond.play()
                break;
            case 's':
                let tomThird = new Audio('./sounds/tom-3.mp3');
                tomThird.play()
                break;
            case 'd':
                let tomFourth = new Audio('./sounds/tom-4.mp3');
                tomFourth.play()
                break;
            case 'j':
                let snare = new Audio('./sounds/snare.mp3');
                snare.play()
                break;
            case 'k':
                let crash = new Audio('./sounds/crash.mp3');
                crash.play()
                break;
            case 'l':
                let kickBass = new Audio('./sounds/kick-bass.mp3');
                kickBass.play()
                break;
    };
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
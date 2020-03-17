// mouse click function detection
var numberOfLoops = document.querySelectorAll(".drum").length;
for(var i=0; i< numberOfLoops; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var actualButton = this.innerHTML;
    pressFunc(actualButton);
    bottonAnimation(actualButton);
    
});
};

// keyboard press function detection
document.addEventListener("keypress", function(event){
    pressFunc(event.key);
    bottonAnimation(event.key);
});
function pressFunc (key){
    switch (key) {
        case "w":            
            var sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play(); 
        break;
        case "a":            
            var sound2 = new Audio("sounds/tom-2.mp3");
            sound2.play(); 
        break;
        case "s":            
            var sound2 = new Audio("sounds/tom-3.mp3");
            sound2.play(); 
        break;
        case "d":            
            var sound3 = new Audio("sounds/tom-4.mp3");
            sound3.play(); 
        break;
        case "j":            
            var sound4 = new Audio("sounds/snare.mp3");
            sound4.play(); 
        break;
        case "k":            
            var sound5 = new Audio("sounds/crash.mp3");
            sound5.play(); 
        break;
        case "l":            
            var sound6 = new Audio("sounds/kick-bass.mp3");
            sound6.play(); 
        break;
        default:
            console.log( actualButton );
            break;

    }
}


// botton animation function
function bottonAnimation (currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed")}, 200)
}
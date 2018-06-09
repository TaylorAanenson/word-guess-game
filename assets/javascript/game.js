// Array of bands
var bands = ['green day','my chemical romance','nickelback','red hot chili peppers','linkin park','audioslave','papa roach','hoobastank','incubus','jet','system of a down','disturbed','evanescence','three days grace','godsmack','p o d','nine inch nails','incubus','jimmy eat world','foo fighters','staind','creed','crossfade','puddle of mudd','chevelle','seether','breaking benjamin','tool','the white stripes','queens of the stone age','default','3 doors down','paramore','afi','blink  182','sum 41','good charlotte','bullet for my valentine','fall out boy','gorillaz','the killers','radiohead','panic at the disco','alien ant farm','30 seconds to mars','modest mouse','the all american rejects','weezer','all time low','story of the year','yellowcard','the red jumpsuit apparatus','hawthorne heights','bring me the horizon','franz ferdinand'];

// Band randomizer
for (var i=0;i<bands.length;i++){
    var randomBand = bands[Math.floor(Math.random()*bands.length)];
    var newBand = randomBand.replace(/[a-zA-Z0-9]/g,"_");
    document.querySelector('#bands').innerText = newBand;
    if (lossCounter === 0){
        bands.innerText = newBand;
    }
}

function greenDay(x){
    var key = x.key;
    var word = greenDay(g,r,e,e,n,d,a,y);
    x = x.trim().toLowerCase();

    if (key == 'g'){
        bands.innerText(g[0]);
    }else if (key == 'r'){
        guesses.innerText(r);
    }else if (key == 'e'){
        guesses.innerText(e);
    }else if (key == 'n'){
        guesses.innerText(n);
    }else if (key == 'd'){
        guesses.innerText(d);
    }else if (key == 'a'){
        guesses.innerText(a);
    }else if (key == 'y'){
        guesses.innerText(y);
    }
}


// Amount of wins
var winCounter = "";
document.querySelector('#wins').innerText = winCounter;
function counterUp(){
    if (document.querySelector('#bands').innerText = newBand){
        winCounter++;
    }
    document.querySelector('#wins').innerText = winCounter;
}
document.onkeydown = counterUp;

// Guesses
var guesses = [];
var letters = ["Meta","Backspace","Enter","Alt","Shift","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Escape","CapsLock", " "];
var lossCounter = 12;
document.querySelector('#guesses').innerText = lossCounter;
function lettersGuessed(event){
    if (guesses.indexOf(event.key) === -1 && letters.indexOf(event.key) === -1){
        guesses.push(event.key);
    }if (guesses.length == 12){
        guesses = [];
    }
    document.querySelector('#letters').innerText = guesses;
    console.log(guesses)
    if (guesses.push){
        lossCounter--;
    }if (lossCounter == 0){
        lossCounter = 12;
    }
    document.querySelector('#guesses').innerText = lossCounter;
}
document.onkeyup = lettersGuessed;


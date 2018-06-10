// Array of bands
var bands = ['green day','my chemical romance','nickelback','red hot chili peppers','linkin park','audioslave','papa roach','hoobastank','incubus','jet','system of a down','disturbed','evanescence','three days grace','godsmack','p o d','nine inch nails','incubus','jimmy eat world','foo fighters','staind','creed','crossfade','puddle of mudd','chevelle','seether','breaking benjamin','tool','the white stripes','queens of the stone age','default','3 doors down','paramore','afi','blink  182','sum 41','good charlotte','bullet for my valentine','fall out boy','gorillaz','the killers','radiohead','panic at the disco','alien ant farm','30 seconds to mars','modest mouse','the all american rejects','weezer','all time low','story of the year','yellowcard','the red jumpsuit apparatus','hawthorne heights','bring me the horizon','franz ferdinand'];

// Band randomizer
    for (var i=0;i<bands.length;i++){
        var randomBand = bands[Math.floor(Math.random()*bands.length)];
        var newBand = randomBand.replace(/[a-z0-9]/g,"_");
        document.querySelector('#bands').innerText = newBand;
        if (lossCounter === 12){
            document.querySelector('#bands').innerText = newBand;
        }
    function letterRevealer(event){
        var key = event.key;
        if (key == key){
            newBand.replace(/[_]/g,"a-z0-9");
        }
    }
    }
    document.onkeypress = letterRevealer;

// Wins
var winCounter = "";
document.querySelector('#wins').innerText = winCounter;
function counterUp(){
        winCounter++;
    document.querySelector('#wins').innerText = winCounter;
}


// Guesses
var guesses = [];
var letters = ["Meta","Backspace","Enter","Alt","Shift","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Escape","CapsLock", " ",",",".","/",";","'","[","]","=","-","`"];
var lossCounter = 12;
document.querySelector('#guesses').innerText = lossCounter;
function lettersGuessed(event){
    var key = event.key;
    if (guesses.indexOf(event.key) === -1 && letters.indexOf(event.key) === -1){
        guesses.push(event.key);
        lossCounter--;
    }if (lossCounter == 0){
        lossCounter = 12;
    }if (guesses.length == 12){
        guesses = [];
        return newBand;
    }
    document.querySelector('#letters').innerText = guesses;
    console.log(guesses)

    document.querySelector('#guesses').innerText = lossCounter;
}
document.onkeyup = lettersGuessed;


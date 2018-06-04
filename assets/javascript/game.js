var bands = ['green day','my chemical romance','nickelback','red hot chili peppers','linkin park','audioslave','papa roach','hoobastank','incubus','jet','system of a down','disturbed','evanescence','three days grace','godsmack','p.o.d.','nine inch nails','incubus','jimmy eat world','foo fighters','staind','creed','crossfade','puddle of mudd','chevelle','seether','breaking benjamin','tool','the white stripes','queens of the stone age','default','3 doors down','paramore','afi','blink  182','sum 41','good charlotte','bullet for my valentine','fall out boy','gorillaz','the killers','radiohead','panic at the disco','alien ant farm','30 seconds to mars','modest mouse','the all american rejects','weezer','all time low','story of the year','yellowcard','the red jumpsuit apparatus','hawthorne heights','bring me the horizon','franz ferdinand'];

var userInput = prompt('give me a thing');

	var check = bands.indexOf(userInput);

	if (check == -1){
        alert('not inside')
    }else{
        alert('inside')
    }

for (var i=0;i<bands.length;i++){
    var randomBand = bands[Math.floor(Math.random()*bands.length)];
    document.getElementById('bands').innerHTML = randomBand;
}

function addTextToPage(event){
    var key = event.key;
    var letters = document.querySelector('#letters');
    letters.innerText = letters.innerText + key;
}
    document.onkeyup = addTextToPage;
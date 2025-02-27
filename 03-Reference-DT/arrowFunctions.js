console.info("--- ARROW FUNCTIONS ---")

const learing = function(){
    console.log("Learning Js");
}

// Same but in an arrow function
const arrowLearning = () => "Learning Js";
console.log(arrowLearning());

// Arrow Function with parameters
const arrowLearning2 = (language, language2) => `Learning ${language} & ${language2}`;
console.log(arrowLearning2("JavaScript", "Nodejs"));

// In object methods it's better to use regular functions

// Playlist example

const musicReproducer = {
    song : "",
    reproduce: (song) => `Reproducing ${song}`,

    set newSong(song){
        this.song = song;
        console.log(`Adding "${song}"`);
    },
    get getSong(){
        return this.song;
    }
}
musicReproducer.newSong = "Waka Waka";
let currentSong = musicReproducer.getSong;
console.log(currentSong);
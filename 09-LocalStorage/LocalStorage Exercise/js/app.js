// #tweet inputTexarea field
// input submit button
const tweetForm = document.querySelector('#formulario');
const tweetList = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

function eventListeners(){

    tweetForm.addEventListener('submit', addTweet);
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        createList();
    });
}

function addTweet(e){
    e.preventDefault();
    const tweetInput = document.querySelector('#tweet').value;
    
    if(tweetInput === ''){
        error('Field cannot be empty');
    }
    else {
        tweets = [...tweets, {text: tweetInput, id: Date.now()}];
        
        clearList();
        createList();
        restartForm();
    }

}

function error(error) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error');
    const content = document.querySelector('#contenido');
    content.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 2000);
}

function createList() {
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.textContent = 'X';
            btn.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.textContent = tweet.text;
            li.classList.add('list-group-item');
            li.appendChild(btn);
            tweetList.appendChild(li);
        });
    }

    setStorage();
}

function clearList(){
    while(tweetList.firstChild){
        tweetList.removeChild(tweetList.firstChild);
    }
}

function restartForm() {
    const tweetInput = document.querySelector('#tweet');
    tweetInput.value = '';
}

function setStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    clearList();
    createList();
    setStorage();
    restartForm();
}
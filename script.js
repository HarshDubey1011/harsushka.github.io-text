const word =document.getElementById('word');
const endGameEl=document.getElementById('end-game');
const timeEl=document.getElementById('time');
const text =document.getElementById('text');
const scoreEl =document.getElementById('score');
const difficultySelect=document.getElementById('difficulty');
const settings=document.getElementById('settings');
const settingsBtn=document.getElementById('settings-btn');
const settingsForm=document.getElementById('settings-form');

const words=[
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "address",
    "admit",
    "advertise",
    "affect",
    "afford",
    "after",
    "afternoon",
    "again",
    "against",
    "agent",
    "agree",
    "all",
    "allow",
    "almost",
    "along",
    "already",
    "alright",
    "also",
    "although",
    "always",
    "america",
    "amount",
    "another",
    "answer",
    "chairman",
    "chance",
    "change",
    "chap",
    "character",
    "charge",
    "cheap",
    "check",
    "child",
    "choice",
    "choose",
    "Christ",
    "Christmas",
    "church",
    "city",
    "claim",
    "class",
    "clean",
    "clear",
    "client",
    "clock",
    "close",
    "closes",
    "clothe",
    "club",
    "coffee",
    "cold",
    "colleague",
    "collect",
    "college",
    "colour",
    "come",
    "comment",
    "commit",
    "committee",
    "common",
    "community",
    "company",
    "compare",
    "complete",
    "compute",
    "concern",
    "condition",
    "confer",
    "consider",
    "consult",
    "contact",
    "continue",
    "contract",
    "control",
    "converse",
    "corner",
    "correct",
    "cost",
    "could",
    "council",
    "follow",
    "forget",
    "form",
    "fortune",
    "forward",
    "four",
    "france",
    "glass",
    "god",
    "good",
    "goodbye",
    "govern",
    "grand",
    "grant",
    "great",
    "green",
    "ground",
    "group",
    "grow",
    "guess",
    "guy",
    "hair",
    "half",
    "hall",
    "hand",
    "hang",
    "happen",
    "happy",
    "hard",
    "hate",
    "have",
    "head",
    "health",
    "hear",
    "heart",
    "heat",
    "heavy",
    "hell",
    "help",
    "here",
    "high",
    "history",
    "hit",
    "hold",
    "holiday",
    "home",
    "honest",
    "hope",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "hullo",
    "hundred",
    "husband",
    "let",
    "letter",
    "level",
    "lie",
    "life",
    "light",
    "like",
    "likely",
    "limit",
    "line",
    "link",
    "list",
    "listen",
    "little",
    "live",
    "load",
    "local",
    "lock",
    "london",
    "long",
    "look",
    "lord",
    "lose",
    "lot",
    "love",
    "low",
    "luck",
    "lunch",
    "machine",
    "main",
    "major",
    "make",
    "old",
    "once",
    "one",
    "only",
    "open",
    "operate",
    "opportunity",
    "oppose",
    "order",
    "organize",
    "original",
    "other",
    "otherwise",
    "ought",
    "out",
    "over",
    "own",
    "pack",
    "page",
    "paint",
    "pair",
    "paper",
    "paragraph",
    "pardon",
    ]

let randomWord;
let score=0;
let time=10;
let difficulty=localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty') : 'easy';

difficultySelect.value=localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty') : 'easy';

text.focus();
let timeInterval=setInterval(updateTime,1000);
function updateScore(){
    score++;
    scoreEl.innerHTML=score;
}
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)].toLowerCase();;
}
function addWordToDom(){
    randomWord=getRandomWord();
    word.innerHTML=randomWord;
}
function updateTime(){
    time--;
    timeEl.innerHTML=time + 's';
    if(time===0){
        clearInterval(timeInterval);
        gameOver();
    }
}
addWordToDom(); 

function gameOver(){
    endGameEl.innerHTML=`
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick='location.reload()'>Reload</button>
    `
    endGameEl.style.display='flex';
}

text.addEventListener('input',(e)=>{
    let insertedWord=e.target.value;
    insertedWord=insertedWord.toLowerCase();
    if(insertedWord===randomWord){
        updateScore();
        addWordToDom();
        e.target.value='';
        if(difficulty==='hard'){
            time+=2;
        }
        else if(difficulty==='medium'){
            time+=3;
        }
        else{
            time+=5;
        }
        updateTime();
    }
})
settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
});
settingsForm.addEventListener('change',(e)=>{
    difficulty=e.target.value;
    localStorage.setItem('difficulty',difficulty);
})
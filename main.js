
let start = document.querySelector("#start")
let result = document.querySelector("#result")
let lang = document.querySelector("#lang")
let recognition = new webkitSpeechRecognition() || new SpeechRecognition();

lang.addEventListener("change",(e)=>{
    recognition.lang = e.target.value;
})

recognition.interimResults =false
start.addEventListener("click",()=>{
    recognition.start();
})

recognition.addEventListener("audiostart",(e)=>{
    start.innerText ="Listening.."
})

//recognizing audio here
recognition.addEventListener('result', (e)=> {
    let text = '';
    let i = 0;
    while(i < e.results.length) {
        text += e.results[0][0].transcript;
        i++;
    }
    result.innerText = text
})
recognition.addEventListener("audioend",(e)=>{
    start.innerText="Start"
})
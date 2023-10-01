let timerdisplay = document.querySelector('.timerdisplay');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let MilliSeconds =0;
let Seconds=0;
let Minutes = 0;

let timerId =null ;

startButton . addEventListener('click' , function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer ,10)
});
stopButton.addEventListener('click',function(){
    clearInterval(timerId);

});

resetButton.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    MilliSeconds = Seconds= Minutes = 0;
});


  function startTimer(){
    MilliSeconds++;
    if(MilliSeconds == 60){
        MilliSeconds =0;
        Seconds++;
        if(Seconds ==60){
            Seconds = 0;
            Minutes++
        }
    }
    let msecstring = MilliSeconds <10? `0${MilliSeconds}` : MilliSeconds;
   let secstring = Seconds <10 ?`0${Seconds}` : Seconds;
   let minstring = MilliSeconds <10 ? `0${MilliSeconds}` : Minutes; 

   timerdisplay.innerHTML = `${minstring} : ${secstring} : ${msecstring}`;


  }
   
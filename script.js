
let  [seconds, minute,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");

let timer = null;

function stopWatch(){

    seconds++;

    if(seconds == 59){

        seconds = 0;
        minute++;

      

    }

    if(minute == 59){

        minute = 0;
        hours++;

    }

    displayTime.innerHTML = hours +":"+ minute +":"+ seconds;

    let h = hours < 10 ? "0" + hours : hours;

    let m = minute < 10 ? "0" +minute : minute;

    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;

 


}
function watchStart(){

    if(timer !== null){

        clearInterval(timer);
    }

    timer = setInterval(stopWatch,1000);


}

function stopTimer(){

    clearInterval(timer);
}

function reset(){

    // [seconds, minute,hours] = [0,0,0];
    clearInterval(timer);

    displayTime.innerHTML = "00:00:00"

    
}
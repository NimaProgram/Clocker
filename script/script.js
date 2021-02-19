let clickRec = 0;
let Amari;
let Intervalew;
let speed = 1000;
let Intervalex;
window.onload = () => {shokika();};

let shokika = () => {
        document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1;
    };
    

function startTimer() {
    clickRec ++;
    Amari = (clickRec % 2);
    if (Amari == 1){
        Intervalew = window.setInterval(clocker,speed);
        Intervalex = window.setInterval(threeflont,1000)
        document.getElementById("RunOrStop").innerHTML = "Running";
    } else {
        window.clearInterval(Intervalew);
        let p = document.getElementById("RunOrStop");
        p.style.opacity = 1;
        clearInterval(Intervalex);
        low = 0;
        document.getElementById("RunOrStop").innerHTML = "Stopping";
    };
    
};
let low = 0;
let threeflont = () => {
    let p = document.getElementById("RunOrStop");
    if(low == 3){
        low = 0;
        if(Amari == 1){
            p.style.opacity = 0;
        }
    } else {
        low ++;
    }
}

function resetTimer() {
    clickRec = 0;
    Amari = 0;
    window.clearInterval(Intervalew);
    window.clearInterval(Intervalex);
    low = 0;
    hour1 = 0;
    hour10 = 0;
    min1 = 0;
    min10 = 0;
    sec1 = 0;
    sec10 = 0;
    secback = 0;
    let p = document.getElementById("RunOrStop");
    p.style.opacity = 1;
    document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1;
    document.getElementById("RunOrStop").innerHTML = "Stopping";
};

let hour1 = 0;
let hour10 = 0;

let min1 = 0;
let min10 = 0;

let sec1 = 0;
let sec10 =0;

let secback = 0;

function clocker() {
    secback ++;

    if (secback > 9) {
        secback = 0;
        sec1 = 0;
        sec10 ++;
    } else {
        sec1 ++;
    };

    if (sec10 > 5) {
        sec10 = 0;
        min1 ++;
    };

    if (min1 > 9) {
        min1 = 0;
        min10 ++;
    };

    if (min10 > 5) {
        min10 = 0;
        hour1 ++;
    };

    if (hour1 > 9) {
        hour1 = 0;
        hour10 ++;
    };
    document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1;
};
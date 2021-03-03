let clickRec = 0;
let Amari;
let Intervalew;
let speed = 10;
let Intervalex;
let WIW;
let onWIW;
let WIH;
let onWIH;
//-----window処理-----

window.onload = () => {
    shokika();
    WIW = window.innerWidth;
    WIH = window.innerHeight;
    let clientsizex = document.getElementById("js__clock-htm");
    clientsizex.style.width = WIW + "px";
    clientsizex.style.height = WIH + "px";
};

window.onresize = () => {
    onWIW = window.innerWidth;
    onWIH = window.innerHeight;
    let clientsizex = document.getElementById("js__clock-htm");
    clientsizex.style.width = onWIW + "px";
    clientsizex.style.height = onWIH + "px";
}

let shokika = () => {
        document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1 + ":" + msec10 + msec1;
    };
    
const stopTimerFunc = () => {
    window.clearInterval(Intervalew);
        const p = document.getElementById("RunOrStop");
        p.style.opacity = 1;
        clearInterval(Intervalex);
        low = 0;
        p.style.color = "#1d19ff";
        document.getElementById("RunOrStop").innerHTML = "Stopping";
}

function startTimer() {
    clickRec ++;
    Amari = (clickRec % 2);
    if (Amari == 1){ //----スタート----
        Intervalew = window.setInterval(clocker,speed);
        Intervalex = window.setInterval(threeflont,100)
        document.getElementById("RunOrStop").innerHTML = "Running";
        const pcol = document.getElementById("RunOrStop");
        pcol.style.color = "red";
        stopSound = 0;
        window.clearInterval(alarmSound);
        const alarm_sound_content = document.getElementById("alarm-sound01").pause();
        document.getElementById("alarm-sound01").currentTime = 0;
    } else { //----ストップ----
        stopTimerFunc();
    };
    
};
let low = 0;
let threeflont = () => {
    let p = document.getElementById("RunOrStop");
    if(low == 27){
        low = 0;
        if(Amari == 1){
            p.style.opacity = 0;
        }
    } else {
        low ++;
    }
}

//---------------ボタンが押されるとタイマーをリセットするスクリプト---------------

const resetTimerFunc = () => {
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
    msecback = 0;
    msec1 = 0;
    msec10 = 0;
    let p = document.getElementById("RunOrStop");
    p.style.opacity = 1;
    document.getElementById("RunOrStop").innerHTML = "Stopping";
    window.clearInterval(alarmSound);
    const alarm_sound_content = document.getElementById("alarm-sound01").pause();
    document.getElementById("alarm-sound01").currentTime = 0;
}

function resetTimer() {
    resetTimerFunc();
    document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1 + ":" + msec10 + msec1;
};

//---------------タイマーの数を宣言---------------

let hour1 = 0;
let hour10 = 0;

let min1 = 0;
let min10 = 0;

let sec1 = 0;
let sec10 =0;

let msec1 =0;
let msec10 =0;

let msecback = 0;

//---------------変数宣言ここまで---------------

//---------------タイマーを動かす本体---------------

function clocker() {
    msecback ++;

    if (msecback > 9) {
        msecback = 0;
        msec1 = 0;
        msec10 ++;
    } else {
        msec1 ++;
    };

    if (msec10 > 9) {
        msec10 = 0;
        sec1 ++;
    }

    if(sec1 > 9) {
        sec1 = 0;
        sec10 ++;
    }

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
    document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1 + ":" + msec10 + msec1;
    if(min1 == userSetting0_Time) {
        stopTimerFunc();
        resetTimerFunc();
        const alarm_sound_content = document.getElementById("alarm-sound01").play();
        alarmSound = window.setInterval(alarmSoundCalling,6000);
    };
    if(min10 == userSetting_0Time) {
        stopTimerFunc();
        resetTimerFunc();
        const alarm_sound_content = document.getElementById("alarm-sound01").play();
    }
};
let alarmSound;
let stopSound = 0;

const alarmSoundCalling = () => {
    const alarm_sound_content = document.getElementById("alarm-sound01").play();
    stopSound ++;
    if(stopSound == 3){
        window.clearInterval(alarmSound);
    }
}
//---------------本体ここまで---------------
let userSetting0_Time = 11;
let userSetting_0Time = 11;
let clickRec2 = 0;
let FSC = () => {
    clickRec2 ++;
    let echoule = clickRec2 % 2;
    if (echoule == 1){
        document.body.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

const statsChange = (x) => {
    let stats = document.getElementById("js__stats__timer");
    stats.innerHTML = x;
}

const testSound = () => {
    document.getElementById("test-sound01").play();
}

const set_1min_Timer = () => {
    userSetting0_Time = 1;
    statsChange(1 + " min");
    testSound();
};
const set_3min_Timer = () => {
    userSetting0_Time = 3;
    statsChange(3 + " min");
    testSound();
};
const set_5min_Timer = () => {
    userSetting0_Time = 5;
    statsChange(5 + " min");
    testSound();
};
const set_10min_Timer = () => {
    userSetting_0Time = 1;
    userSetting0_Time = 11;
    statsChange(10 + " min");
    testSound();
};
const reset_min_Timer = () => {
    userSetting0_Time = 11;
    userSetting_0Time = 11;
    statsChange("Timer OFF");
}
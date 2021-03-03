let clickRec = 0;
let Amari;
let Intervalew;
let speed = 10;
let Intervalex;
let WIW;
let onWIW;
let WIH;
let onWIH;
let IntervalY;
const result = () => {
    document.getElementById("clock-in").innerHTML = hour10 + hour1 + ":" + min10 + min1 + ":" + sec10 + sec1 + ":" + msec10 + msec1;
};
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
};

let shokika = () => {
    result();
};
    
const stopTimerFunc = () => {
    window.clearInterval(Intervalew);
    const p = document.getElementById("RunOrStop");
    p.style.opacity = 1;
    clearInterval(Intervalex);
    low = 0;
    p.style.color = "#1d19ff";
    document.getElementById("RunOrStop").innerHTML = "Stopping";
};

function startTimer() {
    clickRec ++;
    Amari = (clickRec % 2);
    if (Amari == 1){ //----スタート----
        if(countdownSwitch == 1){
            IntervalY = window.setInterval(countdownner,speed);
            document.getElementById("RunOrStop").innerHTML = "Running";
            const pcol = document.getElementById("RunOrStop");
            pcol.style.color = "red";
        }else{
            Intervalew = window.setInterval(clocker,speed);
            Intervalex = window.setInterval(threeflont,100);
            const pcol = document.getElementById("RunOrStop");
            pcol.style.color = "red";
            stopSound = 0;
            document.getElementById("RunOrStop").innerHTML = "Running";
            window.clearInterval(alarmSound);
        }
        const alarm_souncontent = document.getElementById("alarm-sound01").pause();
        document.getElementById("alarm-sound01").currentTime = 0;
    } else { //----ストップ----
        stopTimerFunc();
        stopDTimerFunc();
    };
    
};

const stopDTimerFunc = () => {
    window.clearInterval(IntervalY);
    const p = document.getElementById("RunOrStop");
    p.style.opacity = 1;
    low = 0;
    p.style.color = "#1d19ff";
    document.getElementById("RunOrStop").innerHTML = "Stopping";
};

let low = 0;
let threeflont = () => { //2.7秒後 opacity が 0になる。
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
    const alarm_souncontent = document.getElementById("alarm-sound01").pause();
    document.getElementById("alarm-sound01").currentTime = 0;
}

function resetTimer() {
    resetTimerFunc();
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

    result();
};
let stopSound = 0;

//---------------本体ここまで---------------

//---------------カウントダウンファンクション---------------

//  **0.01秒単位で進む**
function countdownner() {

    if(msec1 >= 0){
        msec1 --;
    }

    if(min10 > 0){
        if(min1 < 1){
            if(sec10 < 1){
                if(sec1 < 1){
                    if(msec10 < 1){
                        if(msec1 < 0){
                            min10 --;
                            min1 = 9;
                            sec10 = 5;
                            sec1 = 9;
                            msec10 =9;
                            msec1 = 9;
                            msecback = 0;
                        };
                    };
                };
            };
        };
    };

    if(min1 > 0){
        if(sec10 < 1){
            if(sec1 < 1){
                if(msec10 < 1){
                    if(msec1 < 0){
                        min1 --;
                        sec10 = 5;
                        sec1 = 9;
                        msec10 = 9;
                        msec1 = 9;
                        msecback = 0;
                    };
                };
            };
        };
    };

    if(sec10 > 0){
        if(sec1 < 1){
            if(msec10 < 1){
                if(msec1 < 0){
                    sec10 --;
                    sec1 = 9;
                    msec10 = 9;
                    msec1 = 9;
                    msecback = 0;
                };
            };
        };
    };

    if(sec1 > 0){
        if(msec10 < 1){
            if(msec1 < 0){
                sec1 --;
                msec10 = 9;
                msec1 = 9;
                msecback = 0;
            };
        };
    };

    if(msec10 > 0){
        if(msec1 < 0){
            msec10 --;
            msec1 = 9;
            msecback = 0;
        };
    };

    
    if(msec1 == -1){
        msec1 = 0;
        stopDTimerFunc();
    }
    
    
    result();

    if(min10 < 1){
        if(min1 < 1){
            if(sec10 < 1){
                if(sec1 < 1){
                    if(msec10 < 1){
                        if(msec1 < 1){
                            const alarm_souncontent = document.getElementById("alarm-sound01").play();
                        };
                    };
                };
            };
        };
    };
};
//---------------ここまで---------------

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



//---------------カウントダウンボタンエリア---------------(15)



let countdownSwitch = 0; //カウントダウンなし(初期化)
let userSetting0_Time = 11;
let userSetting_0Time = 11;

const running_time_on_button = () => {
    if(Amari == 1){
    startTimer();
    };
};

const set_1min_Timer = () => {
    userSetting0_Time = 1;
    statsChange(1 + " min");
    countdownSwitch = 1;  // カウントダウンあり(true)
    min10 =0;
    min1 = 1;
    sec10 = 0;
    sec1 = 0;
    msec10 = 0;
    msec1 = 0;
    clearInterval(IntervalY);
    result();
    running_time_on_button();
    //testSound();
};
const set_3min_Timer = () => {
    userSetting0_Time = 3;
    statsChange(3 + " min");
    countdownSwitch = 1;  // カウントダウンあり(true)
    min1 = 3;
    min10 =0;
    sec10 = 0;
    sec1 = 0;
    msec10 = 0;
    msec1 = 0;
    clearInterval(IntervalY);
    result();
    running_time_on_button();
    //testSound();
};
const set_5min_Timer = () => {
    userSetting0_Time = 5;
    statsChange(5 + " min");
    countdownSwitch = 1;  // カウントダウンあり(true)
    min1 = 5;
    min10 =0;
    sec10 = 0;
    sec1 = 0;
    msec10 = 0;
    msec1 = 0;
    clearInterval(IntervalY);
    result();
    running_time_on_button();
    //testSound();
};
const set_10min_Timer = () => {
    userSetting_0Time = 1;
    userSetting0_Time = 11;
    statsChange(10 + " min");
    countdownSwitch = 1;  // カウントダウンあり(true)
    min1 = 0;
    min10 = 1;
    sec10 = 0;
    sec1 = 0;
    msec10 = 0;
    msec1 = 0;
    clearInterval(IntervalY);
    result();
    running_time_on_button();
    //testSound();
};
const reset_min_Timer = () => {
    userSetting0_Time = 11;
    userSetting_0Time = 11;
    statsChange("Timer OFF");
    clearInterval(IntervalY);
    min1 = 0;
    min10 = 0;
    sec10 = 0;
    sec1 = 0;
    msec10 = 0;
    msec1 = 0;
    result();
    running_time_on_button();
};
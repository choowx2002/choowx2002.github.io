//clock
console.log("clock")
function showTime() {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let AM_PM = "AM";
    
    if (h>11){
        if(h>12){
            h = h-12;
        }
        AM_PM = "PM"
    }
    if (h==0){
        h="00";
    }
    if(h<10&&h>0){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    
    let timeNow = h+":"+m+":"+s+" "+AM_PM;
    let H_M = h+":"+m+" ";
    let S = ""+s;
    let AMPM = AM_PM;

    document.querySelector('span.H_M').innerHTML= H_M;
   // document.querySelector('span.S').innerHTML= S;
    document.querySelector('div.AMPM').innerHTML= AMPM;
    document.querySelector('title').innerHTML= timeNow;
    let calS = s*100/60;
    let calS1 = s*100/60/100;
    if (calS == 100 || calS == 0) {
        document.querySelector("div.progress").style.transition="0.2s";
    }else{
        document.querySelector("div.progress").style.transition="2s ease-out";
        document.querySelector("div.progress").style.backgroundColor ="rgba(0, 255, 251,"+calS1+")";
    }
    document.querySelector("div.progress").style.width=calS+"%";
}

setInterval("showTime()",1000);
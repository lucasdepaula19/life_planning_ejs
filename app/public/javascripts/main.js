/*
function teste(){
    alert("teste funcionou");
}


function decMonth(month){
    let month = month--;
    return month;
}
*/
let zmonth = 1;

function decMonth(){
    if(zmonth <= 12 && zmonth > 1){
        zmonth--;
        //console.log('zmonth: ' + zmonth);
        document.getElementById('resultMonth').innerHTML = zmonth;
        //return zmonth;
    }else{
        //console.log('zmonth: ' + zmonth);
        document.getElementById('resultMonth').innerHTML = zmonth;
        //return zmonth;
    }

    

}

function incMonth(){
    if(zmonth < 12 && zmonth >= 1){
        zmonth++;
        document.getElementById('resultMonth').innerHTML = zmonth;
    }else{
        document.getElementById('resultMonth').innerHTML = zmonth;
    }
}



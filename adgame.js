var getal = 0;
var HasKeys = false;
var VolleBuik = false;
var Gewonnen = false;
var kaart = false;

function start() {
    console.log("start()");

    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'level begint'
    opt1.setAttribute("onClick", "javascript:Level2();");

    document.getElementById('level_title').innerHTML = 'start';
    document.getElementById('level_image').src = 'img/afb1.jpg';
    document.getElementById('option3').style.display = 'inline-block';
    opt1.innerHTML = 'pak sleutels';
    opt1.onclick = function() {
        HasKeys = true;
        document.getElementById('keys').style.display = "block";
    }
    var opt3 = document.getElementById('option3');
    opt3.innerHTML = 'ga naar beneden';
    document.getElementById('level_image').src = 'img/afb2.jpg';
    opt3.setAttribute("onClick", "javascript:beneden();");
}

function beneden() {
    console.log("beneden()")
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'ga ontbijten';
    opt1.onclick = function() {
        VolleBuik = true;
        document.getElementById('eten').style.display = 'inline-block';
    }
    document.getElementById('option2').style.display = 'inline-block';
    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'ga gamen';
    opt2.setAttribute("onClick", "javascript:ga_gamen();");
    var opt3 = document.getElementById('option3');
    opt3.innerHTML = 'snel naar korfbal';
    opt3.setAttribute("onClick", "javascript:korfbalveld();");
    document.getElementById('level_image').src = 'img/afb3.jpg';

}

function ga_gamen() {
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'je ben te laat voor de wedstrijd, restart?';
    opt1.setAttribute("onClick", "javascript:start();");
    var opt2 = document.getElementById('option2');
    opt2.innerHTML = ''
    var opt3 = document.getElementById('option3');
    opt3.innerHTML = ''
    document.getElementById('level_image').src = 'img/rip.png';
}

function korfbalveld() {

    document.getElementById('level_image').src = 'img/afb4.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'wedstrijd spelen?';
    opt1.onclick = function() {
        if (VolleBuik) {
            Gewonnen = true;
            document.getElementById('eten').style.display = "block";
            gewonnen();
        } else {
            alert('vergeten te eten #flauwgevallen');
        }
    }


    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'terug naar huis?';
    opt2.onclick = function() {
        if (HasKeys) {
            beneden();
        } else {
            alert('U dont haz key dumbass');
        }
    }

    var opt3 = document.getElementById('option3');
    opt3.innerHTML = 'restart, u forgot ur shit';
    opt3.setAttribute("onClick", "javascript:start();");
}

function gewonnen() {

    document.getElementById('level_image').src = 'img/afb6.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'ga naar een bar met vrienden'
    opt1.setAttribute("onClick", "javascript:bar();");
    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'ga naar huis';
    opt2.setAttribute("onClick", "javascript:beneden();");
    opt2.onclick = function() {
        if (HasKeys) {
            beneden();
        } else {
            alert('U dont haz key dumbass');
        }
    }
}

function bar() {

    document.getElementById('level_image').src = 'img/afb5.jpg';
    if (Gewonnen == true) {
        var opt1 = document.getElementById('option1');
        opt1.innerHTML = 'zuipen!';
        console.log(opt1);
        console.log(opt1.onClick);
        opt1.onclick = function() {
            console.log("hiero is hij uitgevoerd " + getal);
            if (getal == 3) {
                opt1.setAttribute("onClick", "javascript:wazig();");
                wazig();
            } else {
                getal = getal + 1;
            }
        }
    } else {
        var opt1 = document.getElementById('option1');
        opt1.innerHTML = 'je ben te laat voor de wedstrijd, restart?';
        opt1.setAttribute("onClik", "javascript:start();");
    }
}
var opt2 = document.getElementById('option2');
opt2.innerHTML = 'ga naar huis';
opt2.setAttribute("onClick", "javascript:beneden();");
opt2.onclick = function() {
    if (HasKeys) {
        beneden();
    } else {
        alert('U dont haz key dumbass');
    }

}

function wazig() {
    document.getElementById('level_image').src = 'img/afb5_wazig.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'zuipen!'
    opt1.onclick = function() {
        if (getal == 5) {
            opt1.setAttribute("onClick", "javascript:waziger");
            waziger();
        } else {
            getal++;
        }

    }


    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'ga naar huis';
    opt2.setAttribute("onClick", "javascript:beneden();");

}

function waziger() {
    document.getElementById('level_image').src = 'img/afb5_waziger.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'proberen naar huis te gaan';
    opt1.setAttribute("onclick", "javascript:weg()");

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = ''

    var opt3 = document.getElementById('option3');
    opt3.innerHTML = ''

}

function weg() {
    document.getElementById('level_image').src = 'img/weg.jpg';
    var opt1 = document.getElementById('option1')
    opt1.innerHTML = 'ehhm waar ben ik?, loop een stukje verder';
    opt1.setAttribute("onclick", "javascript:weg2()");

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = ''

    var opt3 = document.getElementById('option3');
    opt3.innerHTML = ''
}

function weg2() {
    document.getElementById('level_image').src = 'img/weg2.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'loop nog een stukje verder';
    opt1.setAttribute("onclick", "javascript:weg3()");

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = ''

    var opt3 = document.getElementById('option3');
    opt3.innerHTML = ''
}

function weg3() {

    document.getElementById('level_image').src = 'img/weg3.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = 'zoek telefoon';
    opt1.onclick = function() {
        kaart = true;
        document.getElementById('kaart').style.display = "block";
    }

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'kijk op je telefoon waar je heen moet';
    opt2.setAttribute("onclick", "javascript:weg3()");


    var opt3 = document.getElementById('option3');
    opt3.innerHTML = 'iemand bellen om je op te komen halen';
    opt3.setAttribute("onclick", "javascript:thuis()");;
      

}

function thuis(){
    document.getElementById('level_image').src = 'img/thuis.jpg';
    var opt1 = document.getElementById('option1');
    opt1.innerHTML = '';

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = '';

    var opt3 = document.getElementById('option3');
    opt3.innerHTML = 'Spel uitgespeeld!';
}

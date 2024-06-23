
function randgen(){
    clr();
    
    let ar = [];
    for (let i = 0; ar.length != 8 ; i++) {
        let num = Math.floor(Math.random() * 8 + 1);
        console.log(num);
        if (!(ar.includes(num))) {
            console.log(num);
            ar.push(num);   
        }   
    }
    console.log(ar);
    for (let i = 0; i < 8; i++) {
        if (ar[i] != 9) {
            document.getElementById(`box-${i+1}`).innerHTML = ar[i];
        }
    }6

    color();
}   


function turm(item) {
    if (item.innerHTML != "")
        if (document.getElementById('box-9').innerHTML == "") {
            if (item.id == "box-6" || item.id == "box-8") {
                swipe(item.id, "box-9");
            }
        } else
            if (document.getElementById('box-8').innerHTML == "") {
                if (item.id == "box-9" || item.id == "box-5" || item.id == "box-7") {
                    swipe(item.id, "box-8");
                }
            } else if (document.getElementById('box-7').innerHTML == "") {
                if (item.id == "box-4" || item.id == "box-8") {
                    swipe(item.id, "box-7");
                }
            } else if (document.getElementById('box-6').innerHTML == "") {
                if (item.id == "box-9" || item.id == "box-5" || item.id  == "box-3") {
                    swipe(item.id, "box-6");
                }
            } else if (document.getElementById('box-5').innerHTML == "") {
                if (item.id == "box-2" || item.id == "box-6" || item.id == "box-8" || item.id == "box-4") {
                    swipe(item.id, "box-5");
                }
            } else if (document.getElementById('box-4').innerHTML == "") {
                if (item.id == "box-1" || item.id == "box-5" || item.id == "box-7") {
                    swipe(item.id, "box-4");
                }
            } else if (document.getElementById('box-3').innerHTML == "") {
                if (item.id == "box-2" || item.id == "box-6") {
                    swipe(item.id, "box-3");
                }
            } else if (document.getElementById('box-2').innerHTML == "") {
                if (item.id == "box-1" || item.id == "box-3" || item.id == "box-5") {
                    swipe(item.id, "box-2");
                }
            } else if (document.getElementById('box-1').innerHTML == "") {
                if (item.id == "box-2" || item.id == "box-4") {
                    swipe(item.id, "box-1");
                }
            }
        win()
    color();
    }       
        


function clr() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box-${i}`).innerHTML = "";
    }
    color();
}
function swipe(item1, item2) {
    var a = document.getElementById(item1).innerHTML;
    var b = document.getElementById(item2).innerHTML;
    document.getElementById(item1).innerHTML = b;
    document.getElementById(item2).innerHTML = a;
}
function win() {
    var cnt = 0;
    for (let i = 1; i < 9; i++) {
        if (document.getElementById(`box-${i}`).innerHTML == [i]) {
            cnt++;
        }
    }
    if (cnt == 8) {
        document.write("you winner");
    }
}
function color() {
    for (i = 1; i <=9; i++) {
        if (document.getElementById(`box-${i}`).innerHTML == "") {
            document.getElementById("box-" + i).style.backgroundColor = "white";
        } else {
            document.getElementById("box-" + i).style.backgroundColor = "yellow";
        }
    }

}
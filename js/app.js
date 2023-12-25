let sayı = 0
let artırbtn = document.querySelector("#Artır");
let azaltbtn = document.querySelector("#Azalt");
let sayıtext = document.getElementById('sayıtext');

artırbtn.onclick = function () {
    sayı ++
    guncelesayı()
}

azaltbtn.onclick = function () {
    if (sayı > 0){
        sayı --
        guncelesayı()
    }else{
        alert("Sayı 0 dan aşağıya inemez");
    }
}

function guncelesayı(){
    sayıtext.innerHTML = sayı;
}
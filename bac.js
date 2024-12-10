let pwd1 = document.querySelector("#pwd1");
let pwd2 = document.querySelector("#pwd2");
const error = document.querySelector('#error');


function confirmer(){
    if(pwd1.value.match(pwd2.value)){
        error.style.display = 'none';
        return false;
        //error.style.display = 'none';
       // alert(error);
    }
    else{
        error.style.color = 'red';
        error.innerHTML = 'Les 2 mots de passe ne sont pas identiques !!!';
        error.style.display = 'block';
        return false;
    }
}
const agro = document.querySelector('.agro');
const info = document.querySelector('.info');
const med = document.querySelector('.med');

function afficherAgro(){
    agro.style.display = 'block';
}
function afficherInfo(){
    info.style.display = 'block';
}
function afficherMed(){
    med.style.display = 'block';
}

function cacher(){
    agro.style.display = 'none';
    info.style.display = 'none';
    med.style.display = 'none';
}
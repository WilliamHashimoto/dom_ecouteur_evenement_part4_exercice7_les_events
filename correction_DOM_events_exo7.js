//1
//methode charles
let exo1Div = document.getElementById('content');
let exo1H1 = document.getElementsByTagName('h1')[0];
let exo1H2 = exo1H1.nextElementSibling;
let exo1P = exo1H2.nextElementSibling;

function bordure(e) {
    if (e.target.id == "content") {
        e.target.style.border = "black solid 1px";
    }
    
}

function grasRouge(e) {
    e.target.style.color = "red";
    e.target.style.fontWeight = "bolder";
}

function surligne(e) {
    e.target.style.background = 'yellow';
}

function effacer(e) {
    e.target.innerText = e.target.innerText.slice(0, -1);
}

exo1Div.addEventListener('click', bordure)
exo1H1.addEventListener('click', grasRouge)
exo1H2.addEventListener('click', surligne)
exo1P.addEventListener('click', effacer)

//methode mihai

// let ladiv = document.querySelector("#content")

// ladiv.addEventListener("click", (e) => {
//     let target = e.target
//     if(target.tagName == "DIV"){
//         target.style = "border : 2px black solid"
//     }
//     else if (target.tagName == "P"){
//         target.style = "font-weight: bold; color:red"
//     }
//     else if(target.tagName == "H1"){
//         target.style = "background-color : yellow"
//     }
//     else if(target.tagName =="H2"){
//         target.innerText = target.innerText.slice(0,-1);
//     }
// }) 

//2
let sec = document.querySelector('section');
let p2 = document.querySelector('section p');
let variable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

sec.style.height = "200px";
sec.addEventListener('mouseover', ()=>{
    p2.innerText = variable;
})
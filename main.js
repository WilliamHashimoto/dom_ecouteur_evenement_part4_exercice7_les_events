let div = document.getElementById("content");

div.addEventListener("click", (e)=>{
    switch (e.target.tagName) {
        case "DIV":
            e.target.style.border = "1px solid black";
            break;
        case "P":
            e.target.style.cssText = "font-weight: bold; color: red;"
            break;
        case "H1":
            e.target.style.backgroundColor = "blue";
            break;
        case "H2":
            e.target.innerText = e.target.innerText.slice(0, -1);
    }
});

let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let p = document.querySelector('section').querySelector('p');

p.addEventListener('mouseover', (e)=>{
    e.target.innerText = text;
})
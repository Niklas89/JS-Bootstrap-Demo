// value entered in input, initialized to 0 at the begining
let value = 0;
// number to guess
let guess = Math.round(Math.random()*100);
// p variable for the paragraph that is added for the right or wrong messages
let p;
let content, colorMessage, elt;
document.getElementById('form').addEventListener("submit", function(evt){
    // preventDefault(): l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
    // ici le submit sur le formulaire n'enclenche pas le chargement de la page 
    evt.preventDefault(); 
    verifyNumber();
})

function verifyNumber() {
    value = document.getElementById('number').value;
    parse = parseInt(value);
    if(value > 0 && value < 100) {
        if(value == guess) {
            content = "Le nombre est <strong>correct</strong> !";
            colorMessage = "green";
            addContent(content,colorMessage);
        } else if(value < guess) {
            content = "Le nombre est <strong>supérieur</strong> !";
            colorMessage = "red";
            addContent(content,colorMessage);
        } else if(value > guess) {
            content = "Le nombre est <strong>inférieur</strong> !";
            colorMessage = "red";
            addContent(content,colorMessage);
        }
    } else if(isNaN(parse)) {
        content = "Ce n'est pas un nombre, veuillez <strong>changer la valeure</strong> !";
        colorMessage = "black";
        addContent(content,colorMessage);
    } else {
        content = "Le nombre que vous avez indiqué ne se trouve pas <strong>entre 0 et 100</strong> !";
        colorMessage = "black";
        addContent(content,colorMessage);
    }
}

function addContent(content, colorMessage) {
    //if(typeof(p) != 'undefined' || p != null){
      //  p.hidden = true;
    if(typeof(p) == 'undefined' || p == null){ // si le p n'a pas encore de valeur je crée un nouveau paragraphe
        p = document.createElement("p");
        elt = document.getElementById("main");
        elt.appendChild(p);
    } 
    p.innerHTML = content;
    p.style.textAlign = "center";
    //p.style.margin = "auto";
    //p.classList.add("important");
    p.style.color = colorMessage;
}


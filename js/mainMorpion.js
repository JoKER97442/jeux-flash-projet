
let listBlock = [];
let playerO = "player O";
let playerX = "player X";
let tour = playerX;
let next = false;
let affiche;
let gagner = false;
let partieNull = false;
let start = false;
let jeu;

window.addEventListener("load", function() {
    console.log("La page est charger !");

    jeu = document.querySelector("#jeu");
    jeu.addEventListener("click", playGame);
});

/* ****************  GERER LA LANCEMENT ET AFFICHAGE  **************** */
function playGame(event) {
    event.preventDefault();
    jeu.removeEventListener("click", playGame);
    start = true;
    recupereBlock();
    updateTour();
}
function replay(event) {
    event.preventDefault();
    jeu.removeEventListener("click", replay);
    gagner = false;
    partieNull = false;
    jeu.addEventListener("click", playGame);
    
    console.log("game")
};

function gameOver() {
    start = false;
    for (let i = 0; i < listBlock.length; ++i) {
        listBlock[i].removeEventListener("click", writeMorpion);
    };
}

function affichage() {
    affiche = document.querySelector("#commande");
    if (gagner) {
        affiche.innerHTML = `${tour} à gagner !`;
    } else if (partieNull) {
        affiche.innerHTML = `Partie nul !`;
    } else {
        affiche.innerHTML = `C'est au tour de ${tour}`;
    }
}

/* ****************  CREER LES BLOCKS  **************** */
function recupereBlock() {
    listBlock = [];
    for(let i = 0; i < 9; ++i) {
        let block = listBlock[i];
        block = document.querySelector("#block" + i);
        block.innerHTML = "";
        block.morpion = false;
        block.addEventListener("click", writeMorpion);
        listBlock.push(block);
    }
    console.log("Les BLOCK est charger !");
}

            
/* ****************  ECRITURE X / O  **************** */ 
function writeMorpion(event) {
    event.preventDefault();
    this.removeEventListener("click", writeMorpion);
    if (tour === playerX) {
        this.innerHTML = "x";
    } else if (tour === playerO) {
        this.innerHTML = "o";
    }
    condition();
}

/* Gerer les tour */
function updateTour() {
    if (gagner || partieNull) {
        gameOver();
        jeu.addEventListener("click", replay);
    }
    if (start) {
        if (tour === playerX) {
            tour = playerO;
        } else if (tour === playerO) {
            tour = playerX;
        };
    }
    affichage();
}

/* Condition de victoire */
function condition() {
    let perdu = 0;
    // Ligne 1
    if (listBlock[0].innerHTML !== "" && 
        listBlock[0].innerHTML === listBlock[1].innerHTML && 
        listBlock[0].innerHTML === listBlock[2].innerHTML) {
            console.log("gagne ligne 1");
            gagner = true;
    } else
    // Ligne 2
    if (listBlock[3].innerHTML !== "" &&
        listBlock[3].innerHTML === listBlock[4].innerHTML &&
        listBlock[3].innerHTML === listBlock[5].innerHTML) {
        console.log("gagne ligne 2");
        gagner = true;
    } else
    // Ligne 3
    if (listBlock[6].innerHTML !== "" &&
        listBlock[6].innerHTML === listBlock[7].innerHTML &&
        listBlock[6].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne ligne 3");
            gagner = true;
    } else
    // Colone 1
    if (listBlock[0].innerHTML !== "" &&
        listBlock[0].innerHTML === listBlock[3].innerHTML &&
        listBlock[0].innerHTML === listBlock[6].innerHTML) {
            console.log("gagne colone 1");
            gagner = true;
    } else
    // Colone 2
    if (listBlock[1].innerHTML !== "" &&
        listBlock[1].innerHTML === listBlock[4].innerHTML &&
        listBlock[1].innerHTML === listBlock[7].innerHTML) {
            console.log("gagne colone 2");
            gagner = true;
    } else
    // Colone 3
    if (listBlock[2].innerHTML !== "" &&
        listBlock[2].innerHTML === listBlock[5].innerHTML &&
        listBlock[2].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne colone 3");
            gagner = true;
    } else
    // Diagonal 1
    if (listBlock[0].innerHTML !== "" &&
        listBlock[0].innerHTML === listBlock[4].innerHTML &&
        listBlock[0].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne diag 1");
            gagner = true;
    } else
    // Diagonal 2
    if (listBlock[2].innerHTML !== "" &&
        listBlock[2].innerHTML === listBlock[4].innerHTML &&
        listBlock[2].innerHTML === listBlock[6].innerHTML) {
            console.log("gagne diag 2");
            gagner = true;
    } else {
        for (let i = 0; i < listBlock.length; ++i) {
            // PERDU
            if (listBlock[i].innerHTML !== "") {
                perdu++;
                if (perdu === 9) {
                    console.log("perdu");
                    partieNull = true;
                };
            };
        };
    };
    updateTour();
}
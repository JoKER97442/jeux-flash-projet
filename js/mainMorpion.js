
let listBlock = [];
let tour = "playerX";
let next = false;

window.addEventListener("load", function() {
    console.log("La page est charger !");

    playGame();
});

function playGame() {
    recupereBlock();
    
    checkBlock();
    updateTour();
}

/* ****************  CREER LES BLOCKS  **************** */
function recupereBlock() {
    listBlock = [];
    for(let i = 0; i < 9; ++i) {
        listBlock[i] = document.querySelector("#block" + i);
        listBlock[i].innerHTML = "";
        listBlock[i].morpion = false;
        console.log(listBlock[i]);
    }
    console.log("Les BLOCK est charger !");
}


/* ****************  GERER LES BLOCKS  **************** */
function checkBlock() {
    for (let i = 0; i < listBlock.length; ++i) {
        let block = listBlock[i];
        
        /* Gere la selection du click */
        block.addEventListener("click", writeMorpion);
    }  
}
            
/* Gere l'écriture des morpion */ 
function writeMorpion() {
    if (tour === "playerX") {
        this.innerHTML = "x";
    } else if (tour === "playerO") {
        this.innerHTML = "o";
    }
    updateTour();
    this.removeEventListener("click", writeMorpion);
}

/* Gerer les tour */
function updateTour() {
    condition();
    if (tour === "playerX") {
        tour = "playerO";
    } else if (tour === "playerO") {
        tour = "playerX"
    }
}

/* Condition de victoire */
function condition() {
    let x = "x";
    let perdu = 0;
    console.log(listBlock[0].innerHTML +" "+ listBlock[1].innerHTML +" "+ listBlock[2].innerHTML);
    for (let i = 0; i < listBlock.length; ++i) {
        // PERDU
        if (listBlock[i].innerHTML !== "") {
            perdu++;
            if (perdu === 9) {
                console.log("perdu");
            }
        }
    }

    // Ligne 1
    if (listBlock[0].innerHTML !== "" && 
        listBlock[0].innerHTML === listBlock[1].innerHTML && 
        listBlock[0].innerHTML === listBlock[2].innerHTML) {
            console.log("gagne ligne 1");
    }
    // Ligne 2
    if (listBlock[3].innerHTML !== "" &&
        listBlock[3].innerHTML === listBlock[4].innerHTML &&
        listBlock[3].innerHTML === listBlock[5].innerHTML) {
        console.log("gagne ligne 2");
    }
    // Ligne 3
    if (listBlock[6].innerHTML !== "" &&
        listBlock[6].innerHTML === listBlock[7].innerHTML &&
        listBlock[6].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne ligne 3");
    }

    // Colone 1
    if (listBlock[0].innerHTML !== "" &&
        listBlock[0].innerHTML === listBlock[3].innerHTML &&
        listBlock[0].innerHTML === listBlock[6].innerHTML) {
            console.log("gagne colone 1");
    }

    // Colone 2
    if (listBlock[1].innerHTML !== "" &&
        listBlock[1].innerHTML === listBlock[4].innerHTML &&
        listBlock[1].innerHTML === listBlock[7].innerHTML) {
            console.log("gagne colone 2");
    }

    // Colone 3
    if (listBlock[2].innerHTML !== "" &&
        listBlock[2].innerHTML === listBlock[5].innerHTML &&
        listBlock[2].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne colone 3");
    }

    // Diagonal 1
    if (listBlock[0].innerHTML !== "" &&
        listBlock[0].innerHTML === listBlock[4].innerHTML &&
        listBlock[0].innerHTML === listBlock[8].innerHTML) {
            console.log("gagne diag 1");
    }

    // Diagonal 2
    if (listBlock[2].innerHTML !== "" &&
        listBlock[2].innerHTML === listBlock[4].innerHTML &&
        listBlock[2].innerHTML === listBlock[6].innerHTML) {
            console.log("gagne diag 2");
    }

}
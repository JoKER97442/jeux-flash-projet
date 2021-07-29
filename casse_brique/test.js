// Collisions brique
    for (let i = 0; i < listBrique.length; ++i) {
            
        let brique = listBrique[i];
        
        if (balle.x + balle.radius === brique.x) {
            if (balle.y + balle.radius > brique.y && balle.y - balle.radius < brique.y + brique.hauteur) {
                balle.x = brique.x - balle.radius;
                balle.direction.x = -1;
                listBrique.splice(i, 1);
            }
        } else if (balle.x - balle.radius === brique.x + brique.largeur) {
            if (balle.y + balle.radius > brique.y && balle.y - balle.radius < brique.y + brique.hauteur) {
                balle.x = brique.x + balle.radius;
                balle.direction.x = 1;
                listBrique.splice(i, 1);
        }
        
        // Collision bas
        if (balle.y - balle.radius === brique.y + brique.hauteur && balle.x + balle.radius > brique.x && balle.x - balle.radius < brique.x + brique.largeur) {
            balle.y = brique.y + brique.hauteur + balle.radius;
            balle.direction.y = 1;
            listBrique.splice(i, 1);
            
        }
        // Collision haut
        if (balle.y + balle.radius === brique.y && balle.x + balle.radius > brique.x && balle.x - balle.radius < brique.x + brique.largeur) {
            balle.y = brique.y - balle.radius;
            balle.direction.y = -1;
            listBrique.splice(i, 1);
        }
        
    }
    
    
    // HAUT 
    if (balle.y + balle.radius === brique.y) {
        // HAUT Angle
        if (balle.x + balle.radius === brique.x) {
            balle.y = brique.y - balle.radius;
            balle.direction.y = -1;
            balle.direction.x = -1;
            listBrique.splice(i, 1);
        } else if (balle.x + balle.radius > brique.x && balle.x - balle.radius < brique.x + brique.largeur) {
            balle.y = brique.y - balle.radius;
            balle.direction.y = -1;
            listBrique.splice(i, 1);
        } else if (balle.x - balle.radius === brique.x + brique.largeur) {
            balle.y = brique.y - balle.radius;
            balle.direction.y = -1;
            balle.direction.x = 1;
            listBrique.splice(i, 1);
        }
    }
    
    
    // BAS
    if (balle.y - balle.radius === brique.y + brique.hauteur) {
        // BAS Angle
        if (balle.x + balle.radius === brique.x) {
            balle.y = brique.y + brique.hauteur + balle.radius;
            balle.direction.y = 1;
            balle.direction.x = -1;
            listBrique.splice(i, 1);
        } else if (balle.x + balle.radius > brique.x && balle.x - balle.radius < brique.x + brique.largeur) {
            balle.y = brique.y + brique.hauteur + balle.radius;
            balle.direction.y = 1;
            listBrique.splice(i, 1);
        } else if (balle.x - balle.radius === brique.x + brique.largeur) {
            balle.y = brique.y + brique.hauteur + balle.radius;
            balle.direction.y = 1;
            balle.direction.x = 1;
            listBrique.splice(i, 1);
        }
    }
    
    // DROITE
    if (balle.x - balle.radius === brique.x + brique.largeur) {
        // DROITE Angle
        if (balle.y + balle.radius === brique.y) {
            balle.x = brique.x + balle.radius;
            balle.direction.x = 1;
            balle.direction.y = -1;
            listBrique.splice(i, 1);
        } else if (balle.y + balle.radius > brique.y && balle.y - balle.radius < brique.y + brique.hauteur) {
            balle.x = brique.x + balle.radius;
            balle.direction.x = 1;
            listBrique.splice(i, 1);
        } else if (balle.y - balle.radius === brique.y + brique.hauteur) {
            balle.x = brique.x + balle.radius;
            balle.direction.x = 1;
            balle.direction.y = 1;
            listBrique.splice(i, 1);
        }
    }
    
    // GAUCHE
    if (balle.x + balle.radius === brique.x) {
        // GAUCHE Angle
        if (balle.y + balle.radius === brique.y) {
            balle.x = brique.x - balle.radius;
            balle.direction.x = -1;
            balle.direction.y = -1;
            listBrique.splice(i, 1); 
        } else if (balle.y + balle.radius > brique.y && balle.y - balle.radius < brique.y + brique.hauteur) {
            balle.x = brique.x - balle.radius;
            balle.direction.x = -1;
            listBrique.splice(i, 1);
        } else if (balle.y - balle.radius === brique.y + brique.hauteur) {
            balle.x = brique.x - balle.radius;
            balle.direction.x = -1;
            balle.direction.y = 1;
            listBrique.splice(i, 1);
        }
    }
    
    
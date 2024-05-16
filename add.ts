// interface Vehicule {
//     marque: string;
//     modele: string;
//     serie: number;
// }

// function drive(vehicule: Vehicule) {
//     console.log(vehicule.marque +  " " + vehicule.modele + " " + vehicule.serie)
// }

// let myVehicule = {
//     marque: "Peugeot",
//     modele: "208",
//     serie: 2023
// }

// drive(myVehicule);

class Vehicule {
    marque: string;
    modele: number | string;
    serie: number;
    constructor(marque: string, modele: number | string, serie: number) {
        this.marque = marque;
        this.modele = modele;
        this.serie = serie;
    }
    
}

class Voiture extends Vehicule {
    puissance: number;
    couleur: string;
    
    
    constructor(marque: string, modele: number | string, serie: number , puissance: number, couleur: string) {
        super(marque, modele, serie);
        this.puissance = puissance;
        this.couleur = couleur;
    }
}

class Luxe extends Vehicule {
    style: string;
    puissance: number;
    couleur: string;
    constructor(marque: string, modele: string, serie: number, puissance: number, couleur: string, style: string) {
        super(marque, modele, serie)
        this.style = style;
        this.puissance = puissance;
        this.couleur = couleur;
    }

}


let maCar = new Voiture("Peugeot", 208, 2023, 4, "grise");
let carDeLuxe = new Luxe("Ferrari", "testarosa", 2024, 550, "red", "course" )

console.log(maCar.marque); 
console.log(maCar.modele); 
console.log(maCar.serie);  
console.log(maCar.puissance + "cv")
console.log(maCar.couleur)
console.log(carDeLuxe.marque + " " + carDeLuxe.modele + " " + carDeLuxe.serie + " " + carDeLuxe.puissance + " " + carDeLuxe.couleur + " " + carDeLuxe.style)

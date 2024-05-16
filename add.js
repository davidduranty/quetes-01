// interface Vehicule {
//     marque: string;
//     modele: string;
//     serie: number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function drive(vehicule: Vehicule) {
//     console.log(vehicule.marque +  " " + vehicule.modele + " " + vehicule.serie)
// }
// let myVehicule = {
//     marque: "Peugeot",
//     modele: "208",
//     serie: 2023
// }
// drive(myVehicule);
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, modele, serie) {
        this.marque = marque;
        this.modele = modele;
        this.serie = serie;
    }
    return Vehicule;
}());
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(marque, modele, serie, puissance, couleur) {
        var _this = _super.call(this, marque, modele, serie) || this;
        _this.puissance = puissance;
        _this.couleur = couleur;
        return _this;
    }
    return Voiture;
}(Vehicule));
var Luxe = /** @class */ (function (_super) {
    __extends(Luxe, _super);
    function Luxe(marque, modele, serie, puissance, couleur, style) {
        var _this = _super.call(this, marque, modele, serie) || this;
        _this.style = style;
        _this.puissance = puissance;
        _this.couleur = couleur;
        return _this;
    }
    return Luxe;
}(Vehicule));
var maCar = new Voiture("Peugeot", 208, 2023, 4, "grise");
var carDeLuxe = new Luxe("Ferrari", "testarosa", 2024, 550, "red", "course");
console.log(maCar.marque);
console.log(maCar.modele);
console.log(maCar.serie);
console.log(maCar.puissance + "cv");
console.log(maCar.couleur);
console.log(carDeLuxe.marque + " " + carDeLuxe.modele + " " + carDeLuxe.serie + " " + carDeLuxe.puissance + " " + carDeLuxe.couleur + " " + carDeLuxe.style);

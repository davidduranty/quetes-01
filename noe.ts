enum TypeAnimal {
    Chat,
    Chien,
    Oiseau,
    Poisson,
    Insecte
}

class Animaux {
    name: string;
    type: TypeAnimal;
    constructor(name: string, type: TypeAnimal) {
        this.name = name;
        this.type = type
        
    }
    photo() {
        console.log("On peut photographier tous les animaux")
    }
}

class Chat extends Animaux { 
    color: string | null;
    pattes: number;
    constructor(name: string, color: string, pattes: number) {
        super(name, TypeAnimal.Chat);
        this.color = color;
        this.pattes = pattes;
    }
    miauler() {
        console.log(`${this.name} miaule, elle a ${this.pattes} pattes, elle est ${this.color}`)
    }
}

class Chien extends Animaux {
    color: string | null;
    pattes: number = 4;
    constructor(name: string, color: string, pattes: number) {
        super(name, TypeAnimal.Chien);
        this.color = color;
        this.pattes = pattes;
    }
    aboyer() {
        console.log("Tous les chiens peuvent aboyer")
    }
}

class Oiseau extends Animaux { 
    color: string | null;
    pattes: number = 2;
    constructor(name: string, color: string, pattes: number) {
        super(name, TypeAnimal.Oiseau);
        this.color = color;
        this.pattes = pattes;

    }
    voler() {
        console.log("Tous les oiseaux peuvent voler") 
    }
    
}

class Poisson extends Animaux { 
    constructor(name: string) {
        super(name, TypeAnimal.Poisson)
    }
    nager() {
        console.log("Tous les poissons peuvent nager")
    }
}

class Insecte extends Animaux { 
    constructor(name: string) {
        super(name, TypeAnimal.Insecte);
    }
}
let monChaton = new Chat("Nala", "Grise", 4)

monChaton.miauler()

// class ChatMiaule extends Chat {
   
// }

// class ChienAboye extends Chien {
   
// }
// class OiseauVole extends Oiseau {
    
// }

// class PoissonNage extends Poisson { 
    
// }


// function photo(animaux: Animaux) {
//     console.log("On peut photographier tous les animaux")
// }
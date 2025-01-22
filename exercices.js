const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "Sell-A-Po";
console.log("Bienvenue dans la boutique aaaa " + nom_boutique + " Aventurier ! 🎉");

let healthpotion = "666";
let price = "40";
let boutique_ouverte = true;
let boutique_fermee = false;

let choix = prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? (fait un choix entre 1 et 4)");
console.log("Quel est ton choix : " + choix);

let choix_1 = "1";
let choix_2 = "2";
let choix_3 = "3";
let choix_4 = "4";

if (choix === "1") {
    console.log("La boutique s'appelle " + nom_boutique + " !");
}
else if (choix === "2") {
    console.log("Votre nom est " + nom_sorcier + " !");
}
else if (choix === "3") {
    console.log("Le prix d'une potion de soin est de " + price + " pièce d'or !");
}
else if (choix === "4") {
    console.log("Nous avons " + healthpotion + " potions en stock !");
}

switch (choix) {
    case "1":
        console.log("Le nom de la boutique est " + nom_boutique + " !");
        break;
    case "2":
        console.log("Votre nom est " + nom_sorcier + " !");
        break;
    case "3":
        console.log(`Le prix unitaire d'une potion est de ${price} PO !`);
        break;
    case "4":
        console.log("Nous avons " + healthpotion + " potions en stock !");
        break;
    default:
        console.log("Choix invalide.");
}

// BOURSE DE L'AVENTURIER
let piece_or = 100;
let stockPotion = 666;
let prixPotion = 40;
let quantiteSouhaitee = 1;

// CALCUL PRIX TOTAL (tu vas payer mec)
let prixTotal = prixPotion * quantiteSouhaitee;

// VERIFIONS LA BOURSE MONSIEUR
if (quantiteSouhaitee > stockPotion) {
  console.log("Désolé, il n'y a pas assez de potion en stock !");
} else if (piece_or < prixTotal) {
  console.log("Désolé, t'as pas assez d'argent ! (bosse un peu stp")
} else {
  piece_or -= prixTotal;
  stockPotion -= quantiteSouhaitee;
  console.log(`Achat réussi ! T'as acheté ${quantiteSouhaitee} potion(s).`);
  console.log(`Il te reste ${piece_or} pièces d'or et ${stockPotion} en stock (mais ça va être en stock bientôt, fais confiance)`)
}

// LISTE DE POTIONS
let potions = ["potion de soin", "potion de force", "potion de téléportation"]

console.log(potions);

// AFFICHAGE DES POTIONS EN STOCK
let potions = ["potion de soin", "potion de force", "potion de téléportation"];
console.log(potions[0]);
console.log(potions[potions.length - 1]);

for (let i = 0; i < potions.length; i++) {
  console.log(`Nous avois de la potion ${potions[i]} en stock pour toi !`);
}

// ON AJOUTE DES POTIONS (spoiler dans l'exercice plus bas)
const potions = ["potion de soin", "potion de force", "potion de téléportation"]

const count = potions.push("grande potion de soin");
console.log(count);
console.log(potions);

potions.push("grande potion de force", "petite potion de mana", "petite potion d'endurance");
console.log(potions);

// ON SUPPRIME DES POTIONS (pas assez d'acheteurs)
const potions = ["potion de soin", "potion de force", "potion de téléportation"];
console.log(potions.pop());
console.log(potions);
potions.pop();
console.log(potions);
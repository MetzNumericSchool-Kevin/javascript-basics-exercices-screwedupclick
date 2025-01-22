const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "Sell-A-Po"
console.log("Bienvenue dans la boutique " + nom_boutique + " Aventurier ! 🎉");

let healthpotion = "666";
let price = "3";
/// console.log("Nous avons en stock" + healthpotion + "potion de soin");
/// console.log("Chacune de ces potions coûtent" + price + "pièces d'or !");

let boutique_ouverte = "true";
let boutique_fermee = "false";

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");

if (choix_1) {
    console.log("La boutique s'appelle" + nom_boutique + " !")
}
else if (choix_2) {
    console.log("Votre nom est " + nom_sorcier + " !")
}
else if (choix_3) {
    console.log("Le prix d'une potion de soin est de" + price + " pièce d'or !")
}
else if (choix_4) {
    console.log("Nous avons" + healthpotion + " en stock !")
}


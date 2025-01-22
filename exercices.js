const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "Sell-A-Po";
console.log("Bienvenue dans la boutique aaaa " + nom_boutique + " Aventurier ! 🎉");

let healthpotion = "666";
let price = "40";
let boutique_ouverte = true;
let boutique_fermee = false;

let choix = prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? (fait un choix entre 1 et 4)");
console.log("Quel est ton choix" + choix + " : " );

let choix_1 = nom_boutique;
let choix_2 = nom_sorcier;
let choix_3 = price;
let choix_4 = healthpotion;

if (choix_1) {
    console.log("La boutique s'appelle" + nom_boutique + " !");
}
else if (choix_2) {
    console.log("Votre nom est " + nom_sorcier + " !");
}
else if (choix_3) {
    console.log("Le prix d'une potion de soin est de " + price + " pièce d'or !");
}
else if (choix_4) {
    console.log("Nous avons" + healthpotion + " en stock !");
}

switch (choix) {
    case choix_1:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
    console.log("Le nom de la boutique est" + nom_boutique + " !");
    break;
    case choix_2:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
    console.log("Votre nom est " + nom_sorcier + " !");
    break;
    case choix_3:
      // Instructions à exécuter lorsque le résultat
      // de l'expression à valeurN
    console.log(`Le prix unitaire d'un potion est de ${price} PO !`);
    break;
    case choix_4:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
    console.log("Nous avons" + healthpotion + " en stock !");
    break;
}



/// CALCUL PRIX POTION
const prix_potion = prompt("Combien de potion de soin veux-tu ?");
console.log("")

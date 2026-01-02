// la fonction pour bloquer les caracteres non numeriques dans les champs de saisie, je l'ai deja explique dans le fichier html
//je laisse l'operateur "-" car il peut etre utile pour entrer des nombres negatifs
//je laisse aussi le . pour les nombres decimaux
// donc je dis a la fonction si l'utilisateur appuie sur "e" ou "E" ou "+" ou "," faut pas prendre en compte cette entree
function bloquer(event) {
    if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === ",") {
        event.preventDefault();
    }
}

function calculer() {
    let valeur1 = document.getElementById("nombre").value;
    let valeur2 = document.getElementById("nombre2").value;
    let resultat = document.getElementById("resultat");

    // je vais verifier si les champs sont vides alors je demande a l'utilisateur de les remplir avant de faire les calculs
    if (valeur1 === "" || valeur2 === "") {
        resultat.textContent = "Veuillez remplir tous les champs.";
        resultat.style.color = "red";   // je la couleur du message en rouge pour indiquer que les champs doivent etre remplis
        return;
    }
    // je remet la couleur car j'ai mis le rouge au cas ou un des champs ou les deux sont vides
    resultat.style.color = "black";

    // conversion des valeurs en nombres
    let nombre1 = Number(valeur1);
    let nombre2 = Number(valeur2);

    //les operarions:
    let somme = nombre1 + nombre2;
    let soustraction = nombre1 - nombre2
    let produit = nombre1 * nombre2
    // je vais utiliser l'operateur ternaire pour verifier la condition (le denominateur doit etre different de 0 sinon j'affiche un message d'erreur)
    let quotient = (nombre2 === 0) ? " Division par 0 impossible" : (nombre1 / nombre2);

    // Affichage du résultat dans la page
    resultat.style.whiteSpace = "pre-line"; // c'est pour le retour a la ligne car si on le met pas le \n ne fonctionne pas
    resultat.textContent = "Les résultats\n" + "La somme:\n" + nombre1 + " + " + nombre2 + " = " + somme + "\n" + "La soustraction:\n" + nombre1 + " - " + nombre2 + " = " + soustraction + "\n" + "Le produit:\n" + nombre1 + " × " + nombre2 + " = " + produit + "\n" + "Le quotient\n" + nombre1 + " ÷ " + nombre2 + " = " + quotient;

}
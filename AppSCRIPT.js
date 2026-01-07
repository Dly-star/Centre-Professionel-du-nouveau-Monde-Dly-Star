function continuer() {
    let nom = document.getElementById("nom").value;
    let service = document.getElementById("service").value;
    let resultat = document.getElementById("resultat");

    if (nom === "") {
        alert("Veuillez entrer votre nom.");
        return;
    }

    if (service === "") {
        alert("Veuillez choisir un service.");
        return;
    }

    localStorage.setItem("nom", nom);
    localStorage.setItem("service", service);

    if (service === "CIN") {
        resultat.innerText = nom + 
        ", documents requis pour la CIN : acte de naissance.";
    } 
    else if (service === "Passeport") {
        resultat.innerText = nom + 
        ", documents requis : CIN valide et photos.";
    } 
    else if (service === "Permis") {
        resultat.innerText = nom + 
        ", un examen est requis pour le permis.";
    }

    document.getElementById("pageAccueil").style.display = "none";
    document.getElementById("pageResultat").style.display = "block";
}

function retour() {
    document.getElementById("pageResultat").style.display = "none";
    document.getElementById("pageAccueil").style.display = "block";
}

window.onload = function () {
    let nom = localStorage.getItem("nom");
    let service = localStorage.getItem("service");

    if (nom) document.getElementById("nom").value = nom;
    if (service) document.getElementById("service").value = service;
};
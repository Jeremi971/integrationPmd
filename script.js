function effacer() {
    // Création des ID des summary contenant les dates.
    let summary = document.getElementsByClassName("contenaireDate");
    for (let key in summary) {
        if (Object.hasOwnProperty.call(summary, key)) {
            let element = summary[key];
            element.id = `date_${key}`;
            document.getElementById(`date_${key}`).style.display = "none";
            // console.log(element);

        }
    }
    let contenaireHoraires = document.getElementsByClassName("contenaireHoraire");
    for (let key in summary) {
        if (Object.hasOwnProperty.call(contenaireHoraires, key)) {
            let element = contenaireHoraires[key];
            element.id = `contenaireHoraire_${key}`;
            document.getElementById(`contenaireHoraire_${key}`).style.display = "none";
            // console.log(element);

        }
    }
    let btn = document.getElementById("btn_js").style.display = "none";
    let validation = document.getElementById("validation").style.display = "flex";
    let validationColor = document.getElementById("validation").style.backgroundColor = "white"
    document.body.style.backgroundColor = "#E6F3F4";
    let main = document.getElementById("mainJs").style.backgroundColor = "#E6F3F4";
    let contenaire = document.getElementById("contenaireJs").style.backgroundColor = "#E6F3F4";

}
// *****************************************************************************************
// fonction restaurer
function restaurer() {
    // Création des ID des div contenant les horaires.
    let summary = document.getElementsByClassName("contenaireDate");
    for (let key in summary) {
        if (Object.hasOwnProperty.call(summary, key)) {
            document.getElementById(`date_${key}`).style.display = "flex";
        }
    }
    let contenaireHoraires = document.getElementsByClassName("contenaireHoraire");
    for (let key in summary) {
        if (Object.hasOwnProperty.call(contenaireHoraires, key)) {
            document.getElementById(`contenaireHoraire_${key}`).style.display = "flex";
        }
    }
    let btn = document.getElementById("btn_js").style.display = "block";
    let validation = document.getElementById("validation").style.display = "none";
    document.body.style.backgroundColor = "#FFFFFD";
    let main = document.getElementById("mainJs").style.backgroundColor = "#FFFFFD";
    let contenaire = document.getElementById("contenaireJs").style.backgroundColor = "#FFFFFD";
}
// ****************************************************************************************
// récupération de la class horaire.
let heure = document.getElementsByClassName("horaire");
// Création des ID des div contenant les horaires.
for (let key in heure) {
    if (Object.hasOwnProperty.call(heure, key)) {
        let element = heure[key];
        element.id = `heure_${key}`;

    }
}
// récupération des ID des div contenant les horaires pour pouvoir les manipuler en langage js.
for (let index = 0; index < heure.length; index++) {
    let heureId = document.getElementById(`heure_${index}`);
    // console.log(heureId);
    // lorsqu'on click sur une div horaire...
    heureId.addEventListener("click", effacer);
}
//lorsqu'on click sur c'est noté on revient à l'état initial.
let btn2 = document.getElementById("btn2_js");
btn2.addEventListener("click", restaurer);
//Récupération des textes contenu dans les summary et dans les div horaires
// HEURE....
for (let index = 0; index < heure.length; index++) {
    let heureId = document.getElementById(`heure_${index}`);
    let heureContent = heureId.textContent;
    // console.log(heureContent);
    // DATE....
    let summary = document.getElementsByClassName("contenaireDate");
    for (let key in summary) {
        if (Object.hasOwnProperty.call(summary, key)) {
            let element = summary[key];
            element.id = `date_${key}`;
            document.getElementById(`date_${key}`);
            let dateContent = element.textContent;
            // console.log(dateContent);
            // PARAGRAPHE

            let dateId = document.getElementById(`date_${key}`);
            heureId.addEventListener("click", function() {

                let paragraphe = document.getElementById("para_js");
                let phrase = `${dateContent} à ${heureContent}`;
                paragraphe.textContent = phrase;

                // console.log(phrase);

            })

            // let dateId = document.getElementById(`date_${key}`);
            // dateId.addEventListener("click", function() {
            //     let paragraphe = document.getElementById("para_js");
            //     let phrase = `${dateContent} à ${heureContent}`;
            //     paragraphe.textContent = phrase;
            //     console.log(phrase);
            // })



        }
    }

}
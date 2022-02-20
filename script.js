function effacer() {
    let date1 = document.getElementById("date_1").style.display = "none";
    let date2 = document.getElementById("date_2").style.display = "none";
    let date3 = document.getElementById("date_3").style.display = "none";
    let date4 = document.getElementById("date_4").style.display = "none";
    let date5 = document.getElementById("date_5").style.display = "none";
    let contenaireHoraire1 = document.getElementById("blockVisible_1").style.display = "none";
    let contenaireHoraire2 = document.getElementById("blockVisible_2").style.display = "none";
    let contenaireHoraire3 = document.getElementById("blockVisible_3").style.display = "none";
    let contenaireHoraire4 = document.getElementById("blockVisible_4").style.display = "none";
    let contenaireHoraire5 = document.getElementById("blockVisible_5").style.display = "none";
    let contenaireHoraire6 = document.getElementById("blockVisible_6").style.display = "none";
    let contenaireHoraire7 = document.getElementById("blockVisible_7").style.display = "none";
    let contenaireHoraire8 = document.getElementById("blockVisible_8").style.display = "none";
    let contenaireHoraire9 = document.getElementById("blockVisible_9").style.display = "none";
    let contenaireHoraire10 = document.getElementById("blockVisible_10").style.display = "none";
    let contenaireHoraire11 = document.getElementById("blockVisible_11").style.display = "none";
    let contenaireHoraire12 = document.getElementById("blockVisible_12").style.display = "none";
    let contenaireHoraire13 = document.getElementById("blockVisible_13").style.display = "none";
    let contenaireHoraire14 = document.getElementById("blockVisible_14").style.display = "none";
    let btn = document.getElementById("btn_js").style.display = "none";
    let validation = document.getElementById("validation").style.display = "flex";
    let validationColor = document.getElementById("validation").style.backgroundColor = "white"
    document.body.style.backgroundColor = "#E6F3F4";
    let main = document.getElementById("mainJs").style.backgroundColor = "#E6F3F4";
    let contenaire = document.getElementById("contenaireJs").style.backgroundColor = "#E6F3F4";
}
// fonction restaurer
function restaurer() {
    let date1 = document.getElementById("date_1").style.display = "flex";
    let date2 = document.getElementById("date_2").style.display = "flex";
    let date3 = document.getElementById("date_3").style.display = "flex";
    let date4 = document.getElementById("date_4").style.display = "flex";
    let date5 = document.getElementById("date_5").style.display = "flex";
    let contenaireHoraire1 = document.getElementById("blockVisible_1").style.display = "flex";
    let contenaireHoraire2 = document.getElementById("blockVisible_2").style.display = "flex";
    let contenaireHoraire3 = document.getElementById("blockVisible_3").style.display = "flex";
    let contenaireHoraire4 = document.getElementById("blockVisible_4").style.display = "flex";
    let contenaireHoraire5 = document.getElementById("blockVisible_5").style.display = "flex";
    let contenaireHoraire6 = document.getElementById("blockVisible_6").style.display = "flex";
    let contenaireHoraire7 = document.getElementById("blockVisible_7").style.display = "flex";
    let contenaireHoraire8 = document.getElementById("blockVisible_8").style.display = "flex";
    let contenaireHoraire9 = document.getElementById("blockVisible_9").style.display = "flex";
    let contenaireHoraire10 = document.getElementById("blockVisible_10").style.display = "flex";
    let contenaireHoraire11 = document.getElementById("blockVisible_11").style.display = "flex";
    let contenaireHoraire12 = document.getElementById("blockVisible_12").style.display = "flex";
    let contenaireHoraire13 = document.getElementById("blockVisible_13").style.display = "flex";
    let contenaireHoraire14 = document.getElementById("blockVisible_14").style.display = "flex";
    let btn = document.getElementById("btn_js").style.display = "block";
    let validation = document.getElementById("validation").style.display = "none";
    document.body.style.backgroundColor = "#FFFFFD";
    let main = document.getElementById("mainJs").style.backgroundColor = "#FFFFFD";
    let contenaire = document.getElementById("contenaireJs").style.backgroundColor = "#FFFFFD";
}
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
    console.log(heureId);
    // lorsqu'on click sur une div horaire...
    heureId.addEventListener("click", effacer);
}
//lorsqu'on click sur c'est noté on revient à l'état initial.
let btn2 = document.getElementById("btn2_js");
btn2.addEventListener("click", restaurer);
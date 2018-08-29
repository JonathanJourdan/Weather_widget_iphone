/********* Fichier qui permet le fonctionnement de l'heure, du calendrier, du style et de la météo ********/
/********* certaines valeurs sont renseignées dans le fichier config.js pour etre configurées à souhait *******/


//Fonction qui gére l'heure, les minutes et am/pm
function GetClock() {

    setInterval(function () {

        var d = new Date();
        var heure = d.getHours();
        var minutes = ('0' + d.getMinutes()).slice(-2);


        document.getElementById('heure').innerHTML = heure;
        document.getElementById('minutes').innerHTML = minutes;

        //Si format ampm activé dans le fichier config  
        if (ampm == true) {

            var ap;

            if (heure == 0) { ap = "AM"; heure = 12; }

            else if (heure < 12) { ap = "AM"; }

            else if (heure == 12) { ap = "PM"; }

            else if (heure > 12) { ap = "PM"; }


            document.getElementById('ampm').innerHTML = ap;

        }

        else {
            document.getElementById('ampm').style.display = "none";
        }


    }, 1000);

}

//Fonction qui gére la date
function GetCalendar() {

    //Si calendrier activé dans config.js
    if (calendar == true) {

        setInterval(function () {

            date = new Date;
            year = date.getFullYear();
            month = date.getMonth();
            //A faire pour une future version traduire les valeurs des deux tableaux months et days en fonction des langues
            months = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
            d = date.getDate();
            day = date.getDay();
            days = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');

            document.getElementById('jour').innerHTML = days[day];
            document.getElementById('date').innerHTML = '&nbsp;' + d + '&nbsp;';
            document.getElementById('mois').innerHTML = months[month];


        }, 1000);

    }
    //Sinon on masque les éléments du dom
    else {
        document.getElementById('jour').style.display = "none";
        document.getElementById('date').style.display = "none";
        document.getElementById('mois').style.display = "none";
    }

}


//Fonction gérant le style en fonction des valeurs rentrées dans le fichier config.js
function Style() {
    //background
    //Utilisation du site unsplash pour les fonds d'écran random etc
    if (background == "daily") {
        document.body.style.background = 'url("https://source.unsplash.com/daily?' + backgroundcategorie + '") center center no-repeat';
    }
    else if (background == "random") {
        document.body.style.background = 'url("https://source.unsplash.com/random/1920x1080?' + backgroundcategorie + '") center center no-repeat';
    }
    else if (background == "weekly") {
        document.body.style.background = 'url("https://source.unsplash.com/weekly?' + backgroundcategorie + '") center center no-repeat';
    }
    else {
        document.body.style.background = "transparent";
    }

    document.body.style.backgroundSize = "cover";

    //calendar color*/
    document.getElementById("jour").style.color = calendarcolor;
    document.getElementById("mois").style.color = calendarcolor;
    //opacité/couleur date et hier...
    document.getElementById("date").style.color = datecolor;
    //couleur ampm
    document.getElementById("ampm").style.color = ampmcolor;
    //color horloge
    document.getElementById("heure").style.color = hourcolor;
    document.getElementById("separator").style.color = separatorcolor;
    document.getElementById("minutes").style.color = minutecolor;

    //Overlay  
    document.getElementById("wrap").style.background = overlaycolor;

    //Meteo
    //Si météo activée on peut masquer certains éléments en fonction du config.js
    if (enableweather == true) {

        if (maskweatherelement == "icon") {
            document.getElementById("icone").style.display = "none";
            document.getElementById("temperature").style.webkitTransform = "translateY(0)";
            document.getElementById("temperature").style.paddingTop = "1rem";
            document.getElementById("numerique").style.paddingBottom = "20px";
        }
        if (maskweatherelement == "temp") {
            document.getElementById("temperature").style.display = "none";
        }

        if (maskweatherelement == "city") {
            document.getElementById("city").style.display = "none";
        }

        document.getElementById("temperature").style.color = tempcolor;

    }

}



//Fonction qui permet d'obtenir la météo grace à l'api openWeather, il faut récupérer l'id de la ville sur le site (nécessite une clé api pour fonctionner, à configurer dans le config.js)
//Pas de géolocalisation car sur les tweaks iPhone ça ne fonctionne pas dommage !!!
function GetMeteo() {

    if (enableweather == true) {
        (function ($) {

            $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=' + cityid + '&lang=fr&units=' + weatherunit + '&APPID=' + apikey + '', function (jd) {
                console.log(jd);

                var icone = "http://openweathermap.org/img/w/" + jd.weather['0'].icon + ".png";
                document.getElementById("icone").src = icone;

                var tempconvert = Math.round(jd.main.temp);
                if (weatherunit == "metric") {
                    document.getElementById('temperature').innerHTML = tempconvert + ' °C';
                }
                else {
                    document.getElementById('temperature').innerHTML = tempconvert + ' °F';
                }

                document.getElementById('city').innerHTML = jd.name;

            });

        })(jQuery);

    }
    else {
        document.getElementById('meteoConteneur').style.display = "none";
    }

}



//On appelle les fonctions
window.onload = function () {

    GetClock();

    GetCalendar();

    Style();

    GetMeteo();

    setInterval(GetMeteo, 1800000);

}


git page : https://jonathanjourdan.github.io/Weather_widget_iphone/LockBackground.html

# Weather_widget_iphone
Widget pour lockScreen iPhone. A besoin d'une clé api OpenWeather Map pour fonctionner !!!

Ce widget est premiérement destiné pour être utilisé avec des tweaks comme LockHTML ou GroovyLock sur iPhone/iPad.
Il peut cependant être utiliser sur tout navigateur internet puisque il est entiérement codé en Html/Css/JavaScript.

Pas de géolocalisation car bloqué avec les tweaks cités plus haut

Il affiche : 
  - L'heure et la date de l'appareil l'exécutant
  - La météo en temps réel de la ville de votre choix (nécessite une clé api OpenWeather Map disponible sur leur site https://openweathermap.org/)
  - Fond d'écran issus du site https://unsplash.com/ (plusieurs paramétres possibles)
  
  # Fichier config.js
  
C'est le fichier permettant de configurer le Widget, identique à option.plist qui lui est pour LockHTML (indispensable)
 - Activer ou non le format am/pm
 - Activer ou non le calendrier
 - Changer la couleur de l'overlay (format rgba utilisé mais libre à vous)
 - Rajouter un background aléatoire issue du site https://unsplash.com/ si la valeur est "random" utilisation des services de unsplash pour chercher une image qui sera aléatoire à chaque chargement du plugin. Possibilité d'avoir le fond de la semaine avec "weekly" ou du jour avec "daily". Je n'utilise pas en entier l'api de unsplash pour plus d'info : https://unsplash.com/developers
 - Cibler le fond par catégorie par exemple : cars, nature, lake...
 - Changer la couleur ou l'opacitée des éléments du widget
 - Activer ou non la météo
 - Rentrer votre Api Key d'OpenWeather Map
 - Modifier le code de la ville
 - Modifier l'unité de mesure de la météo métric ou imperial

# Versions Future
- Ajout des prévisions météo sur 5 jours
- Traduction en plusieurs langue

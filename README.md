# Handic-App
Handic'App est un projet réalisé pour Microsoft. L'objectif est de créer une application qui centralise les différents services cognitifs Azure existant afin de simplifier leur accessibilité. Ces services sont un réel soutien pour les personnes handicapées.

Pour réaliser cette application, on a décidé d'utiliser le langage React-Native. React-Native est un framework java-script populaire pour réaliser des applications cross-plateformes (application disponible sur IOS et Android).

React-Native est un langage bien adapté pour la programmation orienté objet. En effet chaque élément sur l'application (bouton,image,barre de saisie ...) fait l'objet d'un fichier de code séparé qui peut être réutilisé ensuite dans n'importe quel écran de l'application. Ci-dessous, voici la structure générale d'un fichier de code en React-Native:

Tout d'abord, il faut importer les bibliothèques/fonctions dont on a besoin
![import](https://user-images.githubusercontent.com/94694942/150673940-ccfabca6-7bc0-4531-ac30-f7b1562ac1d9.PNG)

Ensuite vient le coeur du fichier, ici nous avons une classe mais on peut également décider de créer une fonction.
Une classe en react native est composé de:
-constructeurs
-props
-render (obligatoire)
-return (pour afficher quelque chose à l'écran, il faut placer son code du return entre des balises <View>)

![image](https://user-images.githubusercontent.com/94694942/150674039-53b04ae8-988e-40f7-bf2d-54beecd918de.png)

Ensuite, on peut décider de créer un style pour designer les composants de la classe/fonction
![image](https://user-images.githubusercontent.com/94694942/150674505-dcde5b4e-5a29-45e0-aed7-20c1ab9c3de9.png)

Enfin, il faut exporter la classe afin de pouvoir l'utiliser ailleurs dans l'application (Ici on exporte la classe avec (withNavigation car notre classe renvoie vers une autre, mais on peut utiliser simplement "export default" s'il n'ya pas de renvoie vers un autre objet)
![image](https://user-images.githubusercontent.com/94694942/150674541-3e8cf8e7-6ce9-4416-a1bb-0c2a1a68f7f6.png)


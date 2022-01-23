# Handic-App
Handic'App est un projet réalisé pour Microsoft. L'objectif est de créer une application qui centralise les différents services cognitifs Azure existant afin de simplifier leur accessibilité. Ces services sont un réel soutien pour les personnes handicapées.

Pour réaliser cette application, on a décidé d'utiliser le langage React-Native. React-Native est un framework java-script populaire pour réaliser des applications cross-plateformes (application disponible sur IOS et Android).

React-Native est un langage bien adapté pour la programmation orienté objet. En effet chaque élément sur l'application (bouton,image,barre de saisie ...) fait l'objet d'un fichier de code séparé qui peut être réutilisé ensuite dans n'importe quel écran de l'application. Ci-dessous, voici la structure générale d'un fichier de code en React-Native:

# Structure d'un fichier en React-Native
Tout d'abord, il faut importer les bibliothèques/fonctions dont on a besoin
![import](https://user-images.githubusercontent.com/94694942/150673940-ccfabca6-7bc0-4531-ac30-f7b1562ac1d9.PNG)

Ensuite vient le coeur du fichier, ici nous avons une classe mais on peut également décider de créer une fonction.
Une classe en react native est composé de
-constructeurs
-props
-render (obligatoire)
-return (pour afficher quelque chose à l'écran, il faut placer son code du return entre des balises <View>)

![image](https://user-images.githubusercontent.com/94694942/150674039-53b04ae8-988e-40f7-bf2d-54beecd918de.png)

Ensuite, on peut décider de créer un style pour designer les composants de la classe/fonction
![image](https://user-images.githubusercontent.com/94694942/150674505-dcde5b4e-5a29-45e0-aed7-20c1ab9c3de9.png)

Enfin, il faut exporter la classe afin de pouvoir l'utiliser ailleurs dans l'application (Ici on exporte la classe avec (withNavigation car notre classe renvoie vers une autre, mais on peut utiliser simplement "export default" s'il n'ya pas de renvoie vers un autre objet)
![image](https://user-images.githubusercontent.com/94694942/150674541-3e8cf8e7-6ce9-4416-a1bb-0c2a1a68f7f6.png)
  
# Structure de l'application
 
![image](https://user-images.githubusercontent.com/94694942/150674774-c9788e05-8eda-4cfd-a2df-1eb0ad8d461a.png)
  
Les dossiers .expo et .vscode sont générés automatiquement à la création d'une application React-Native et sert au bon fonctionnement de cette dernière.
  
Assets contient les images affichés dans l'application
![image](https://user-images.githubusercontent.com/94694942/150674858-a52f5913-2433-4031-94ee-72efa0c4b1ee.png)

Components regroupe les différents objets (boutton, barre de recherche ...)
![image](https://user-images.githubusercontent.com/94694942/150674923-51efe59a-f8d3-48e7-9cd2-0cf9bc1c1739.png)

Navigator est le fichier qui permet la navigation entre les différents écrans de l'application
![image](https://user-images.githubusercontent.com/94694942/150674954-2ae7f064-2fe0-4ce4-a72c-b7522aa4e48e.png)

node_modules, comme son nom l'indique, contient les différents modules de l'application. C'est un fichier très volumineux.
  
Screen contient les différents écrans de l'application. Ces écrans sont composés d'objets du dossier Components
![image](https://user-images.githubusercontent.com/94694942/150675036-92b502a2-beaf-48f9-aa28-38dedc37b683.png)

App.js est le fichier principal. C'est l'application à proprement parlé. 
![image](https://user-images.githubusercontent.com/94694942/150675066-6d901038-6a49-49cc-ab11-9cbff3653274.png)

Paradoxalement, il est très simple car tout est compacté avant dans les différents fichiers. (C'est l'avantage de la POO)
![image](https://user-images.githubusercontent.com/94694942/150675086-0acb6ab8-395d-41d9-a373-3c046190e90f.png)

Les derniers dossiers sont aussi des dossiers générés automatiquement à la création de l'application
![image](https://user-images.githubusercontent.com/94694942/150675136-dc63d9f8-58ff-482a-85ed-f2d00103fe57.png)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

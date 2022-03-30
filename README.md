# Checkpoint 1 - JS

Ton premier checkpoint !

**!!! PREMIERE ETAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

- Clone ce projet
- Crée une branche "nom_prenom", qui va contenir ton avancée. (nom_prenom sera remplacé par ton nom et ton prénom...)

**A chaque fois que tu complètes un exercice:**

- Fais un commit avec un message EXPLICITE sur ta branche.
- Fais un push de ta branche.

## 1 - CSS

Tu vas devoir réaliser l'intégration CSS de la page `public/index.html`.
Tu ne dois pas en modifier la structure (ajouter/modifier des balises), mais tu peux ajouter des classes.

Modifie le fichier `/public/css/style.css`.

***Astuces* :**
* Les couleurs existent déjà dans le fichier de style
* Toutes les marges devraient faire 0.5rem, 1rem ou 2rem
* Aucune taille de police de caractère n'est à définir

Pour la version mobile, base toi sur la maquette suivante :

![maquette mobile](./mobile.png)

Pour la version desktop (>768px), base toi sur la maquette suivante :

![maquette deskyop](./desktop.png)

## 2: Algorithmes JS

Réalise l'ensemble des algos présents.
Des tests unitaires sont présents, il te permettront de savoir si tes algos fonctionnent !

Pour les lancer il faut avant tout installer les dépendances (avec `npm install` :wink:).
Ensuite tu pourras les exécuter :

```sh
npm test # cette commande exécute tous les tests
npm run test:1 # cette commande lance les tests de l'algo 1 uniquement
npm run test:2 # cette commande lance les tests de l'algo 2 uniquement
# etc... pour tous les algos.
```

> [algo1.js](./algo/1/hasLegalAge.js)
>
> [algo2.js](./algo/2/getGroup.js)
>
> [algo3.js](./algo/3/countStudents.js)

## 3 - Manipulation du DOM

Modifie le fichier `/public/js/script.js` afin d'ajouter les fonctionnalités suivantes :

- Utilise le JavaScript pour modifier le contenu du titre `h1` de la page par le texte que tu veux.
- Ajoute un bouton `Couleur du titre` en dessous du titre `h1` dans le HTML. Lors du clic sur ce bouton, change la couleur du titre `h1` par la couleur de ton choix.
- Ajoute un autre bouton `Couleur des sous-titres` au début de la balise `section` contenant les articles. Lors du clic sur ce bouton, utilises un `prompt` pour demander une couleur hexadécimale à l'utilisateur (ex: "#ff0000"). Change la couleur de tous les titres `h3` par la couleur demandée.
- Sélectionne l'ensemble des liens `Apply now` et lors d'un clic dessus, affiche une `alert` avec le texte de ton choix.
- Ajoute un formulaire avec un champs "Message" et un bouton "Envoyer". Lors du clic sur le bouton, ajoute le contenu du message dans le `ul` ayant la classe `messages`, tout en respectant une bonne structure html.
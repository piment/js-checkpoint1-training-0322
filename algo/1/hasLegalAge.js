/*
L'école organise une soirée de fin d'année et tous les élèves majeurs sont invités. Afin d'éviter d'envoyer des invitations aux élèves mineurs, tu dois créer une méthode qui vérifie l'âge d'un élève et qui retourne s'il est majeur.

Crée une fonction nommée hasLegalAge, qui retourne vrai si l'âge passé en argument est supérieur ou égal à 18 et faux sinon.
*/

function hasLegalAge(age) {
  return age >= 18;
}

module.exports = hasLegalAge;

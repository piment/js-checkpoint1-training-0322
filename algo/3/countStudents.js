/*
L'école a besoin de compter de nombre de ses futurs étudiants souhaitant faire du JavaScript. Pour cela elle a envoyé un sondage demandant le langage à étudier. Certains candidats ont écrit "JS" ou "JavaScript", parfois avec des minuscules et majuscules mal placées, ex : "js" ou "Javascript".

Crée une fonction nommée countStudents, qui reçoit un tableau contenant les langages choisies par les candidats. Retourne le nombre de candidats ayant choisi le langage JavaScript (qui peut-être "js" ou "javascript" sans tenir compte de la casse).
*/

function countStudents(languages) {
  return languages.reduce((total, current) => current.match(/js|javascript/i) !== null ? total + 1: total, 0)
}

module.exports = countStudents;

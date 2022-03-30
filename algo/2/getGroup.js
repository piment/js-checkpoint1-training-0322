/*
Tu dois répartir les élèves d'une classe en deux groupes. Chaque élève possède un numéro et tu veux utiliser cette donnée pour l'assigner à un groupe A ou B.

Crée une fonction nommée getGroup, qui reçoit le numéro d'un élève. S'il est pair, retourner le caractère A, sinon retourner le caractère B.
*/

function getGroup(studentId) {
  return studentId % 2 === 0 ? 'A' : 'B';
}

module.exports = getGroup;

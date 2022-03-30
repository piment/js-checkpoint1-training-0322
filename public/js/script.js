console.log("script loaded!");

// Utilise le JavaScript pour modifier le contenu du titre h1 de la page par le texte que tu veux.

const siteTitle = document.querySelector("main section h1");
siteTitle.textContent = "Hack Code school";

// Ajoute un bouton 'Couleur du titre' en dessous du titre h1 dans le HTML.
const changeTitleColorBTN = document.createElement("button");
changeTitleColorBTN.textContent = "Couleur du titre";
changeTitleColorBTN.classList.add("colorBTN");
document
  .querySelector("section:first-of-type")
  .insertBefore(changeTitleColorBTN, siteTitle.nextSibling);

// Lors du clic sur ce bouton, change la couleur du titre h1 par la couleur de ton choix.
changeTitleColorBTN.addEventListener("click", (ev) => {
  ev.preventDefault();
  siteTitle.classList.toggle("titleHightlight");
});

//Ajoute un autre bouton 'Couleur des sous-titres' au début de la balise section contenant les articles.
const changeSubTitleColorBTN = document.createElement("button");
changeSubTitleColorBTN.textContent = "Couleur des sous-titres";
changeSubTitleColorBTN.classList.add("colorBTN");
document
  .querySelector("section:nth-child(2)")
  .insertBefore(
    changeSubTitleColorBTN,
    document.querySelector("article:first-of-type")
  );

//Lors du clic sur ce bouton, utilises un prompt pour demander une couleur hexadécimale à l'utilisateur (ex: "#ff0000").
changeSubTitleColorBTN.addEventListener("click", (ev) => {
  ev.preventDefault();
  const newHexColor = prompt(
    "Merci d'indiquer une nouvelle couleur au format hexadecimal (ex: #AABBCC ou AABBCC)"
  );
  //Change la couleur de tous les titres h3 par la couleur demandée.
  document
    .querySelectorAll("h3")
    .forEach(
      (h3) =>
        (h3.style.color =
          newHexColor[0] === "#"
            ? newHexColor.toUpperCase()
            : "#" + newHexColor.toUpperCase())
    );
});

// Sélectionne l'ensemble des liens Apply now et lors d'un clic dessus, affiche une alert avec le texte de ton choix.
const applyNowLink = document.querySelectorAll(".apply");
applyNowLink.forEach((link) =>
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    alert("Bon que tu le choix as fait jeune Wilder!");
  })
);

// Ajoute un formulaire avec un champs "Message" et un bouton "Envoyer".
const form = document.createElement("form");
form.classList.add("form");

const messageLabel = document.createElement("label");
messageLabel.setAttribute("for", "message");
messageLabel.textContent = "Laisser nous un message";
form.appendChild(messageLabel);

const messageInput = document.createElement("textarea");
messageInput.setAttribute("id", "message");
messageInput.setAttribute("cols", "30");
messageInput.setAttribute("rows", "10");
form.appendChild(messageInput);

const submitMessageBTN = document.createElement("button");
submitMessageBTN.classList.add("colorBTN");
submitMessageBTN.textContent = "Envoyer";

// Lors du clic sur le bouton, ajoute le contenu du message dans le ul ayant la classe messages, tout en respectant une bonne structure html.
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const messagesList = document.querySelector(".messages");
  const message = document.createElement("li");
  const dateSpan = document.createElement("span");

  let messageDate = new Date();
  messageDate = messageDate.toLocaleString("fr-FR") + " :";
  dateSpan.textContent = messageDate;

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent = document.querySelector("#message").value;
  message.appendChild(dateSpan);
  message.appendChild(messageParagraph);

  document.querySelector("#message").value = "";
  messagesList.appendChild(message);

  console.log(submitMessageBTN.classList);
});

form.appendChild(submitMessageBTN);

document
  .querySelector("body")
  .insertBefore(form, document.querySelector("footer"));

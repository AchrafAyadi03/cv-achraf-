const quiz = [
  {
    question: "Que signifie HTML ?",
    reponses: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hardware Text Management Language"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Quelle propriété permet de changer la police du texte ?",
    reponses: ["font-family", "align-text: center;", "center-text: true;", "text-center: yes;"],
    correct: "font-family"
  },
  {
    question: "Comment afficher une boîte de dialogue avec un message ?",
    reponses: ["console('Message');", "promptBox('Message');", "msg('Message');", "alert('Message');"],
    correct: "alert('Message');"
  },
  {
    question: "Quel élément HTML est utilisé pour créer un lien ?",
    reponses: ['<a>', '<link>', '<href>', '<url>'],
    correct: '<a>'
  },
  {
    question: "Quelle méthode permet de sélectionner un élément par son ID ?",
    reponses: ["document.getElementById()", "document.getElementByClass()", "document.getElementByName()", "document.getElementByTag()"],
    correct: "document.getElementById()"
  },
  {
    question: "Quelle propriété modifie l’espacement entre les lettres ?",
    reponses: ["letter-spacing", "text-spacing", "spacing", "font-spacing"],
    correct: "letter-spacing"
  },
  {
    question: "Quelle propriété change l’arrière-plan d’un élément ?",
    reponses: ["background-color", "bg-color", "color", "background-style"],
    correct: "background-color"
  },
  {
    question: "Quel élément est utilisé pour insérer une image ?",
    reponses: ["<img>", "<image>", "<src>", "<picture>"],
    correct: "<img>"
  },
  {
    question: "Quelle instruction permet d’écrire quelque chose dans la console ?",
    reponses: ["console.log('Message');", "log.console('Message');", "print('Message');", "console.write('Message');"],
    correct: "console.log('Message');"
  },
  {
    question: "Quelle propriété définit la taille du texte ?",
    reponses: ["text-size", "font-size", "size", "text-style"],
    correct: "font-size"
  }
];

let questionIndex = 0;
let score = 0;

function afficheQuestion() {
  const { question, reponses } = quiz[questionIndex];
  const reponseDiv = document.getElementById("reponse");

  document.getElementById("question").textContent = question;
  reponseDiv.innerHTML = "";

  reponses.forEach(r => {
    const btn = document.createElement("button");
    btn.className = "reponse-btn";
    btn.textContent = r;
    btn.onclick = () => verifReponse(r, btn);

    reponseDiv.appendChild(btn);
  });
}

function verifReponse(reponseChoisie, boutonClique) {
  const bonneReponse = quiz[questionIndex].correct;

  if (reponseChoisie.toLowerCase() === bonneReponse.toLowerCase()) {
    boutonClique.classList.add("correct");
    score++;
  } else {
    boutonClique.classList.add("wrong");
  }

  document.querySelectorAll(".reponse-btn").forEach(btn => {
    btn.disabled = true;
  });

  document.getElementById("btnSuivant").style.display = "block";
}

function questionSuivante() {
  questionIndex++;

  if (questionIndex < quiz.length) {
    afficheQuestion();
    document.getElementById("btnSuivant").style.display = "none";
  } else {
    afficherResultat();
  }
}

function afficherResultat() {
  document.getElementById("question").textContent =
    `Quiz terminé 🎉 Score : ${score} / ${quiz.length}`;

  document.getElementById("reponse").innerHTML = "";
  document.getElementById("btnSuivant").style.display = "none";
}





afficheQuestion();

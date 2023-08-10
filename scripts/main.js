
/* Code pour permettre à l'image de changer en cas de clicque sur celle ci.*/
let $mou = document.querySelector("img");

$mou.addEventListener("click", function () {
  let $ton = $mou.getAttribute("src");
  if ($ton === "image/entete1.webp") {
    $mou.setAttribute("src", "image/entete2.jpg");
  } else {
    $mou.setAttribute("src", "image/entete1.webp");
  }
});

/* Code pour ajouter le nom de l'utilisateur au titre. */
let $bouton = document.querySelector("button");
let $titre=document.querySelector("h1");

function setUserName() {
    let $nom = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom",$nom);
    $titre.textContent = $nom +" est le roi du mouton";
  }
  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let $nom2 = localStorage.getItem("nom");
    $titre.textContent = $nom2+" est le roi du mouton";
  }
    
  $bouton.addEventListener("click", function () {
    setUserName();
  });



//  Hämta  HtML element
const changeContentButton = document.getElementById("changeContentButton");
const changedText = document.getElementById("changedText");

const changeTextButton = document.getElementById("changeTextButton");
const resetButton = document.getElementById("resetButton");

const pageTitle = document.getElementById("pageTitle");
const cardTitle = document.getElementById("cardTitle");
const mainText = document.getElementById("mainText");


// 2) Knapp 1: Visa info
changeContentButton.addEventListener("click", function() {
  changedText.style.display = "flex";
  changedText.style.justifyContent = "center";
  changedText.textContent = "Innehållet ändrades med JavaScript!";
  changedText.style.color = "#2ecc71";
});


// 3) Knapp 2: Byt text
changeTextButton.addEventListener("click", function() {
  pageTitle.textContent = "Min infosida (uppdaterad)";
  cardTitle.textContent = "Ny rubrik!";
  mainText.textContent = "Det här är en ny text som kom med JavaScript.";
});


// 4) Knapp 3: Start (reset)
resetButton.addEventListener("click", function() {
  pageTitle.textContent = "Min infosida";
  cardTitle.textContent = "Välkommen!";
  mainText.textContent = "Här är en kort text på sidan.";

  changedText.style.display = "none";
  changedText.textContent = "Här kommer extra info!";
  changedText.style.color = "black";
});

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClosingBtn = document.querySelectorAll(".close");
const modalSubmitBtn = document.getElementById("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClosingBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// exit modal form
function closeModal() {
  modalbg.style.display = "none";
}

;

// const needed for the checkFormValidity function
const modalFirst = document.getElementById("first");
const modalLast = document.getElementById("last");
const modalEmail = document.getElementById("email");
const modalBirthdate = document.getElementById("birthdate");
const modalQuantity = document.getElementById("quantity");
const modalCheckbox1 = document.getElementById("checkbox1");
const modalLocation = document.getElementsByName("location");

//check form validity function
function checkFormValidity() {            //Shouldn't I pass arguments here? The debugger says that "TypeError: modalFirst is undefined" when I do... and works when I don't
  if (
    modalFirst.value.length >= 2 
    && modalLast.value.length >= 2
    && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(modalEmail.value)
    && (/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/).test(modalBirthdate.value)      //Why is the value stored as YYYY-MM-DD? Is it a standard?
    && (/^\d+$/).test(modalQuantity.value)
    && checkOneRadioChecked(modalLocation)
    && modalCheckbox1.checked 
  ){
    modalSubmitBtn.removeAttribute('disabled', 'disabled');
  }
  else{
    modalSubmitBtn.setAttribute('disabled', 'disabled');
  }
}

//check field validity function
function checkFieldValidity() {
if (modalFirst.value.length < 2){
  console.log("condition started");
  document.querySelector(".errorFirst").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  document.querySelector(".errorFirst").setAttribute("display", "inline");
}
else {
  document.querySelector(".errorFirst").setAttribute("display", "none");
}

if(modalLast.value.length < 2){
  document.querySelector(".errorLast").setAttribute("display", "inline");
  document.querySelector(".errorLast").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
}
else {
  document.querySelector(".errorLast").setAttribute("display", "none");
}

if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(modalEmail.value)){
  document.querySelector(".errorEmail").innerHTML = "Veuillez entrer une adresse mail valide.";
}
else {
  document.querySelector(".errorFirst").innerHTML = "";
}

if(!(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/).test(modalBirthdate.value)){
  document.querySelector(".errorBirthdate").innerHTML = "Vous devez entrer votre date de naissance.";
}
else {
  document.querySelector(".errorFirst").innerHTML = "";
}

if(!(/^\d+$/).test(modalQuantity.value)){
  document.querySelector(".errorQuantity").innerHTML = "Vous devez choisir un nombre de tournoi auquel vous avez participé";
}
else {
  document.querySelector(".errorFirst").innerHTML = "";
}

if(!checkOneRadioChecked(modalLocation)){
  document.querySelector(".errorLocation").innerHTML = "Vous devez choisir une option.";
}
else {
  document.querySelector(".errorFirst").innerHTML = "";
}

if(!modalCheckbox1.checked){
  document.querySelector(".errorCheckbox").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
}
else {
  document.querySelector(".errorFirst").innerHTML = "";
}
}

//launch checkFormValidity on field changes and enable button if valid
[modalFirst, modalLast, modalEmail, modalBirthdate, modalQuantity, modalCheckbox1].forEach(field => {
  field.addEventListener('change', (e) => {         //is there a way to pass to the checkFieldValidity function the argument that 'change' was triggered with?
    checkFieldValidity(field);
    checkFormValidity();
  });
});

//function to check if radio button has been checked
function checkOneRadioChecked(modalLocation) {
  let isSomeOneChecked = false;
  document.querySelectorAll('input[name="location"]').forEach(input => {
    if (input.checked) {
        isSomeOneChecked = true;
    }
  })
  return isSomeOneChecked;
}
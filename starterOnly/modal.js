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
const modalSubmitBtn = document.querySelectorAll("btn-submit");

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


// const needed for the checkModalForm function
const modalFirst = document.getElementById("first");
const modalLast = document.getElementById("last");
const modalEmail = document.getElementById("email");
const modalBirthdate = document.getElementById("birthdate");
const modalQuantity = document.getElementById("quantity");
const modalLocation = document.getElementsByName("location");
const modalCheckbox1 = document.getElementById("checkbox1");



//check modal form validity
function checkFormValidity() {
  if (
    modalFirst.value >= 2
    /* && modalLast.value >= 2
    && modalEmail.value == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    && modalBirthdate.value == /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    && Number.isInteger(modalQuantity.value) == true
    && modalLocation.checked == true
    && modalCheckbox1.checked == true */
  ){
    modalSubmitBtn.removeAttribute('disabled');
  }
}

//launch checkFormValidity on field changes and enable button if valid

modalFirst.addEventListener('change', (event) => {
  checkFormValidity();
});

/*

modalLast.addEventListener('change', (event) => {
  checkFormValidity();
});

modalEmail.addEventListener('change', (event) => {
  checkFormValidity();
});
modalBirthdate.addEventListener('change', (event) => {
  checkFormValidity();
});
modalQuantity.addEventListener('change', (event) => {
  checkFormValidity();
});
modalLocation.addEventListener('change', (event) => {
  checkFormValidity();
});
modalCheckbox1.addEventListener('change', (event) => {
  checkFormValidity();
});

*/

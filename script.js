// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".email-form");
  const input = form.querySelector("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! We'll get you started soon with Netflix!");
    input.value = ""; // Reset the input field
  });
});


// slider page-------------------------------------------------------------

const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".slider-btn.left");
const rightBtn = document.querySelector(".slider-btn.right");

let scrollAmount = 0;

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 180, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -180, behavior: "smooth" });
});

// FAQ page-------------------------------------------------------------
let questionPlus = document.querySelectorAll(".question-plus");
let answers = document.querySelectorAll(".ans");
let plus = document.querySelectorAll(".plus");
let cross = document.querySelectorAll(".cross");

answers.forEach(answer => answer.style.display = "none");

cross.forEach(crossIcon => crossIcon.style.display = "none");

questionPlus.forEach((question, index) => {
  question.onclick = function () {
    answers[index].style.display = "block";
    plus[index].style.display = "none";
    cross[index].style.display = "block";
  };
});

cross.forEach((crossIcon, index) => {
  crossIcon.onclick = function (e) {
    e.stopPropagation(); // Prevent(reopening) the click from bubbling up to the question
    answers[index].style.display = "none";
    plus[index].style.display = "block";
    cross[index].style.display = "none";
  };
});

questionPlus.forEach((question, index) => {
  question.onclick = function () {
    answers.forEach((ans) => ans.style.display = "none");
    plus.forEach((p) => p.style.display = "block");
    cross.forEach((c) => c.style.display = "none");
    answers[index].style.display = "block";
    plus[index].style.display = "none";
    cross[index].style.display = "block";
  };
});


//Signin Page----------------------------------------------------
let wholePage = document.getElementById('entire-page');
let signinPage = document.getElementById('body')
let signinButton = document.getElementsByClassName('sign-in');

signinPage.style.display = 'none';

Array.from(signinButton).forEach(btn => {
  btn.onclick = function() {
    wholePage.style.display = 'none';
    signinPage.style.display = 'block'
  };
});

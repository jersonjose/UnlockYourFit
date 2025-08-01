const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Tools Section

var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
var clearButton = document.querySelector(".clear-button");
let resultArea = document.querySelector(".comment");

function check() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
  } else {
    calculateBmi();
  }
};

function calculateBmi() {
  var j = [age.value, height.value, weight.value];

  if (male.checked) {
    j.push("male");
  } else if (female.checked) {
    j.push("female");
  }

  var bmi = Number(j[2]) / (Number(j[1]) / 100) ** 2;
  var result = "";

  if (Number(j[0]) >= 20) {
    if (bmi < 16) {
      result = "Severe Thinness";
    } else if (16 < bmi && bmi <= 17) {
      result = "Moderate Thinness";
    } else if (17 < bmi && bmi <= 18) {
      result = "Mild Thinness";
    } else if (18 < bmi && bmi <= 25) {
      result = "Normal";
    } else if (25 < bmi && bmi <= 30) {
      result = "Overweight";
    } else if (30 < bmi && bmi <= 35) {
      result = "Obese Class I";
    } else if (35 < bmi && bmi <= 40) {
      result = "Obese Class II";
    } else if (bmi >= 401) {
      result = "Obese Class III";
    }
  } else {
    alert("The BMI calculator is only applicable for ages 20 or older.");
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are classified as <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML =
    bmi.toFixed(2) + " kg/m<sup>2</sup>";
};


var ageBmr = document.getElementById("age-bmr");
var heightBmr = document.getElementById("height-bmr");
var weightBmr = document.getElementById("weight-bmr");
var maleBmr = document.getElementById("male-bmr");
var femaleBmr = document.getElementById("female-bmr");
var clearButtonBmr = document.querySelector(".clear-button-bmr");

function checkBmr() {
  if (
    ageBmr.value == "" ||
    heightBmr.value == "" ||
    weightBmr.value == "" ||
    (maleBmr.checked == false && femaleBmr.checked == false)
  ) {
    alert("All fields are required!");
  } else {
    calculateBmr();
  }
};

function calculateBmr() {
  var j = [ageBmr.value, heightBmr.value, weightBmr.value];

  if (maleBmr.checked) {
    var bmr = 10 * Number(j[2]) + 6.25 * Number(j[1]) - 5 * Number(j[0]) + 5;
  } else if (femaleBmr.checked) {
    var bmr = 10 * Number(j[2]) + 6.25 * Number(j[1]) - 5 * Number(j[0]) - 161;
  }

  // var result = "";

  // if (6 < Number(j[0]) && Number(j[0]) <= 8) {
  //   switch (bmr) {
  //     case bmr >= 1400 && bmr <= 1600:
  //       result = "Sedentary";
  //     case bmr >= 1600 && bmr <= 1800:
  //       result = "Moderately Active";
  //     case bmr >= 1800 && bmr <= 2000:
  //       result = "Active";
  //   }
  
  // } else if (Number(j[0]) > 31) {
  //   switch (bmr) {
  //     case bmr >= 2200 && bmr <= 2400:
  //       result = "Sedentary";
  //     case bmr >= 2400 && bmr <= 2600:
  //       result = "Moderately Active";
  //     case bmr >= 1600 && bmr <= 1800:
  //       result = "Active";
  //   }
  // }

  // document.querySelector(".comment-bmr").innerHTML = `You are classified as <span id="comment-bmr">${result}</span>`;
  document.querySelector("#bmr-result").innerHTML = bmr.toFixed(0) + " Calories/day";

};

clearButtonBmr.addEventListener("click", function () {
  ageBmr.value = "";
  heightBmr.value = "";
  weightBmr.value = "";
  document.getElementById("male-bmr").checked = false;
  document.getElementById("female-bmr").checked = false;
  document.querySelector("#bmr-result").innerHTML = "00.00 kg/m<sup>2</sup>";
  document.querySelector(".comment-bmr").innerHTML = "";
});



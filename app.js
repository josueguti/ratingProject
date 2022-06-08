const submitted = document.querySelector("#submitbutton");
const one = document.querySelector("#rating1");
const two = document.querySelector("#rating2");
const three = document.querySelector("#rating3");
const four = document.querySelector("#rating4");
const five = document.querySelector("#rating5");
let selectedvalue = 0;
const thankYouContainer = document.querySelector(".thankyoucontainer");
const form = document.querySelector(".container");
const score = document.querySelector("#score");

console.log(thankYouContainer);

function resetClasses() {
  one.classList.remove("selected");
  two.classList.remove("selected");
  three.classList.remove("selected");
  four.classList.remove("selected");
  five.classList.remove("selected");
}

one.addEventListener("click", function () {
  resetClasses();
  selectedvalue = 1;
  one.classList.add("selected");
});

two.addEventListener("click", function () {
  resetClasses();
  selectedvalue = 2;
  two.classList.add("selected");
});

three.addEventListener("click", function () {
  resetClasses();
  selectedvalue = 3;
  three.classList.add("selected");
});

four.addEventListener("click", function () {
  resetClasses();
  selectedvalue = 4;
  four.classList.add("selected");
});

five.addEventListener("click", function () {
  resetClasses();
  selectedvalue = 5;
  five.classList.add("selected");
});

submitted.addEventListener("click", function () {
  // (selectedvalue === 1)
  thankYouContainer.classList.add("show");
  form.classList.add("hide");
  score.textContent = `You selected ${selectedvalue} out of 5`;
  console.log(`You selected ${selectedvalue} out of 5`);
});

let input = document.querySelector("#input");
let textInput = document.querySelector(".placeholder-search");
input.addEventListener("click", function () {
  textInput.style.display = " none";
  input.style.paddingLeft = "20px";
});
console.log(textInput);

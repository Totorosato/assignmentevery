document
  .getElementById("btnChange")
  .addEventListener("click", changeTextContent);
document.getElementById("par").addEventListener("click", changeTextContent);
document.getElementById("hide").addEventListener("click", hideShow);

function changeTextContent() {
  document.getElementById("firstContent").textContent = "love you";
  document.querySelector(".loveyou").classList.add("clicked-loveyou");
  document.getElementById("par").textContent =
    "love you,love you,love you,love you,";
  var create = document.createElement("div");
  document.getElementById("create").appendChild(create);
  create.classList.add("circle_style");
  //   document.querySelector(".loveyou").classList.add("clicked-loveyou");
}
function hideShow() {
  var hideShow = document.getElementById("hide").textContent;
  if (hideShow === "hide") {
    var btnVal = document.getElementById("firstContent").parentNode;
    btnVal.style.display = "none";
    document.getElementById("hide").textContent = "show";
  } else {
    var btnVal = document.getElementById("firstContent").parentNode;
    btnVal.style.display = "block";
    document.getElementById("hide").textContent = "hide";
  }
}

rndNumber1 = Math.floor(Math.random() * 100);
rndNumber2 = Math.floor(Math.random() * 100);
document.getElementById("randomNumber1").value = rndNumber1;
document.getElementById("randomNumber2").value = rndNumber2;
function check() {
  var sum = rndNumber1 + rndNumber2;
  const check = document.getElementById("result").value;
  if (sum === check) {
    alert("sain golog ve zov bna ");
  } else {
    alert("suga bandi ve ");
  }
}
function reset() {
  rndNumber1 = Math.floor(Math.random() * 100);
  rndNumber2 = Math.floor(Math.random() * 100);
  document.getElementById("randomNumber1").value = rndNumber1;
  document.getElementById("randomNumber2").value = rndNumber2;
}




function () {
  for (let i = 0 ; i<10 ; i++) {
    var createCircle = document.createElement("div");
  document.appendChild(createCircle);
  createCircle.classList.add("circle")
  
}
  document.getElementsByClassName("circle") = array ;
}

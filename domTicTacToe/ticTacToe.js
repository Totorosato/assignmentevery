var grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var i = 0;
document.getElementById("0").addEventListener("click", count);
document.getElementById("1").addEventListener("click", count);
document.getElementById("2").addEventListener("click", count);
document.getElementById("3").addEventListener("click", count);
document.getElementById("4").addEventListener("click", count);
document.getElementById("5").addEventListener("click", count);
document.getElementById("6").addEventListener("click", count);
document.getElementById("7").addEventListener("click", count);
document.getElementById("8").addEventListener("click", count);

function count(e) {
  i++;
  var mainIndex = 0;
  if (i % 2 == 0) {
    e.target.classList.add("btn-x");
    mainIndex = e.target.innerText;
    j = mainIndex / 10;
    console.log(parseInt(j));
    l = mainIndex % 10;
    console.log(l);
    console.log(grid[j][l]);
    // grid[j][l] = 1;
    // gameOver(j, l);
    // console.log(document.getElementById(mainIndex));
    // c = document.getElementById(mainIndex);
    // console.log(c.innerText);
    // var indexNumber = e.target.id;
    // grid[indexNumber] = 1;
  } else {
    e.target.classList.add("btn-o");
    mainIndex = e.target.innerText;
    j = mainIndex / 10;
    console.log(parseInt(j));
    l = mainIndex % 10;
    console.log(l);
    console.log(grid[j][l]);
    // grid[j][l] = 2;
    // gameOver(j, l);
    // var indexNumber = e.target.id;
    // grid[indexNumber] = 2;
  }
}
// function reset() {}
// function gameOver() {
//   // if (indexNumber == 4 ) {
//   //   var sum = 0 ;
//   //   for (let i= 0; )
//   // }
// }

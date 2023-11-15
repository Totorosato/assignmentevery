//loop easy
// 1-100 //
function oneToHundred() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
}
//even Number Sum //
function evenNumberSum() {
  let sum = 0;
  let n = 6;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
//N Number Sum //
function nNumberSum() {
  let n = 6,
    sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
//numberPow //
function numberPow() {
  let n = 10,
    pow = 0;
  if (n != 0 && n != 1) {
    for (var i = 2; i < 1000; i++) {
      var result = Math.pow(n, i);
      if (result >= 1000) {
        console.log(
          n,
          "too nii",
          i,
          "zeregni 1000gaas ih buyu tentsuu bna result=",
          result
        );
        break;
      }
    }
  } else if (n == 0) {
    console.log(n, "toonii yamarch zergeg 0 baina !!");
  } else if (n == 1) {
    console.log(n, "toonii yamarch zergeg 1 baina !!");
  }
}
// loop easy end //
// nested loop draw square//

function drawSquare() {
  var result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (j == 2 || i == 2) {
        result += " + ";
      } else {
        result += " * ";
      }
    }
    console.log(result);
    result = "";
  }
}
// nested loop Draw triangle
function DrawTriangle() {
  var result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; i++) {
      result += "*";
    }
  }
  console.log(result);
}
// Draw triangle with numbers
function DrawTriangleWithNumbers() {
  result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += toString(i);
    }
  }
}
//Draw pyramid
function DrawPyramid() {
  let n = 10,
    result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
}
// Array Members Average
function ArrayMembersAverage() {
  let input = [10, 20, 30, 40, 50],
    cnt = input.length,
    sum = 0,
    Average = 0;
  for (i = 0; i < cnt; i++) {
    sum += input[i];
  }

  Average = sum / cnt;
  console.log(Average);
}
//3-ын зэрэгт
{
  let x = 2;
  function thirdPow(x) {
    var result = Math.pow(x, 3);
    console.log(result);
  }
}

//Find Longest Increasing Subsequence
function findLonestIncreasingSubsequence() {
  let Subsequence = [10, 9, 2, 5, 3, 7, 101, 18],
    sub = [...Subsequence],
    cnt = Subsequence.length;

  for (let i = 0; i < cnt; i++) {
    console.log(i);
    console.log(Subsequence);

    if (Subsequence[i] > Subsequence[i + 1]) {
      sub.splice(i, 1);
      console.log(Subsequence);
      continue;
    }
  }
  // console.log(Subsequence);
}

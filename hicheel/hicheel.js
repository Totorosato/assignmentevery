// // let Array = [1, 1, 1, 1, 1];
// // let n = Array.length;
// // for (let i = 0; i < n; i++) {
// //   array.splice(i, 1, "5");
// // }
// // console.log(Array);
let arrayName = [
  {
    firstName: "Narantsatsralt",
    lastName: "Bumnasan",
    phoneNumber: "99111111",
  },
  { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
];
// let n = Array.length;
// let f = [];
// for (i = 0; i < n; i++) {
//   let c = Array[i].firstName;
//   f.push(c);
// }
// console.log(f);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
console.log(
  array.map(function (el, i) {
    return el * 2;
  })
);
console.log(array.map((el) => el * 33.8));
console.log(array.map((el) => Math.sqrt(el)));
console.log(arrayName.map((el) => el.firstName.toUpperCase()));
console.log(
  arrayName.map((el) => el.firstName.charAt(0) + el.lastName.charAt(0))
);
console.log(
  array.filter(function (el, i) {
    return el % 2 == 0;
  })
);
console.log(array.filter((el) => el >= 0));
console.log(
  arrayName.filter((el) => el.firstName.length < 6).map((el) => el.firstName)
);
function p(n) {
  var n,
    i,
    flag = true;
  n = parseInt(n);
  for (i = 2; i <= n - 1; i++)
    if (n % i == 0) {
      flag = false;
      break;
    }
  return flag;
}

console.log(array.filter((el) => p(el)));
console.log(arrayName.filter(el) => el.firstName.charAt(0) == "n")

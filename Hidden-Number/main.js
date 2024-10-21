// let numbers = document.querySelector(".numbers");
// let numString = numbers.textContent;
// let splitNum = numString.split("");

// numbers.textContent = "";
// for (let i = 0; i < splitNum.length; i++) {
//   numbers.innerHTML += "<span>" + splitNum[i] + "</span>";
// }
let numbers = document.querySelector(".numbers");
let numString = numbers.textContent.trim();
let splitNum = [...numString];
numbers.textContent = "";
let spanElements = splitNum.map((num) => `<span>${num}</span>`).join("");
numbers.innerHTML = spanElements;

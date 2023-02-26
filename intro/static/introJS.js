const divLine = document.querySelector(".lineEffect");
const containerEl = document.querySelector(".container");
const textEl = document.querySelectorAll("text")

for (let i = 0; i < 10; i += 1) {
  let cloneLine = divLine.cloneNode(false);
  containerEl.prepend(cloneLine);
}

// const individualLineEl = containerEl.children;

// console.log(individualLineEl);


// for (let x = 0; x < 11; x += 1) {
//   individualLineEl[x].setAttribute("style", `left: ${x * 5}px;`);
// }
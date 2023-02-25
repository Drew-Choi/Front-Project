let cloneLine = document.createElement("div");

for (let i = 0; i < 10; i += 1) {
cloneLine.classList.add("lineEffect");
document.querySelector(".container").append(cloneLine);
}
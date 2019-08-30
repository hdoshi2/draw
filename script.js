// Your code here

const table = document.getElementById("tab");
let selectedColorNode = document.getElementById("color").value;

const selectedColor = () => {
  selectedColorNode = document.getElementById("color").value;
  return selectedColorNode;
};

const addRow = () => {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  table.appendChild(row);
};

if (table) {
  table.onclick = function(e) {
    let target = e.target;
    console.log(target);
    if (target.style.backgroundColor === selectedColorNode) {
      target.removeAttribute("style");
    } else {
      target.setAttribute("style", `background-color: ${selectedColorNode}`);
    }
  };
}

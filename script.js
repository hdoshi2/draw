// Your code here

const table = document.getElementById("tab");
console.log("test", table);

const addRow = () => {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  table.appendChild(row);
};

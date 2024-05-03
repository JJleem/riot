let classTitle;
let classContent;
fetch("http://localhost:3000/data")
  .then((response) => response.json())
  .then((data) => {
    const returnJSON01 = JSON.parse(data.data01.returnJSON);
    classTitle = returnJSON01;
    useData01(classTitle);

    // const returnJSON = JSON.parse(data.data02.returnJSON);
    // classContent = returnJSON;
    // useData(classContent);
  })
  .catch((error) => console.error("Error:", error));

function useData(data) {
  console.log(data.trneList);
  const contents = document.querySelector(".contents table > tbody");
  const info = data.trneList;
  info.forEach((item) => {
    const row = document.createElement("tr");

    const keys = Object.keys(item);
    keys.forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    });

    contents.appendChild(row);
  });
}

function useData01(data) {
  const title = document.querySelector(".container .title");
  title.innerText =
    "[" +
    data.inst_detail_info.govBusiNm +
    "] " +
    data.inst_detail_info.trprNm +
    " 출결현황";
  console.log(data);
}

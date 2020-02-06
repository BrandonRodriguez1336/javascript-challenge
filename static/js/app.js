
let tbody = d3.select("tbody");

let tableData = data;
// console.log(tableData);


  data.forEach((UFOs) => {
    let row = tbody.append("tr");
    Object.entries(UFOs).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

  let filterBtn = d3.select("#filter-btn");

  filterBtn.on("click", function() {
    

    let inputElement = d3.select("#datetime");
      let inputValue = inputElement.property("value");
            // console.log("You clicked the button.");
            // console.log(inputValue);
            let tableData = data;
            // console.log("Test123");
            let UFO_filteredData = tableData.filter(ufo => ufo.datetime === inputValue);  
            // console.log(UFO_filteredData);
          
            tbody.html("");
            //clear the table then rewrite the filtered table to the html location
            UFO_filteredData.forEach((UFOs) => {
              let row = tbody.append("tr");
              Object.entries(UFOs).forEach(([key, value]) => {
                let cell = row.append("td");
                cell.text(value);
              });
            });

  });
  

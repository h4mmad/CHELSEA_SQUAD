function createSearchDiv(){ 
    let searchDiv = document.getElementById("search");
    let inputBox = document.createElement("input");
    inputBox.setAttribute("id", "input-box");
    inputBox.placeholder  = "Search player";

    let searchBtn  = document.createElement("div");
    searchBtn.setAttribute("id", "search-btn");
    searchBtn.textContent = "Search";
    

    searchDiv.appendChild(inputBox);
    searchDiv.appendChild(searchBtn);
}

export default createSearchDiv;
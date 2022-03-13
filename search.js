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



    let playerDiv = document.querySelectorAll(".player-div");
    let playerDivArr = Array.from(playerDiv);

    
    searchBtn.addEventListener("click", () => {

        const splitSearch = inputBox.value.split(" ");
        

        playerDivArr.forEach(element => {
            if(element.innerText.toLowerCase() === inputBox.value.toLowerCase()){
                element.scrollIntoView();
            }
        })
    })
}

export default createSearchDiv;
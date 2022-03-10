"use strict";

import createSearchDiv from "./search.js";
import createChart from "./chart.js";

let body = document.getElementById("body");
const mainDiv = document.getElementById("main");

const dir = "images/";
const flagDir = "images/flags/";

class player{
    constructor(fullname, dob, position, country, picLink, flagLink){
        this.dob = dob;
        this.fullname = fullname;
        this.position = position;
        this.country = country;
        this.picLink = picLink;
        this.flagLink = flagLink
    }
}



const positions = ["GK", "Defender", "Midfielder", "Forward"];
const countryFlags = new Map([
    ["Senegal", "senegal.png"],
    ["Belgium", "belgium.png"],
    ["England", "england.png"],
    ["Italy", "italy.png"],
    ["Denmark", "denmark.png"],
    ["France", "france.png"],
    ["Germany", "germany.png"],
    ["Morocco", "morocco.png"],
    ["Spain", "spain.png"],
    ["Brazil", "brazil.png"]
]);
const countries = Array.from(countryFlags.keys());

console.log(countries);



let player1 = new player("Edouard Mendy", new Date(1992,2,1), positions[0], countries[0], "mendy.png");
let player2 = new player("Antonio Rüdiger", new Date(1993, 2, 3), positions[1], countries[6], "rudiger.png");
let player3 = new player("Andreas Christensen", new Date(1996, 3, 10), positions[1], countries[4], "christensen.png");
let player4 = new player("César Azpilicueta", new Date(1989, 7, 28), positions[1], countries[8], "azpi.png");
let player5 = new player("N'Golo Kanté", new Date(1991, 2, 29), positions[2], countries[5], "kante.png");
let player6 = new player("Jorginho", new Date(1991, 11, 20), positions[2], countries[3], "jorginho.png");
let player7 = new player("Romelu Lukaku", new Date(1993, 4, 13), positions[3], countries[1], "lukaku.png");
let player8 = new player("Marcos Alonso", new Date(1990, 11, 28), positions[1], countries[8], "malonso.png");
let player9 = new player("Thiago Silva", new Date(1984, 8, 22), positions[1], countries[9], "silva.png");
let player10 = new player("Mason Mount", new Date(1999, 0, 10), positions[2], countries[2] ,"mount.png");
let player11 = new player("Hakim Ziyech", new Date(1993, 2, 19), positions[2], countries[7], "hakim.png");

const playersArr = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11];

const playerAttr = [
    [65, 80, 65, 22, 65, 85],
    [85, 47, 78, 77, 92, 92],
    [80, 37, 72, 74, 88, 81],
    [88, 60, 83, 82, 81, 82],
    [90, 84, 90, 91, 96, 90],
    [ 88, 90, 98, 93, 86, 87],
    [89, 91, 78, 83, 42, 86],
    [58, 74, 78, 77, 75, 77],
    [55, 55, 73, 74, 87, 80],
    [74, 79, 84, 83, 55, 65]
]




let ageArr  = createChart(playersArr);
// createSearchDiv();



let chartCanvas;
playersArr.forEach(createProfile);


function createProfile(currentValue, index, arr){

    let playerName = document.createElement("h3");
    playerName.setAttribute("class", "player-name");
    playerName.textContent = arr[index].fullname;

    let playerFlag = document.createElement("img");
    playerFlag.setAttribute("class", "player-flag");
    playerFlag.src = flagDir+countryFlags.get(arr[index].country);
    

    let playerDiv = document.createElement("div");
    playerDiv.setAttribute("class", "player-div");
    playerDiv.addEventListener("click",displayModal);

    let playerImg = document.createElement("img");
    playerImg.setAttribute("class","front-img");
    playerImg.setAttribute("src",dir+arr[index].picLink);

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    let closeSpan = document.createElement("span");
    closeSpan.setAttribute("class", "close");
    closeSpan.innerHTML = "&times;";
    closeSpan.addEventListener("click", closeModal);

    let modalName = document.createElement("h3");
    modalName.setAttribute("class", "modal-name");
    modalName.textContent = arr[index].fullname;

    let modalPosition = document.createElement("h3");
    modalPosition.setAttribute("class", "modal-position");
    modalPosition.textContent = "Position: "+arr[index].position;

    let modalAge = document.createElement("h3");
    modalAge.setAttribute("class", "modal-position");
    modalAge.textContent = "Age: "+ageArr[index];

    let modalCountry = document.createElement("h3");
    modalCountry.setAttribute("class", "modal-position");
    modalCountry.textContent = "Country: "+arr[index].country;

    


    chartCanvas = document.createElement("canvas");
    chartCanvas.setAttribute("id","playerChart");
    

    new Chart(chartCanvas, {
        type: 'radar',
        
        data : {
            labels: [
              'Pace',
              'Shooting',
              'Passing',
              'Dribbling',
              'Defence',
              'Physical'
            ],
            datasets: [{
              label: arr[index].fullname,
              data: playerAttr[index],
              fill: true,
              backgroundColor: 'rgba(24, 46, 122, 0.2)',
              borderColor: '#182E7A',
              pointBackgroundColor: '#182E7A',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
          },
          options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            } 
        }
    });


    playerDiv.appendChild(playerImg);
    playerDiv.appendChild(playerName);
    playerDiv.appendChild(playerFlag);
    mainDiv.appendChild(playerDiv);



    

    

    

    

    


    modalContent.appendChild(closeSpan);
    modalContent.appendChild(modalName);
    modalContent.appendChild(chartCanvas);
    modalContent.appendChild(modalPosition);
    modalContent.appendChild(modalCountry);
    modalContent.appendChild(modalAge);

    modal.appendChild(modalContent);
    mainDiv.appendChild(modal);
    

    
    function displayModal(){
        modal.style.display = "block";
        body.style.overflow = "hidden";
        
    }
    function closeModal(){ 
        modal.style.display = "none"; 
        body.style.overflow = "visible";
    }
    
    
    

    


    
}
















window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
  }
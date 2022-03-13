"use strict";

import createSearchDiv from "./search.js";
import createChart from "./chart.js";
import createHeightChart from "./heightChart.js";

let body = document.getElementById("body");
const mainDiv = document.getElementById("main");

const dir = "images/";
const flagDir = "images/flags/";

class player{
    constructor(fullname, dob, position, country, picLink, height){
        this.dob = dob;
        this.fullname = fullname;
        this.position = position;
        this.country = country;
        this.picLink = picLink;
        this.height = height;
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
    ["Brazil", "brazil.png"],
    ["Croatia", "croatia.png"]
]);
const countries = Array.from(countryFlags.keys());





let player1 = new player("Edouard Mendy", new Date(1992,2,1), positions[0], countries[0], "mendy.png", 198);
let player2 = new player("Antonio Rudiger", new Date(1993, 2, 3), positions[1], countries[6], "rudiger.png", 190);
let player3 = new player("Andreas Christensen", new Date(1996, 3, 10), positions[1], countries[4], "christensen.png", 187);
let player4 = new player("Cesar Azpilicueta", new Date(1989, 7, 28), positions[1], countries[8], "azpi.png", 178);
let player5 = new player("NGolo Kante", new Date(1991, 2, 29), positions[2], countries[5], "kante.png", 168);
let player6 = new player("Jorginho", new Date(1991, 11, 20), positions[2], countries[3], "jorginho.png", 180);
let player7 = new player("Romelu Lukaku", new Date(1993, 4, 13), positions[3], countries[1], "lukaku.png", 191);
let player8 = new player("Marcos Alonso", new Date(1990, 11, 28), positions[1], countries[8], "malonso.png", 189);
let player9 = new player("Thiago Silva", new Date(1984, 8, 22), positions[1], countries[9], "silva.png", 183);
let player10 = new player("Mason Mount", new Date(1999, 0, 10), positions[2], countries[2] ,"mount.png", 180);
let player11 = new player("Hakim Ziyech", new Date(1993, 2, 19), positions[2], countries[7], "hakim.png", 181);
let player12 = new player("Kai Havertz", new Date(1999, 5, 11), positions[2], countries[6], "kai.png", 190);
let player13 = new player("Timo Werner", new Date(1996, 2, 6), positions[3], countries[6], "timo.png", 180);
let player14 = new player("Kepa Arrizabalaga", new Date(1994, 9, 3), positions[0], countries[8], "kepa.png", 186);
let player15 = new player("Mateo Kovacic", new Date(1994, 4, 6), positions[2], countries[10], "kovacic.png", 176);

const playersArr = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15];

const playerAttr = [
    [83, 82, 78, 84, 35, 81],
    [85, 47, 78, 77, 92, 92],
    [80, 37, 72, 74, 88, 81],
    [88, 60, 83, 82, 81, 82],
    [90, 84, 90, 91, 96, 90],
    [ 88, 90, 98, 93, 86, 87],
    [89, 91, 78, 83, 42, 86],
    [58, 74, 78, 77, 75, 77],
    [55, 55, 73, 74, 87, 80],
    [74, 79, 84, 83, 55, 65],
    [78, 76, 87, 83, 50, 65],
    [82, 78, 79, 84, 45, 66],
    [91, 81, 70, 82, 35, 70],
    [78, 77, 85, 81, 34, 76],
    [81, 73, 90, 93, 75, 75]
]




let ageArr  = createChart(playersArr);



let playerDiv;
let chartCanvas;
let gkCanvas;

playersArr.forEach(createProfile);


function createProfile(currentValue, index, arr){

    let playerName = document.createElement("h3");
    playerName.setAttribute("class", "player-name");
    playerName.textContent = arr[index].fullname;

    let playerFlag = document.createElement("img");
    playerFlag.setAttribute("class", "player-flag");
    playerFlag.src = flagDir+countryFlags.get(arr[index].country);
    

    playerDiv = document.createElement("div");
    playerDiv.setAttribute("class", "player-div");
    playerDiv.addEventListener("click",displayModal);

    let playerImg = document.createElement("img");
    playerImg.setAttribute("class","front-img");
    playerImg.setAttribute("src",dir+arr[index].picLink);

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.addEventListener("click",closeModal);

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

    let modalHeight = document.createElement("h3");
    modalHeight.setAttribute("class", "modal-position");
    modalHeight.textContent = "Height: "+arr[index].height+" cm";

    


    chartCanvas = document.createElement("canvas");
    chartCanvas.setAttribute("class","playerChart");

    gkCanvas = document.createElement("canvas");
    gkCanvas.setAttribute("class","playerChart");
    
    if(arr[index].position === 'GK'){
        
        new Chart(gkCanvas, {
            type: 'radar',
            
            data : {
                labels: [
                  'Diving',
                  'Handling',
                  'Kicking',
                  'Reflexes',
                  'Speed',
                  'Positioning'
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
        })

        

        
    }
    else{
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
                color: '#182E7A',
                pointBackgroundColor: '#182E7A',
                pointBorderColor: '#182E7A',
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
    }


    playerDiv.appendChild(playerImg);
    playerDiv.appendChild(playerName);
    playerDiv.appendChild(playerFlag);
    mainDiv.appendChild(playerDiv);



    

    

    

    

    


    modalContent.appendChild(closeSpan);
    modalContent.appendChild(modalName);

    if(arr[index].position === "GK"){
        modalContent.appendChild(gkCanvas);
    }
    else{
        modalContent.appendChild(chartCanvas);
    }
    
    modalContent.appendChild(modalPosition);
    modalContent.appendChild(modalCountry);
    modalContent.appendChild(modalAge);
    modalContent.appendChild(modalHeight);

    modal.appendChild(modalContent);
    mainDiv.appendChild(modal);
    

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal()
        }
      }
    
    function displayModal(){
        modal.style.display = "block";
        
        
    }
    function closeModal(){ 
        modal.style.display = "none"; 
        body.style.overflow = "visible";
    }
    
}


createHeightChart(playersArr);


createSearchDiv();











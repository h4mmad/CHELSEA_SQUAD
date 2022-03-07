"use strict";

import createSearchDiv from "./search.js";
import createChart from "./chart.js";
import showStats  from "./stats.js";




class player{
    constructor(fullname, dob, position, country, picLink){
        this.dob = dob;
        this.fullname = fullname;
        this.position = position;
        this.country = country;
        this.picLink = picLink;
    }
}


const mainDiv = document.getElementById("main");
const positions = ["GK", "Defender", "Midfielder", "Forward"];
const dir = "images/"


let player1 = new player("Edouard Mendy", new Date(1992,2,1), positions[0], "Senegal", "mendy.png");
let player2 = new player("Antonio Rüdiger", new Date(1993, 2, 3), positions[1], "Germany", "rudiger.png");
let player3 = new player("Andreas Christensen", new Date(1996, 3, 10), positions[1], "Denmark", "christensen.png");
let player4 = new player("César Azpilicueta", new Date(1989, 7, 28), positions[1], "Spain", "azpi.png");
let player5 = new player("N'Golo Kanté", new Date(1991, 2, 29), positions[2], "France", "kante.png");
let player6 = new player("Jorginho", new Date(1991, 11, 20), positions[2], "Italy", "jorginho.png");
let player7 = new player("Romelu Lukaku", new Date(1993, 4, 13), positions[3], "Belgium", "lukaku.png");
let player8 = new player("Marcos Alonso", new Date(1990, 11, 28), positions[1], "Spain", "malonso.png");
let player9 = new player("Thiago Silva", new Date(1984, 8, 22), positions[1], "Brazil", "silva.png");
let player10 = new player("Mason Mount", new Date(1999, 0, 10), positions[2], "England" ,"mount.png");

const playersArr = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];


createChart(playersArr);
createSearchDiv();



playersArr.forEach(createProfile);

function createProfile(currentValue, index, arr){

    let playerName = document.createElement("h3");
    playerName.setAttribute("class", "player-name");
    playerName.textContent = arr[index].fullname;

    let playerDiv = document.createElement("div");
    playerDiv.setAttribute("class", "player-div");

    let playerImg = document.createElement("img");
    playerImg.setAttribute("class","front-img");
    playerImg.setAttribute("src",dir+arr[index].picLink);

    playerDiv.appendChild(playerImg);
    playerDiv.appendChild(playerName);
    mainDiv.appendChild(playerDiv);
}


showStats();








function createChart(arr){

    let today = new Date();
    let sum = 0;
    let avgAge = 0;
    

    let chartDiv = document.getElementById("chart-div");
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","myChart");
    

    let headingAgeChart = document.createElement("h3");
    headingAgeChart.setAttribute("class" , "player-name");
    headingAgeChart.setAttribute("id", "age-heading");
    headingAgeChart.textContent = "Player ages";


    const playerNames = arr.map((element) => element.fullname);
    const playerAges = arr.map((element) =>
    {
        const diffTime = Math.abs(today - element.dob);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return Math.round(diffDays/365);
    });

    for(let i = 0; i<playerAges.length; i++){
      sum += playerAges[i];
      avgAge = (sum/playerAges.length);
      avgAge = avgAge.toFixed(2);
    }
    const avgAgeArr = playerAges.map(() => avgAge);

    

    const plyrNam = arr.map(item => {
      let a = item.fullname.split(' ');
      return a;
    });
    
    

    
    new Chart(canvas, {
      type: "line",
      data: {
        labels: plyrNam,
        datasets: [{
          label: "Player age",
          backgroundColor: "#182E7A",
          data: playerAges,
          borderColor: "#182E7A",
          borderWidth: 2,
          fill: false,
          tension: 0.1,
          hoverBackgroundColor: "#FC7C29",
          barPercentage: 0.5
        },{
          label: "Average age = " + avgAge,
          data: avgAgeArr,
          type: 'line',
          pointRadius: 0,
          borderColor: "red",
          backgroundColor: "red"
        }]
      }
    });

    chartDiv.appendChild(headingAgeChart);
    chartDiv.appendChild(canvas);

    return playerAges;
}
export default createChart;
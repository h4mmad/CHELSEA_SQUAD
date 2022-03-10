function createChart(arr){

    let today = new Date();

    let chartDiv = document.getElementById("chart-div");
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","myChart");
    


    const playerNames = arr.map((element) => element.fullname);
    const playerAges = arr.map((element) =>
    {
        const diffTime = Math.abs(today - element.dob);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return Math.round(diffDays/365);
    });

    
    new Chart(canvas, {
      type: "line",
      data: {
        labels: playerNames,
        datasets: [{
          label: "Player Age",
          backgroundColor: "#182E7A",
          data: playerAges,
        //   borderColor: "#182E7A",
          borderWidth: 2,
          color: "#000000",
          fill: false,
          tension: 0,
          hoverBackgroundColor: "#FC7C29",
          barPercentage: 0.5
        }],
      }
    });

    chartDiv.appendChild(canvas);
}
export default createChart;
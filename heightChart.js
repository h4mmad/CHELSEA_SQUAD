function createHeightChart(arr){

    let sum = 0;
    let avg = 0;

    const playerHeights = arr.map((element) => element.height);
    const playerNames = arr.map((element) => element.fullname);


    for(let i = 0; i < arr.length; i++){
        sum+=arr[i].height;
        avg = sum/arr.length;
    }

    const avgHeight = playerHeights.map((element) => avg);


    let heightChartDiv = document.getElementById("height-chart");
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","heightChart");

    let headingHeightChart = document.createElement("h3");
    headingHeightChart.setAttribute("class" , "player-name");
    headingHeightChart.setAttribute("id", "height-heading");
    headingHeightChart.textContent = "Player heights";


    const plyrNam = arr.map(item => {
      let a = item.fullname.split(' ');
      return a;
    });


    new Chart(canvas, {
        type: "line",
        data: {
          labels: plyrNam,
          datasets: [{
            label: "Player height (in cm)",
            backgroundColor: "#182E7A",
            data: playerHeights,
            borderColor: "#182E7A",
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            hoverBackgroundColor: "#FC7C29",
            barPercentage: 0.5
          },{
            label: "Average height (in cm) = "+avg,
            data: avgHeight,
            type: 'line',
            pointRadius: 0,
            borderColor: "red",
            backgroundColor: "red"
          }]
        }
      });



      heightChartDiv.appendChild(headingHeightChart);
      heightChartDiv.appendChild(canvas);
    

    
}

export default createHeightChart;
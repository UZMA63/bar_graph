const ctx = document.getElementById("myChart");

new Chart(ctx, {
  data: {
    labels: [
      "00 Jan",
      "01 Jan",
      "03 jan",
      "04 Jan",
      "05 Jan",
      "06 jan",
      "07 jan",
      "08 jan",
      "09 jan",
      "10 jan",
      "11 jan",
      "12 jan",
    ],
    datasets: [
      {
        label: "Website Blog",
        type: "bar",
        data: [435, 500, 410, 675, 210, 405, 200, 350, 750, 325, 250, 150],
        borderWidth: 1,
        backgroundColor: "rgb(45, 168, 245)",
        order: 2,
      },

      {
        label: "Social Media",
        type: "line",
        data: [20, 40, 32, 28, 43, 18, 16, 30, 20, 20, 10, 16],
        borderWidth: 1,
        borderColor: "rgb(74, 208, 132)",
        backgroundColor: "rgb(74, 208, 132)",
        // fill:false,
        yAxisID: "line-y-axis", //Line chart ke liye separate y-axis define kar rahe hain
        order: 1,
      },
    ],
  },

  options: {
    Response: true,
    scales: {
      y: {
        beginAtZero: true,
        position: "left", //Yahan line chart ke liye left side axis define ki hai
        title: {
          display: true,
          text: "Website Blog",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false, // Yeh vertical grid lines ko hide kar dega
        },
      },

      "line-y-axis": {
        // Yahan line chart ke liye right side axis define ki hai
        beginAtZero: true,
        position: "right",
        title: {
          display: true,
          text: "Social Media",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true, // This makes the legend box a circle
          pointStyle: "circle", // Makes sure the legend box is a circle
          boxWidth: 7, // Width of the circle
          boxHeight: 7, // Height of the circle
        },
      },
    },
  },
});

// Select the canvas element
const ctx = document.getElementById("myChart").getContext("2d");

// Data for the radar chart
const data = {
  labels: [
    "Pushing",
    "Supporting",
    "Versatility",
    "Farming",
    "Emotionless",
    "Fighting",
  ],
  datasets: [
    {
      label: "Player 1",
      data: [65, 59, 90, 81, 56, 55],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Player 2",
      data: [28, 48, 40, 19, 96, 27],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointBackgroundColor: "rgba(54, 162, 235, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235, 1)",
    },
  ],
};

// Chart options
const options = {
  scale: {
    ticks: {
      beginAtZero: true,
    },
  },
};

// Create the radar chart
new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});

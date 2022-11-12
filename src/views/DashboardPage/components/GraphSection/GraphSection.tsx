import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GraphSection() {
  const black = "#000000d1";
  const orange = "#ef971ad1";
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "Raleway",
            weight: "600",
          },
        },
      },
      y: {
        grid: {
          borderDash: [8, 8],
          color: "rgba(0,0,0,0.1)",
          drawBorder: false,
        },
        ticks: {
          padding: 10,
          font: {
            family: "Raleway",
            weight: "600",
          },
        },
      },
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    plugins: {
      tooltip: {
        bodyFont: {
          family: "Raleway",
        },
        titleFont: {
          family: "Raleway",
        },
      },
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
        text: "YoY Graph",
      },
    },
  };
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [12, 10, 14, 7, 11, 9, 17, 12, 11, 10, 11, 14],
        backgroundColor: [black, orange, black, orange, black, orange, black, orange, black, orange, black, orange],
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default GraphSection;

import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { GraphDataInterface } from "./GraphInterfaces";
import { getGraphData } from "./functions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GraphSection() {
  const [graphData, setGraphData] = useState<Array<number>>([]);
  const res_data: Array<number> = Array.from({ length: 12 }, () => 0);
  useEffect(() => {
    getGraphData()
      .then((res) => {
        let response: Array<GraphDataInterface> = res.data;
        response.forEach((res) => {
          res_data[res.month - 1] = res.amount_spent;
        });
        setGraphData(res_data);
      })
      .catch((err) => console.log(err));
  }, []);
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
        data: graphData,
        backgroundColor: [black, orange, black, orange, black, orange, black, orange, black, orange, black, orange],
      },
    ],
  };
  return (
    <div>
      <p className="text-3xl font-semibold mb-8 pl-4">Monthly spend trend</p>
      <Bar options={options} data={data} />
    </div>
  );
}

export default GraphSection;

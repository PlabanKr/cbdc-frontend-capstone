import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./graph.style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "send",
        data: [100, 430, 285, 335, 199, 255, 216, 105, 135, 125, 235, 565, 322, 254, 125, 115, 205, 220],
        borderColor: "#8979FF",
      },
      {
        label: "receive",
        data: [20, 10, 150, 500, 190, 200, 50, 50, 120, 200, 135, 140, 149, 232, 200, 270, 100, 56, 106],
        borderColor: "#FF928A",
      },
    ],
  };

  return (
    <div className="line-chart-container">
      <Line className="line-chart-main" options={options} data={data} />
    </div>
  );
};

export default Graph;

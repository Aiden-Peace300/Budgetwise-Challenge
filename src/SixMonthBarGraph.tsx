import './SixMonthBarGraph.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
export default function SixMonthBarGraph() {

  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'stuff',
        data: [1600, 1200, 1800, 1900, 1800, 1000],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 3000,
        ticks: { stepSize: 1500, callback: (value) => (value === 0 || value === 1500 || value === 3000 ? value : '') },
      },
    }
  };

  return (
    <div className='six_month_bar_graph_container'>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}
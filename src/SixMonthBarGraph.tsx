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
        label: 'Utilities',
        data: [480, 600, 750, 900, 800, 500],
        backgroundColor: '#009EDF',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },
      {
        label: 'Housing',
        data: [300, 180, 250, 250, 250, 100],
        backgroundColor: '#FF5733',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },
      {
        label: 'Entertainment',
        data: [200, 130, 400, 450, 225, 100],
        backgroundColor: '#FF8301',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },      
      {
        label: 'transportation',
        data: [350, 70, 300, 300, 300, 100],
        backgroundColor: '#FFB900',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },
      {
        label: 'Food',
        data: [100, 100, 70, 125, 125, 100],
        backgroundColor: '#213B80',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },
      {
        label: 'Other',
        data: [250, 250, 250, 250, 300, 150],
        backgroundColor: '#984F88',
        borderWidth: 0,
        stack: 'stack',
        barThickness: 20,
      },
    ]
  };

  const options = {
    aspectRatio: 1,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 2,
          boxHeight: 4
        },
      }
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 3000,
        ticks: { stepSize: 1500, callback: (value) => (value === 1500 || value === 3000 ? value : '') },
      },
    }
  };

  return (
    <div className='six_month_bar_graph_container'>
      <Bar
        data={data}
        options={options}
        style={{width: '90%'}}
      />
    </div>
  );
}
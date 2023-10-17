import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const  ChartSection = () =>  {
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  
   const data = {
    labels,
    datasets: [
      {
        data: [8,5,10,7,8,4,8,10,9,7,6,10],
        backgroundColor: ['rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(53, 162, 235)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)','rgb(209, 205, 205)'],
        borderRadius:[8]
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default ChartSection

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

 

const DoughnutChart = () => {
    const data = {
  
        datasets: [
          {
            label: '# of Votes',
            Text: "ciytomer",
            data: [25,45,35],
            backgroundColor: [
              'rgb(245, 66, 126)',
              'rgb(50, 91, 201)',
              'rgb(226, 235, 216)',
            ],
            
          },
        ],
      };

    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart ,args,pluginsOptions){
            const {ctx} = chart;
            const canvas = chart.canvas;

            ctx.save();
            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = 'black';
            // ctx.textAlign = 'start'
       
            const text1 = "65%";
            const text2 = "Total New";
            const text3 = "Customer";

            const lineHeight = 30; // Adjust this value to control line spacing
            // const totalHeight = lineHeight * 3;

            const startY = 130; // Center vertically
            
            // Center "65%" both vertically and horizontally
            // const textWidth1 = ctx.measureText(text1).width;
            const startX1 = 140;

            // "Total New" starts 40% from the startX
            const startX2 = (canvas.width * 0.3);
            
            ctx.fillText(text1, startX1, startY);
            ctx.fillText(text2, startX2, startY + lineHeight);
            ctx.fillText(text3, startX2, startY + 60)
            
        }
    }
  return <Doughnut data={data} plugins={[textCenter]}/>;
}

export default DoughnutChart

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );


// export const Grafico = () => {

//     // const options = {
//     //     responsive: true,
//     //     plugins: {
//     //         legend: {
//     //             position: 'top',
//     //         },
//     //         title: {
//     //             display: false,
//     //             text: 'Dataset',
//     //         },
//     //     },
//     // };
    

//     const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Dataset vermelho',
//                 data: labels.map((() => Math.floor(Math.random() * 100))),
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 borderColor: 'red',
//                 borderWidth: 1
//             },
//             {
//                 label: 'Dataset azul',
//                 data: labels.map((() => Math.floor(Math.random() * 100))),
//                 backgroundColor: 'rgba(53, 162, 235, 0.5)',
//                 borderColor: 'blue',
//                 borderWidth: 1
//             },
//         ],
//     };

//     const data1 = { //dados default
//         labels,
//         datasets: [
//           {
//             label: 'Dataset 1',
//             data: [ 0,  0,  0,  0, 0, 0,  0,  0,  0,  0,  0,  0], 
//             borderColor: 'rgba(99, 171, 253, 1)',
//             backgroundColor: 'rgba(99, 171, 253, 1)',
//           },
      
//         ],
//       };
    

//     const hasData = data.datasets[0].data.some((value) => value > 0);  
  
//   return (
//     <>
//       {hasData ? (
//         <Line  data={data} />
//       ) : (
//         <Line  data={data1} />
//       )}

//     </>
//   )
// }

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import {Line } from 'react-chartjs-2';



//https://react-chartjs-2.js.org/examples/pie-chart

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler);



// export const GraficoRetangular: React.FC<GraficoProps> = ({ dados }) => {
export const Grafico: React.FC = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        //text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [ 100,  300,  50,  1220, 990, 500,  540,  2330,  10,  0, 120,  24-0], // Esse valores devem ser trocados pelos valores que vem da Api
        borderColor: 'rgba(99, 171, 253, 1)',
        backgroundColor: 'rgba(99, 171, 253, 1)',
      },
  
    ],
  };
  const data1 = { //dados default
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [ 0,  0,  0,  0, 0, 0,  0,  0,  0,  0,  0,  0], 
        borderColor: 'rgba(99, 171, 253, 1)',
        backgroundColor: 'rgba(99, 171, 253, 1)',
      },
  
    ],
  };

  const hasData = data.datasets[0].data.some((value) => value > 0);  
  
  return (
    <>
      {hasData ? (
        <Line options={options} data={data} />
      ) : (
        <Line options={options} data={data1} />
      )}

    </>
  )
}



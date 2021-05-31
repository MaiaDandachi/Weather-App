import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ labels, data: chartData }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Selected Hour Temperature',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  return (
    <div style={{ height: '300px', marginTop: '20px' }}>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              title: {
                display: true,
                text: 'Temperature',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;

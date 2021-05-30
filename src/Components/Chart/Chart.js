import React from 'react';
import { Bar } from 'react-chartjs-2';
const Chart = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Purple',
      'Orange',
      'O',
      'Brown',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 4, 5],
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
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Chart;

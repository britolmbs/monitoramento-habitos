import React from 'react';
import { Container } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Progresso dos Hábitos',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

function Progress() {
  return (
    <Container>
      <h2>Gráficos de Progresso</h2>
      <Line data={data} />
    </Container>
  );
}

export default Progress;
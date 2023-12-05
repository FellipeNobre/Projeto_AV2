document.addEventListener('DOMContentLoaded', function() {
  // Dados para o gráfico de barras
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas Mensais',
      data: [500, 750, 900, 600, 1200, 850],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  // Opções do gráfico de barras
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Criar o gráfico de barras
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  // Dados para o gráfico circular
  const dataCircular = {
    labels: ['Vendas Diretas', 'Vendas Online', 'Vendas em Parceiros'],
    datasets: [{
      data: [1680, 2400, 720],
      backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb'],
      borderWidth: 1
    }]
  };

  // Opções do gráfico circular
  const optionsCircular = {
    plugins: {
      legend: {
        position: 'right'
      }
    }
  };

  // Criar o gráfico circular
  const ctxCircular = document.getElementById('myCircularChart').getContext('2d');
  const myCircularChart = new Chart(ctxCircular, {
    type: 'doughnut',
    data: dataCircular,
    options: optionsCircular
  });
});
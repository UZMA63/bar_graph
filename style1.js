const ctx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(ctx, {
    type: 'bar', // Base type
    data: {
        labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
        datasets: [
            {
                label: 'Website Blog',
                data: [400, 450, 350, 500, 300, 420, 480, 460, 600, 550, 300, 400],
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 1,
                yAxisID: 'y',
            },
            {
                label: 'Social Media',
                data: [30, 25, 40, 35, 45, 30, 28, 48, 35, 40, 25, 30],
                type: 'line', // Overlay with line chart
                borderColor: '#28a745',
                backgroundColor: '#28a745',
                fill: false,
                tension: 0.4,
                yAxisID: 'y1',
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Website Blog',
                }
            },
            y1: {
                beginAtZero: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Social Media',
                },
                grid: {
                    drawOnChartArea: false,
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});
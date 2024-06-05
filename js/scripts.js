document.addEventListener('DOMContentLoaded', function() {
    const dailyTrendCtx = document.getElementById('dailyTrendChart').getContext('2d');
    const monthlyTrendCtx = document.getElementById('monthlyTrendChart').getContext('2d');
    const salesByCategoryCtx = document.getElementById('salesByCategoryChart').getContext('2d');
    const salesBySizeCtx = document.getElementById('salesBySizeChart').getContext('2d');
    const totalPizzasSoldByCategoryCtx = document.getElementById('totalPizzasSoldByCategoryChart').getContext('2d');

    new Chart(dailyTrendCtx, {
        type: 'bar',
        data: {
            labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
            datasets: [{
                label: 'Daily Trend for Total Orders',
                data: [6485, 6895, 6946, 7478, 8242, 7493, 6035],
                backgroundColor: '#B80000',
                borderColor: 'B80000',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(monthlyTrendCtx, {
        type: 'line',
        data: {
            labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            datasets: [{
                label: 'Monthly Trend for Total Orders',
                data: [4232,3961,4261,4151,4328,4107,4392,4168,3890,3883,4266,3935],
                backgroundColor: '#820300',
                borderColor: '#820300',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(salesByCategoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Classic', 'Supreme', 'Chicken', 'Veggie'],
            datasets: [{
                label: 'Sales by Pizza Category',
                data: [14888, 11987, 11050, 11649],
                backgroundColor: [
                    '#5F8670',
                    '#FF9800',
                    '#B80000',
                    '#820300'
                ],
                borderColor: [
                    '#5F8670',
                    '#FF9800',
                    '#B80000',
                    '#820300'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(salesBySizeCtx, {
        type: 'doughnut',
        data: {
            labels: ['S', 'M', 'L', 'XL', 'XXL'],
            datasets: [{
                label: 'Sales by Pizza Size',
                data: [14403, 15635, 18956, 552, 28],
                backgroundColor: [
                    '#5F8670',
                    '#FF9800',
                    '#B80000',
                    '#820300',
                    '#FFA27F'
                ],
                borderColor: [
                    '#5F8670',
                    '#FF9800',
                    '#B80000',
                    '#820300',
                    '#FFA27F'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(totalPizzasSoldByCategoryCtx, {
        type: 'bar',
        data: {
            labels: ['Classic', 'Supreme', 'Veggie', 'Chicken'],
            datasets: [{
                label: 'Total Pizzas Sold by Pizza Category',
                data: [14888, 11987, 11649, 11050],
                backgroundColor: '#5F8670',
                borderColor: '#5F8670',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const dailyTrendCtx = document.getElementById('dailyTrendChart').getContext('2d');
    const monthlyTrendCtx = document.getElementById('monthlyTrendChart').getContext('2d');
    const salesByCategoryCtx = document.getElementById('salesByCategoryChart').getContext('2d');
    const salesBySizeCtx = document.getElementById('salesBySizeChart').getContext('2d');
    const totalPizzasSoldByCategoryCtx = document.getElementById('totalPizzasSoldByCategoryChart').getContext('2d');

    // Gradient colors for the bar charts
    function createGradient(ctx, color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    const dailyGradient = createGradient(dailyTrendCtx, '#B80000', '#FF6347');
    const monthlyGradient = createGradient(monthlyTrendCtx, '#820300', '#FF4500');
    const categoryGradient = createGradient(totalPizzasSoldByCategoryCtx, '#5F8670', '#77DD77');

    new Chart(dailyTrendCtx, {
        type: 'bar',
        data: {
            labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
            datasets: [{
                label: 'Daily Trend for Total Orders',
                data: [6485, 6895, 6946, 7478, 8242, 7493, 6035],
                backgroundColor: dailyGradient,
                borderColor: '#B80000',
                borderWidth: 1,
                borderRadius: 5,
                barPercentage: 0.5,
                categoryPercentage: 0.5
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    backgroundColor: '#FF6347',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#B80000',
                    borderWidth: 1
                },
                legend: {
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 28
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
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
                data: [4232, 3961, 4261, 4151, 4328, 4107, 4392, 4168, 3890, 3883, 4266, 3935],
                backgroundColor: monthlyGradient,
                borderColor: '#820300',
                borderWidth: 2,
                pointBackgroundColor: '#FF4500',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    backgroundColor: '#FF4500',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#820300',
                    borderWidth: 1
                },
                legend: {
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 28
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
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
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    backgroundColor: '#FF9800',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#FF9800',
                    borderWidth: 1
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 36
                        }
                    }
                }
            }
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
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    backgroundColor: '#FF9800',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#FF9800',
                    borderWidth: 1
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 36
                        }
                    }
                }
            }
        }
    });

    new Chart(totalPizzasSoldByCategoryCtx, {
        type: 'bar',
        data: {
            labels: ['Classic', 'Supreme', 'Veggie', 'Chicken'],
            datasets: [{
                label: 'Total Pizzas Sold by Pizza Category',
                data: [14888, 11987, 11649, 11050],
                backgroundColor: categoryGradient,
                borderColor: '#5F8670',
                borderWidth: 1,
                borderRadius: 5,
                barPercentage: 0.5,
                categoryPercentage: 0.5
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    backgroundColor: '#77DD77',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#5F8670',
                    borderWidth: 1
                },
                legend: {
                    labels: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 28
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 24
                        }
                    }
                }
            }
        }
    });
});

let allData = [];
let converted = [];
fetch_master("./dataset/all.json").then(
    function (value) {
        allData = value;
        converted = convertDataset(allData);
        processed = processDataForDatatable(converted, 'pizza_id', 'revenue', 'desc');
        createDatatableOptions(getUniqueValuesSpecific(converted), tableFilter1);
        renderDatatable(mainTable, processed);
    },
    function (error) {
        // Display an error message if data loading fails
        alert("Database Error!");
    }
);


//datatable
function renderDatatable(table, data) {
    // Limit the dataset to 100 rows for demonstration
    let dataset = data;

    // Clear existing headers and rows
    let theads = table.querySelectorAll('thead'); 
    theads.forEach(head => {
        head.remove(); 
    });
    let tbodies = table.querySelectorAll('tbody'); 
    tbodies.forEach(body => {
        body.remove(); 
    });

    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    // Dynamically create table headers
    const headers = Object.keys(dataset[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);

    // Dynamically create table rows
    dataset.forEach(row => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.innerText = row[header];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);



    // Check if DataTable is already initialized
    if ($.fn.DataTable.isDataTable('#mainTable')) {
        // Destroy the existing DataTable
        $('#mainTable').DataTable().destroy();
    }

    // Initialize the DataTable
    $('#mainTable').DataTable({
        fixedHeader: true,
        scrollX: true
    });

}


function reRenderChart(table, filter, metric, order){
    let processed = processDataForDatatable(converted, filter, metric, order);
    renderDatatable(table, processed);
}

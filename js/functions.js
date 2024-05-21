  function toggleDisplay(element) {
    if (element.style.display == 'block') {
         element.style.display = 'none';
    } else {
        element.style.display = 'block';
    };
};

async function fetch_master(luink) {
    let x = await fetch(luink);
    let y = await x.text();
    let z = await JSON.parse(y);
    return z;
};

function chartDatasetModifier(charx){
  let chartDataset = [];
  for(let i = 0; i < charx.data.length; i++){



    let individualChartDataset = {
      label: charx.labels[i] + ' in ' + charx.unit[i],
      data: [charx.data[i]],
      borderWidth: 0
  
    };
    chartDataset.push(individualChartDataset);
  };

  return chartDataset;
};

function makeChart(e, charx) {
    let container = document.createElement('section');
    let canvas = document.createElement('canvas');
    container.appendChild(canvas);
    e.appendChild(container);

    new Chart(canvas, {
    type: charx.type,
    data: {
      labels: [charx.name],
      datasets: chartDatasetModifier(charx)
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }); 
};

function convertRangeToMonth(minMonth, maxMonth) {
    // Define an array of month names in Indonesian in lowercase
    const monthNames = [
        'januari', 'februari', 'maret', 'april', 'mei', 'juni',
        'juli', 'agustus', 'september', 'oktober', 'november', 'desember'
    ];
    
    // Create an array to store the result
    const result = [];
    
    // Loop from minMonth to maxMonth and add the corresponding month names to the result array
    for (let i = minMonth; i <= maxMonth; i++) {
        result.push(monthNames[i - 1]); // Adjust index as array is 0-based
    }
    
    return result;
}

function Charx(type, name, labels, data, unit){
  this.type = type;
  this.name = name
  this.labels = labels;
  this.data = data;
  this.unit = unit;
};

function removeAllChartSection(container){

  let sections = container.querySelectorAll('section');
  sections.forEach(section => {
      section.remove();
  });

};
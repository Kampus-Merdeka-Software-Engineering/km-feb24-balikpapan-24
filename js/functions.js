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

function rangeMaker(start, end) {
  let array = [];
  if (typeof start === "number" && typeof end === "number") {
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        array.push(i);
      };
    } else {
      for (let i = start; i >= end; i--) {
        array.push(i);
      };
    };
  } else if (typeof start === "string" && typeof end === "string") {
    if (start <= end) {
      for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        array.push(String.fromCharCode(i));
      };
    } else {
      for (let i = start.charCodeAt(0); i >= end.charCodeAt(0); i--) {
        array.push(String.fromCharCode(i));
      };
    };
  };
  return array;
};

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
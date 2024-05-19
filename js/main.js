

fetch_master("./dataset/dataset1.json").then(
    function (value) { 
        datasetMonth = value; datasetLoaded = true;
        loadMonthlyChart(mainFrame, datasetMonth);
    },
        function (error) { alert("Database Error!") }
);



function loadMonthlyChart(container, dataset){
if(datasetLoaded){

let sections = container.querySelectorAll('section');
sections.forEach(section => {
    section.remove();
});

let monthRange = rangeMaker(chartParameters.minMonth, chartParameters.maxMonth);
let dummyName = ['revenue', 'pizza order'];

    for(let i = 0; i < dataset.labels.length; i++){
        if(monthRange.includes(i+1)){
            let individualData = [];
            let individualLabel = [];
            let individualUnit = []

            for(let j = 0; j < dataset.datasets.length; j++){

                if(dummyName.includes(dataset.datasets[j].name.toLowerCase())){
                    individualData.push(dataset.datasets[j].data[i]);
                    individualLabel.push(dataset.datasets[j].name);
                    individualUnit.push(dataset.datasets[j].unit);
                };

            };

            let type = 'bar';
            let name = dataset.labels[i];
            let labels = individualLabel;
            let data = individualData;
            let unit = individualUnit;
            makeChart(container, new Charx(type, name, labels, data, unit));
        };
    };



}else{
    alert("dataset error");
}
}


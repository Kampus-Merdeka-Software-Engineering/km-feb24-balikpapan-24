

fetch_master("./dataset/datasetBulan.json").then(
    function (value) { 
        datasetMonth = value; datasetLoaded = true;
        loadIndividualChart(mainFrame, datasetMonth, 'month');
    },
        function (error) { alert("Database Error!") }
);



function loadIndividualChart(container, dataset, type){
if(datasetLoaded){

removeAllChartSection(container);

let range;

if(type.toLowerCase() == 'month'){
    range = convertRangeToMonth(chartParameters.minMonth, chartParameters.maxMonth);
}

let dummyName = ['pizza order', 'pizza order id'];

    for(let i = 0; i < dataset.labels.length; i++){
        if(range.includes(dataset.labels[i].toLowerCase())){
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
            let charlets = new Charx(type, name, labels, data, unit)

            makeChart(container, charlets);
        };
    };



}else{
    alert("dataset error");
}
}


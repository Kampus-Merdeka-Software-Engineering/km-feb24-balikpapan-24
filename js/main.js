


// Fungsi untuk memuat grafik individu dalam sebuah kontainer dengan dataset yang diberikan
function loadIndividualChart(dataset, type){
    // Memastikan dataset telah dimuat sebelumnya
    if(datasetLoaded){


        let range;

        // Jika tipe adalah bulan, mengonversi rentang bulan dari parameter grafik dan mengonversinya ke dalam bentuk rentang teks
    
        range = convertRangeToLabels(dataset.labels, chartParameters.minValue, chartParameters.maxValue);
    

        // Nama-nama data dummy yang akan digunakan untuk memfilter dataset
        let dummyName = chartParameters.nameSelections;

        if(chartParameters.chartDisplayType == 0){



            let data1 = [] //menampung data untuk dataset 1 chart
            let labels1 = []; //menampung label untuk 1 chart
            let borderWidthx = 0;

            if(chartParameters.chartType == 'line'){
                borderWidthx = 2;
            };


            //memasukkan label sesuai filter
            for(let j = chartParameters.minValue-1; j<chartParameters.maxValue; j++){
                labels1.push(dataset.labels[j]);
            };

            //memasukkan dataset sesuai filter
            for(let i = 0; i<dataset.datasets.length; i++){
                let datas = [];
                if(dummyName.includes(dataset.datasets[i].name.toLowerCase())){
                    for(let j = chartParameters.minValue-1; j<chartParameters.maxValue; j++){
                        datas.push(dataset.datasets[i].data[j]);
                    };
                    let individualChartDataset;

                    
                    if(chartParameters.chartType == 'line' || chartParameters.chartType == 'bar' || chartParameters.chartType == 'radar'){
                        individualChartDataset = {
                            label: dataset.datasets[i].name + ' dalam ' + dataset.datasets[i].unit , // Label untuk dataset
                            data: datas, // Nilai data untuk dataset
                            borderWidth: borderWidthx, // Menetapkan lebar border
                            backgroundColor: chartParameters.chartColor,
                            borderColor: chartParameters.chartColor
                        };
                    }else{
                        individualChartDataset = {
                            label: dataset.datasets[i].name + ' dalam ' + dataset.datasets[i].unit , // Label untuk dataset
                            data: datas, // Nilai data untuk dataset
                            borderWidth: borderWidthx // Menetapkan lebar border

                        };
                    }


                    data1.push(individualChartDataset);
                };
            };
            let name = ' ';
            let labels = translateIndex(labels1);
            let data = data1;
            let unit = ' '
            let charlets = new Charx(type, name, labels, data, unit, chartParameters.chartDisplayType)

            //memasukkan data 1 chart ke array charts
            mainCharts.unshift(charlets);

        }else{
            let translatedLabels = translateIndex(dataset.labels);
            let temp1 = [];
            // Iterasi melalui setiap label dalam dataset
            for(let i = 0; i < dataset.labels.length; i++){
                // Memeriksa apakah label saat ini termasuk dalam rentang yang diinginkan
                if(range.includes(dataset.labels[i].toLowerCase())){
                    let individualData = [];
                    let individualLabel = [];
                    let individualUnit = [];

                    // Iterasi melalui setiap dataset dalam dataset
                    for(let j = 0; j < dataset.datasets.length; j++){
                        // Memeriksa apakah nama dataset saat ini termasuk dalam data dummy yang ditentukan
                        if(dummyName.includes(dataset.datasets[j].name.toLowerCase())){
                            // Menambahkan data, label, dan unit dataset ke dalam array individu
                            individualData.push(dataset.datasets[j].data[i]);
                            individualLabel.push(dataset.datasets[j].name);
                            individualUnit.push(dataset.datasets[j].unit);
                        };
                    };

                    // Menentukan jenis grafik, nama, label, data, dan unit untuk grafik individual
                    let name = translatedLabels[i];
                    let labels = individualLabel;
                    let data = individualData;
                    let unit = individualUnit;
                    let charlets = new Charx(type, name, labels, data, unit, chartParameters.chartDisplayType)
                   
                    temp1.unshift(charlets);
                };
            };
            for(let i = 0; i<temp1.length; i++){
                mainCharts.unshift(temp1[i]);
            };
        };

    }else{
        // Menampilkan pesan kesalahan jika dataset belum dimuat
        alert("dataset error");
    };
};


// Membuat dan menampilkan grafik menggunakan data individu yang ditentukan
function renderCharts(container){
    // Menghapus semua bagian grafik yang ada di dalam kontainer
    removeAllChartSection(container);

    mainCharts.forEach(charlets => {
        makeChart(container, charlets); // Menghapus setiap section dari kontainer
    });
};


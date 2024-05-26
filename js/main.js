


// Fungsi untuk memuat grafik individu dalam sebuah kontainer dengan dataset yang diberikan
function loadIndividualChart(dataset, type){
    // Memastikan dataset telah dimuat sebelumnya
    if(datasetLoaded){


        let range;

        // Jika tipe adalah bulan, mengonversi rentang bulan dari parameter grafik dan mengonversinya ke dalam bentuk rentang teks
    
        range = convertRangeToLabels(dataset.labels, chartParameters.minValue, chartParameters.maxValue);
    

        // Nama-nama data dummy yang akan digunakan untuk memfilter dataset
        let dummyName = ['pizza order', 'revenue'];

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
                let name = dataset.labels[i];
                let labels = individualLabel;
                let data = individualData;
                let unit = individualUnit;
                let charlets = new Charx(type, name, labels, data, unit)

                mainCharts.push(charlets);
            };
        };
    }else{
        // Menampilkan pesan kesalahan jika dataset belum dimuat
        alert("dataset error");
    }
}


// Membuat dan menampilkan grafik menggunakan data individu yang ditentukan
function renderCharts(container){

    // Menghapus semua bagian grafik yang ada di dalam kontainer
    removeAllChartSection(container);

    mainCharts.forEach(charlets => {
        makeChart(container, charlets); // Menghapus setiap section dari kontainer
    });
    

}
// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("./dataset/datasetBulan.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel datasetMonth dan menandai bahwa dataset telah dimuat
        datasetMonth = value; 
        datasetLoaded = true;
        // Memuat grafik individu dengan data bulan
        loadIndividualChart(mainFrame, datasetMonth, 'month');
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);

// Fungsi untuk memuat grafik individu dalam sebuah kontainer dengan dataset yang diberikan
function loadIndividualChart(container, dataset, type){
    // Memastikan dataset telah dimuat sebelumnya
    if(datasetLoaded){
        // Menghapus semua bagian grafik yang ada di dalam kontainer
        removeAllChartSection(container);

        let range;

        // Jika tipe adalah bulan, mengonversi rentang bulan dari parameter grafik dan mengonversinya ke dalam bentuk rentang teks
        if(type.toLowerCase() == 'month'){
            range = convertRangeToMonth(chartParameters.minMonth, chartParameters.maxMonth);
        }

        // Nama-nama data dummy yang akan digunakan untuk memfilter dataset
        let dummyName = ['pizza order', 'pizza order id'];

        // Iterasi melalui setiap label dalam dataset
        for(let i = 0; i < dataset.labels.length; i++){
            // Memeriksa apakah label saat ini termasuk dalam rentang yang diinginkan
            if(range.includes(dataset.labels[i].toLowerCase())){
                let individualData = [];
                let individualLabel = [];
                let individualUnit = []

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
                let type = 'bar';
                let name = dataset.labels[i];
                let labels = individualLabel;
                let data = individualData;
                let unit = individualUnit;
                let charlets = new Charx(type, name, labels, data, unit)

                // Membuat dan menampilkan grafik menggunakan data individu yang ditentukan
                makeChart(container, charlets);
            };
        };
    }else{
        // Menampilkan pesan kesalahan jika dataset belum dimuat
        alert("dataset error");
    }
}

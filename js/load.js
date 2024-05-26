// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("./dataset/datasetJam.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel datasetMonth dan menandai bahwa dataset telah dimuat
        dataset[0] = value; 
        datasetLoaded = true;
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);

// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("./dataset/datasetHari.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel datasetMonth dan menandai bahwa dataset telah dimuat
        dataset[1] = value; 
        datasetLoaded = true;
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);


// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("./dataset/datasetBulan.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel datasetMonth dan menandai bahwa dataset telah dimuat
        dataset[2] = value; 
        datasetLoaded = true;
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);


// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("./dataset/datasetSize.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel datasetMonth dan menandai bahwa dataset telah dimuat
        dataset[3] = value; 
        datasetLoaded = true;
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);

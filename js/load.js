// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("../dataset/all.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel dan menandai bahwa dataset telah dimuat
        allData = value; 
        datasetLoaded = true;
        processAllData();
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);


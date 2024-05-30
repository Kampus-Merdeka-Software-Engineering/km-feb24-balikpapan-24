// Memuat data dari sebuah sumber daya (diasumsikan sebagai panggilan AJAX) dan memprosesnya
fetch_master("../dataset/all.json").then(
    function (value) { 
        // Ketika data berhasil dimuat, memasukkan data ke dalam variabel dan menandai bahwa dataset telah dimuat
        allData = value; 
        datasetLoaded = true;
        dataset[0] = processData(allData, 'order_hour');
        dataset[1] = processData(allData, 'order_day_week');
        dataset[2] = processData(allData, 'order_day');
        dataset[3] = processData(allData, 'order_month');
        dataset[4] = processData(allData, 'order_quarter');
        dataset[5] = processData(allData, 'pizza_size');
        dataset[6] = processData(allData, 'pizza_category');
        dataset[7] = processData(allData, 'pizza_type');
    },
    function (error) { 
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat memuat data
        alert("Database Error!") 
    }
);


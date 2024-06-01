//process data
function processAllData(){
    dataset[0] = processData(allData, 'order_hour');
    dataset[1] = processData(allData, 'order_day_week');
    dataset[2] = processData(allData, 'order_day');
    dataset[3] = processData(allData, 'order_month');
    dataset[4] = processData(allData, 'order_quarter');
    dataset[5] = processData(allData, 'pizza_size');
    dataset[6] = processData(allData, 'pizza_category');
    dataset[7] = processData(allData, 'pizza_type');

};

function sortAllData(index){
    if(index == 6969){
        processAllData();
    }else{
        dataset[0] = reorderData(dataset[0], index);
        dataset[1] = reorderData(dataset[1], index);
        dataset[2] = reorderData(dataset[2], index);
        dataset[3] = reorderData(dataset[3], index);
        dataset[4] = reorderData(dataset[4], index);
        dataset[5] = reorderData(dataset[5], index);
        dataset[6] = reorderData(dataset[6], index);
        dataset[7] = reorderData(dataset[7], index);
    };

};

        // Nama label 
        let labelNames = [
            ['Lebar Halaman', 'Tinggi Sidebar', 'Lebar Chart', 'Warna Chart'],
            ['Pilih Jenis Filter', 'Pilih Jenis Sort','Bulan Minimal', 'Bulan Maksimal']
        ];

//dynamic label names
function setAllLabelNames(val){
            switch (val) {
                case 0:
                    labelNames[1][2] = "Jam Minimal"; labelNames[1][3] = "Jam Maksimal"; 
                    break;
                case 1:
                    labelNames[1][2] = "Hari Minimal"; labelNames[1][3] = "Hari Maksimal"; 
                    break;
                case 2:
                    labelNames[1][2] = "Hari Bulan Minimal"; labelNames[1][3] = "Hari Bulan Maksimal"; 
                    break;
                case 3:
                    labelNames[1][2] = "Bulan Minimal"; labelNames[1][3] = "Bulan Maksimal";  
                    break;
                case 4:
                    labelNames[1][2] = "Quarter Minimal"; labelNames[1][3] = "Quarter Maksimal";  
                    break;
                case 5:
                    labelNames[1][2] = "Ukuran Minimal"; labelNames[1][3] = "Ukuran Maksimal";  
                    break;
                case 6:
                    labelNames[1][2] = "Kategori Minimal"; labelNames[1][3] = "Kategori Maksimal";  
                    break;
                case 7:
                    labelNames[1][2] = "Tipe Minimal"; labelNames[1][3] = "Tipe Maksimal";  
                    break;
                default:
                    console.log("No valid option selected");
                    // Handle any unexpected cases
                    break;
            };

};
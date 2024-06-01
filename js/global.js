//main dataset
let allData = [];        

// Fungsi konstruktor untuk membuat objek Charx yang mewakili sebuah grafik
function Charx(datasetIndex, type, name, labels, data, unit, displayType){
    this.datasetIndex = datasetIndex;
    this.type = type; // Jenis grafik
    this.name = name; // Nama grafik
    this.labels = labels; // Label untuk data grafik
    this.data = data; // Nilai data untuk grafik
    this.unit = unit; // Unit untuk data grafik
    this.displayType = displayType; //tipe penampilan chart
};


// Menambahkan fungsi klik toggle display sekaligus mendapatkan elemen dom input di setiap sidebar
        let sidebarInput = [];
        let sidebarLabel = [];

        // Dataset and parameters
        let dataset = []; 
        let datasetLoaded = false; 
        let mainCharts = [];

        let pageParameters = {
            pageWidth: null, 
            sidebarWidth: null,
            defaultDays: null,
            defaultMonths: null,
            defaultFilterNames: null
        }

        let chartParameters = {
            datasetIndex: null,
            minValue: null, 
            maxValue: null,
            chartDisplayType: null,
            nameSelections: [],
            chartType: null,
            chartColor: null,
            chartWidth: null
        }
//main dataset
let allData = [];        

// Menambahkan fungsi klik toggle display sekaligus mendapatkan elemen dom input di setiap sidebar
        let sidebarInput = [];
        let sidebarLabel = [];

        // Dataset and parameters
        let dataset = []; 
        let datasetLoaded = false; 
        let mainCharts = [];

        let pageParameters = {
            pageWidth: 100, 
            sidebarWidth: 100,
            charWidth: 30,
            defaultDays: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
            defaultMonths: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

        }

        let chartParameters = {
            datasetIndex: 3,
            minValue: 1, 
            maxValue: 12,
            chartDisplayType: 0,
            nameSelections: [],
            chartType: 'bar'
        }
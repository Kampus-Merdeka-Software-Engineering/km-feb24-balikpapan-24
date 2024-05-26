// Fungsi untuk mengalihkan tampilan properti dari elemen HTML antara 'block' dan 'none'
function toggleDisplay(element) {
  if (element.style.display == 'block') {
       element.style.display = 'none';
  } else {
      element.style.display = 'block';
  };
};


// Fungsi asinkron untuk mengambil data dari tautan yang diberikan dan mem-parsingnya sebagai JSON
async function fetch_master(luink) {
  let x = await fetch(luink); // Mengambil data dari tautan yang diberikan
  let y = await x.text(); // Mengonversi data yang diambil ke dalam bentuk teks
  let z = await JSON.parse(y); // Mem-parsing data teks sebagai JSON
  return z; // Mengembalikan data JSON yang diparsing
};

// Fungsi untuk memodifikasi struktur dataset grafik
function chartDatasetModifier(charx){
let chartDataset = []; // Array untuk menyimpan dataset grafik yang dimodifikasi
for(let i = 0; i < charx.data.length; i++){
  // Membuat objek dataset individu dengan properti label, data, dan borderWidth
  let individualChartDataset = {
    label: charx.labels[i] + ' dalam ' + charx.unit[i], // Label untuk dataset
    data: [charx.data[i]], // Nilai data untuk dataset
    borderWidth: 0 // Menetapkan lebar border menjadi 0
  };
  chartDataset.push(individualChartDataset); // Menambahkan objek dataset individu ke dalam array chartDataset
};
return chartDataset; // Mengembalikan dataset grafik yang dimodifikasi
};

// Fungsi untuk membuat grafik baru menggunakan pustaka Chart.js
function makeChart(e, charx) {
  let container = document.createElement('section'); // Membuat elemen section baru
  let canvas = document.createElement('canvas'); // Membuat elemen canvas baru
  container.appendChild(canvas); // Meletakkan canvas ke dalam section
  e.appendChild(container); // Meletakkan section ke dalam elemen yang ditentukan

  new Chart(canvas, { // Membuat instance Chart baru dengan elemen canvas
  type: charx.type, // Menetapkan jenis grafik
  data: {
    labels: [charx.name], // Menetapkan label untuk grafik
    datasets: chartDatasetModifier(charx) // Memodifikasi dataset menggunakan fungsi chartDatasetModifier
  },
  options: {
    scales: {
      y: {
        beginAtZero: true // Menetapkan sumbu y untuk dimulai dari nol
      }
    }
  }
}); 


};

// Fungsi untuk mengonversi rentang nomor bulan menjadi nama bulan yang sesuai dalam Bahasa Indonesia
function convertRangeToLabels(labels, min, max) {


  let result = []; // Array untuk menyimpan hasil
  // Melakukan loop dari minMonth hingga maxMonth dan menambahkan nama bulan yang sesuai ke dalam array result
  console.log(labels)
  for (let i = min; i <= max; i++) {
      result.push(labels[i - 1].toLowerCase()); // Menyesuaikan indeks karena array dimulai dari 0
  }
  return result; // Mengembalikan array nama bulan
}

// Fungsi konstruktor untuk membuat objek Charx yang mewakili sebuah grafik
function Charx(type, name, labels, data, unit){
this.type = type; // Jenis grafik
this.name = name; // Nama grafik
this.labels = labels; // Label untuk data grafik
this.data = data; // Nilai data untuk grafik
this.unit = unit; // Unit untuk data grafik
};

// Fungsi untuk menghapus semua bagian grafik dari sebuah elemen kontainer
function removeAllChartSection(container){
let sections = container.querySelectorAll('section'); // Memilih semua section dalam kontainer
sections.forEach(section => {
    section.remove(); // Menghapus setiap section dari kontainer
});
};

//mengubah range
function setRangeLimits(input, min, max) {
    input.min = min;
    input.max = max;
    chartParameters.minValue = min;
    chartParameters.maxValue = max;
}

function setLabelData(datasetIndex, val){
  return dataset[datasetIndex].labels[val-1];

}
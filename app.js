window.onload = function() {
    fetch('http://localhost:3000/pegawai')  // Mengakses backend lokal
        .then(response => response.json())  // Parsing data ke format JSON
        .then(data => {
            const list = document.getElementById('pegawai-list');  // Menyiapkan tempat untuk menampilkan data
            data.forEach(pegawai => {
                const li = document.createElement('li');
                li.textContent = `${pegawai.nama} - ${pegawai.jabatan}`;
                list.appendChild(li);  // Menambahkan data pegawai ke dalam list
            });
        })
        .catch(error => console.error('Error:', error));  // Menangani error jika ada masalah
}

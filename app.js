window.onload = function() {
    fetch('http://localhost:3000/pegawai') // URL API untuk mendapatkan data pegawai
    .then(response => response.json()) // Mengubah response menjadi format JSON
    .then(data => {
        const list = document.getElementById('pegawai-list'); // Menargetkan <ul> dengan id 'pegawai-list'
        data.forEach(pegawai => {
            const li = document.createElement('li'); // Membuat elemen <li>
            li.textContent = `${pegawai.nama} - ${pegawai.jabatan}`; // Menampilkan nama dan jabatan
            list.appendChild(li); // Menambahkan <li> ke dalam <ul>
        });
    });
}

window.onload = function() {
  fetch('http://localhost:3000/pegawai')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('pegawai-list');
      data.forEach(pegawai => {
        const li = document.createElement('li');
        li.textContent = `${pegawai.nama} - ${pegawai.jabatan}`;
        list.appendChild(li);
      });
    });
};

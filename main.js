let mapel = document.getElementById('mapel');
const loading = document.getElementById("loading");

try {
  fetch('https://apicontekan.000webhostapp.com/api/?target=mapel')
    .then(response => {
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      } 
      return response.json();
    })
    .then(data => {
      //console.log(data);
      
      for (var i = 0; i < data.length; i++) {
        mapel.innerHTML += `
         <li>
        <a href="daftar_soal/index.html?target=daftar_tugas&id=${data[i].id}">
          <table>
            <tr>
              <td>Mapel</td>
              <td>:</td>
              <td>${data[i].mapel}</td>
            </tr>
            <tr>
              <td>Kurikulum</td>
              <td>:</td>
              <td>${data[i].kurikulum}</td>
            </tr>
            <tr>
              <td>Kelas</td>
              <td>:</td>
              <td>${data[i].kelas}</td>
            </tr>
          </table>
        </a>
      </li>
      `;
      } 
      loading.style.display = "none";
      
    })
    .catch(error => {
      console.error(error);
      loading.style.display = "none";
    });
} catch (error) {
  console.error('Terjadi kesalahan:', error);
}

 
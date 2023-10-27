let urlParam = new URLSearchParams(window.location.search);
let target = urlParam.get("target");
let id = urlParam.get("id");
let dttgs = document.getElementById('daftar_tugas');
const loading = document.getElementById("loading");

//console.log(target, id);

try {
  fetch(`https://apicontekan.000webhostapp.com/api/?target=${target}&id=${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      } 
      return response.json();
    })
    .then(data => {
      //console.log(data);
      
      for (var i = 0; i < data.length; i++) {
        dttgs.innerHTML += `
       <li>
          <a href="../soal/index.html?target=jawaban&id=${data[i].id}">
            <table>
              <tr>
                <td><h5>${data[i].daftar_soal} halaman ${data[i].halaman}</h5></td>
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
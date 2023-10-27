let urlParam = new URLSearchParams(window.location.search);
let target = urlParam.get("target");
let id = urlParam.get("id");
let soal = document.getElementById('soal');

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
        soal.innerHTML += `
       <li>
           <a href="${data[i].link}">
             <table>
               <tr>
                 <td><h5>${data[i].no}. ${data[i].soal}</h5></td>
               </tr>
             </table>
            </a>
      </li>
      `;
      }


    })
    .catch(error => {
      console.error(error);
    });
} catch (error) {
  console.error('Terjadi kesalahan:', error);
}
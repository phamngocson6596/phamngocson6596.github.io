const HOSO_CO_GIA = [
  {name: "Hợp đồng mua bán", thulao: 300_000},
  {name: "Hợp đồng thế chấp", thulao: 300_000},
  {name: "Hợp đồng vay", thulao: 300_000},
]

HOSO_CO_GIA.forEach(hoso=>{
  console.log(hoso)
  document.querySelector("#loaihoso").insertAdjacentHTML("beforeend", `<option value=${JSON.stringify(hoso)}>${hoso.name}</option>`)
})
function tinhPhiCongChung(giamuaban) {
  const value = parseInt(giamuaban,10);
  if (value<50_000_000) {
      return 50_000;
  } else if (value>=50_000_000 && value<=100_000_000) {
      return 100_000;
  } else if (value>100_000_000 && value<=1_000_000_000) {
      return value*0.001;
  } else if (value>1_000_000_000 && value<=3_000_000_000) {
      let vuotqua = value-1_000_000_000;
      return 1_000_000+vuotqua*0.0006;
  } else if (value>3_000_000_000 && value<=5_000_000_000) {
      let vuotqua = value-3_000_000_000;
      return 2_200_000+vuotqua*0.0005;
  } else if (value>5_000_000_000 && value<=10_000_000_000) {
      let vuotqua = value-5_000_000_000;
      return 3_200_000+vuotqua*0.0004;
  } else if (value>10_000_000_000 && value<=100_000_000_000) {
      let vuotqua = value-10_000_000_000;
      return 5_200_000+vuotqua*0.0003;
  } else if (value>100_000_000_000) {
      let vuotqua = value-100_000_000_000;
      let phi = 32_200_000+vuotqua*0.0002;
      if (phi>70_000_000){return 70_000_000} else {return phi}
  } else {
      return "Input value out of range";
  }
}

// Get the "Thêm hồ sơ" button element
const addBtn = document.querySelector('#oldBtn');
const hsBtn = document.querySelector('#addBtn');


function addNewHoso(tenhoso) {
  const danhMucHoSo = document.querySelector('.w3-container');
  console.log(JSON.parse(tenhoso));
  // Create a new "hoso" element
  const hosoElement = document.createElement('div');
  hosoElement.classList.add('w3-card', 'hoso');
  hosoElement.style.marginBottom = `15px`;

  const hosoRow = document.createElement('div');
  hosoRow.classList.add('w3-cell-row');

  const hosoText = document.createElement('div');
  hosoText.classList.add('w3-cell');
  hosoText.innerHTML = `<p class="w3-padding-large">${tenhoso}</p>`;

  const hosoCloseBtn = document.createElement('div');
  hosoCloseBtn.classList.add('w3-cell', 'w3-button', 'close-hoso');
  hosoCloseBtn.style.width = '10%';
  hosoCloseBtn.innerHTML = '<i class="fas fa-times"></i>';

  hosoRow.appendChild(hosoText);
  hosoRow.appendChild(hosoCloseBtn);
  hosoElement.appendChild(hosoRow);

  // Add the new "hoso" element to the "Danh mục hồ sơ" element
  danhMucHoSo.appendChild(hosoElement);

  // Attach event listener to the new "close-hoso" button
  hosoCloseBtn.addEventListener('click', () => {
    // Get the parent "hoso" element
    const parentHosoElement = hosoCloseBtn.parentNode.parentNode;

    // Remove the "hoso" element
    parentHosoElement.remove();
  });
}
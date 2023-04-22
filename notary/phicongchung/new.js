// Get the "Thêm hồ sơ" button element
const addBtn = document.querySelector('#oldBtn');
const hsBtn = document.querySelector('#addBtn');

hsBtn.addEventListener("click", ()=>{
    document.getElementById("id02").style.display = "block";
})
// Add event listener to the button
// addBtn.addEventListener('click', () => {
//   // Get the "Danh mục hồ sơ" element
//   const danhMucHoSo = document.querySelector('.w3-container');

//   // Create a new "hoso" element
//   const hosoElement = document.createElement('div');
//   hosoElement.classList.add('w3-card', 'hoso');
//   hosoElement.style.marginBottom = `15px`;

//   const hosoRow = document.createElement('div');
//   hosoRow.classList.add('w3-cell-row');

//   const hosoText = document.createElement('div');
//   hosoText.classList.add('w3-cell');
//   hosoText.innerHTML = '<p class="w3-padding-large">Hợp đồng mua bán</p>';

//   const hosoCloseBtn = document.createElement('div');
//   hosoCloseBtn.classList.add('w3-cell', 'w3-button', 'close-hoso');
//   hosoCloseBtn.style.width = '10%';
//   hosoCloseBtn.innerHTML = '<i class="fas fa-times"></i>';

//   hosoRow.appendChild(hosoText);
//   hosoRow.appendChild(hosoCloseBtn);
//   hosoElement.appendChild(hosoRow);

//   // Add the new "hoso" element to the "Danh mục hồ sơ" element
//   danhMucHoSo.appendChild(hosoElement);

//   // Attach event listener to the new "close-hoso" button
//   hosoCloseBtn.addEventListener('click', () => {
//     // Get the parent "hoso" element
//     const parentHosoElement = hosoCloseBtn.parentNode.parentNode;

//     // Remove the "hoso" element
//     parentHosoElement.remove();
//   });
// });

// Get all the "close-hoso" button elements
const closeBtns = document.querySelectorAll('.close-hoso');

// Add event listener to all the "close-hoso" buttons
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Get the "hoso" element
    const hosoElement = btn.parentNode.parentNode;

    // Remove the "hoso" element
    hosoElement.remove();
  });
});

function addNewHoso(tenhoso) {
  const danhMucHoSo = document.querySelector('.w3-container');

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
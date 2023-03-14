import { danhmuc } from "./danhmuc.js";

const table = document.querySelector("#tablecontent");

danhmuc.forEach((value,index)=>{
    table.insertAdjacentHTML("beforeend", 
    `<tr>
        <td class="w3-center">${index+1}</td>
        <td class="listdoc">${value}</td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td class="amount"></td>
        <td class="location"></td>
    </tr>`)
})

table.insertAdjacentHTML("beforeend", 
    `<tr>
        <th></th>
        <th>TỔNG SỐ</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>`)
    
    const radios = document.querySelectorAll('.custom-radio input[type="radio"]');

    radios.forEach((radio) => {
      radio.addEventListener('click', event => {
        if (radio.checked) {
            console.log("It checked");
        } else {
            console.log("Not checked");
        }
      });
    });

    
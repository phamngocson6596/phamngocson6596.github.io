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
        <td><input type="text" class="w3-center"></td>
        <td class="location"><input type="text" class="w3-center"></td>
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
    

    
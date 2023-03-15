import { danhmuc } from "./danhmuc.js";

const table = document.querySelector("#tablecontent");

danhmuc.forEach((value,index)=>{
    table.insertAdjacentHTML("beforeend", 
    `<tr>
        <td class="w3-center">${index+1}</td>
        <td class="listdoc">
            <input type="radio" id="radio${index}" name="radio${index}" class="specialradio" tabindex="-1">
            <label for="radio${index}" class="nameofdoc">${value}</label>
        </td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td class="tick"><label class="custom-radio"><input type="radio" name="radio${index}"><span class="checkmark"></span></label></td>
        <td><input type="text" class="w3-center miniontosum"></td>
        <td class="location"><textarea class="w3-center auto-expand"rows="1" maxlength="500"></textarea></td>
    </tr>`)
})

table.insertAdjacentHTML("beforeend", 
    `<tr>
        
        <th colspan="5">TỔNG SỐ</th>
        
        <th><span class="sum"></span></th>
        <th></th>
    </tr>`)
    
const alldanhmuc = document.querySelectorAll(".nameofdoc")
alldanhmuc.forEach(danhmuc =>{
    danhmuc.addEventListener("dblclick", function() {
        // Create text input element
        const input = document.createElement("input");
        input.type = "text";
        input.value = danhmuc.textContent;

        // Set position of input element
        let x = danhmuc.offsetLeft;
        let y = danhmuc.offsetTop;
        let parent = danhmuc.offsetParent;
        while (parent) {
        x += parent.offsetLeft;
        y += parent.offsetTop;
        parent = parent.offsetParent;
        }
        input.style.position = "absolute";
        input.style.top = y + "px";
        input.style.left = x + "px";
        input.style.width = `${danhmuc.offsetWidth + 200}px`;

        // Add input element to document
        document.body.appendChild(input);

        // Focus input element and select text
        input.focus();

        // Handle input element blur event
        input.addEventListener("blur", function() {
          // Apply new text content to paragraph element
          danhmuc.textContent = input.value;

          // Remove input element from document
          document.body.removeChild(input);
        });
      });
})

const allminion = document.querySelectorAll(".miniontosum")
allminion.forEach(minion=>{
    let sum = 0;
    minion.addEventListener("keyup", ()=>{
        sum = 0;
        allminion.forEach(minion=>{
            if (!isNaN(minion.value) && minion.value !== "") {
                sum += Number.parseInt(minion.value, 10);
              }
        })
        const sumbox = document.querySelector(".sum");
        sumbox.textContent = sum;
    });
})
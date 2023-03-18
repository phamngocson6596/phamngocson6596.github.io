import { danhmuc } from "./danhmuc.js";

const table = document.querySelector("#tablecontent");

danhmuc.forEach((value,index)=>{
    table.insertAdjacentHTML("beforeend", 
    `<tr>
        <td class="w3-center">${index+1}</td>
        <td class="listdoc">
            <label for="radio${index}" class="nameofdoc">${value}</label>
            <input type="radio" id="radio${index}" name="radio${index}" class="specialradio" tabindex="-1">
        </td>
        <td class="bc"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td class="sy"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td class="bp"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td><input type="text" class="w3-center miniontosum"></td>
        <td class="location"><textarea class="w3-center auto-expand"rows="1" maxlength="500"></textarea></td>
    </tr>`)
})

table.insertAdjacentHTML("beforeend", 
    `<tr>
        <th colspan="5">TỔNG SỐ</th>
        <th><span class="sum"></span></th>
        <th><span class="largest"></span></th>
    </tr>`);
    
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
});

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
});

let textareas = document.querySelectorAll('.auto-expand');
textareas.forEach(textarea=>{
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = `${this.scrollHeight}px`;

                
        let largest = document.querySelector(".largest");
        let str = textarea.value;
        let arr = str.split(/[-;,]/);
        let numArr = arr.map(Number);
        let max = Math.max(...numArr);
        if (largest.textContent==="") {
            largest.textContent = max
        };
        let imax = largest.textContent;

        if (imax < max) {
            largest.textContent = max
        };
    });
});

document.querySelector("#tablecontent tr:nth-of-type(1) .bc input").checked = true
document.querySelector("#tablecontent tr:nth-of-type(1) textarea").value = "1-"
document.querySelector("#tablecontent tr:nth-of-type(1) .miniontosum").value = 1
document.querySelector("#tablecontent tr:nth-of-type(2) .miniontosum").value = 1
document.querySelector("#tablecontent tr:nth-of-type(2) .bc input").checked = true


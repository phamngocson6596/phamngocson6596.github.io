import { danhmuc } from "./danhmuc.js";

const table = document.querySelector("#tablecontent");

danhmuc.forEach((value,index)=>{
    table.insertAdjacentHTML("beforeend", 
    `<tr class="w3-hover-pale-blue hangnoidung">
        <td class="w3-center">${index+1}</td>
            <td >
                <div class="w3-cell-row" style="display:table">
                    <div class="w3-cell contentHaveToShared" style="padding-left:5px">
                        <label for="radio${index}" class="nameofdoc">${value}</label>
                        <input type="radio" id="radio${index}" name="radio${index}" class="specialradio" tabindex="-1">
                    </div>
                    <div class="hiddenButton w3-cell-middle" style="width:5%">
                        <div class="w3-button w3-text-blue editContent w3-cell" title="Edit" style="padding:0px"><i class="fas fa-edit"></i></div>  
                        <div class="w3-button w3-text-blue miniReset w3-cell" title="Reset" style="padding:0px"><i class="fas fa-redo"></i></div>
                    </div>
                </div>
            </td>
            <td class="bc"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
            <td class="sy"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
            <td class="bp"><label class="custom-radio"><input type="radio" name="radio${index}" tabindex="-1"><span class="checkmark"></span></label></td>
            <td><input type="text" class="w3-center miniontosum"></td>
        <td class="location"><textarea class="w3-center auto-expand" rows="1" maxlength="500"></textarea></td>
    </tr>`)
})

table.insertAdjacentHTML("beforeend", 
    `<tr class="w3-hover-none">
        <th colspan="5" class="w3-center">TỔNG SỐ</th>
        <th class="w3-center"><span class="sum"></span></th>
        <th class="w3-center"><span class="largest"></span></th>
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
document.querySelector(".w3-badge.reload").onclick = function() {
    location.reload(true);
}
document.querySelector(".w3-badge.print").onclick = function() {
    window.print();
}
const resetMiniButtons = document.querySelectorAll(".miniReset")
    resetMiniButtons.forEach(button=>{
        button.addEventListener("click", ()=>{
            const parent = button.parentNode.parentNode.parentNode.parentNode;
            parent.querySelector(".bc input").checked = false;
            parent.querySelector(".sy input").checked = false;
            parent.querySelector(".bp input").checked = false;
            parent.querySelector(".miniontosum").value = "";
            parent.querySelector("textarea").value = "";
        })
})

document.querySelector("#tablecontent tr:nth-of-type(1) .bc input").checked = true
document.querySelector("#tablecontent tr:nth-of-type(1) textarea").value = "1-"
document.querySelector("#tablecontent tr:nth-of-type(1) .miniontosum").value = 1
document.querySelector("#tablecontent tr:nth-of-type(2) .miniontosum").value = 1
document.querySelector("#tablecontent tr:nth-of-type(2) .bc input").checked = true

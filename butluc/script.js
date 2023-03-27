import { danhmuc, tinhtong, timMax, saveDoc } from "./helpers.js";

const table = document.querySelector("#tablecontent");

let iDanhmuc = danhmuc;
if (localStorage.localDanhmuc) {iDanhmuc=JSON.parse(localStorage.localDanhmuc)}

iDanhmuc.forEach((value,index)=>{
    table.insertAdjacentHTML("beforeend", 
    `<tr class="w3-hover-pale-blue hangnoidung" id="grandPa${index+1}">
        <td class="w3-center">${index+1}</td>
        <td id="motherContent${index+1}">
            <div class="w3-cell-row" style="display:table">
                <div class="w3-cell contentHaveToShared" style="padding-left:5px">
                    <label class="nameofdoc">${value}</label>
                </div>
                <div class="hiddenButton w3-cell-middle" style="width:5%">
                    <div class="w3-button w3-text-blue editContent w3-cell" id="edit${index+1}" title="Chỉnh sửa" style="padding:0px;padding-left:5px;"><i class="fas fa-edit"></i></div>  
                    <div class="w3-button w3-text-blue miniReset w3-cell" id="reset${index+1}" title="Reset hàng" style="padding:0px;padding-left:5px;"><i class="fas fa-redo"></i></div>
                </div>
            </div>
        </td>
        <td class="bc"><label class="custom-radio"><input type="radio" name="radio${index+1}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td class="sy"><label class="custom-radio"><input type="radio" name="radio${index+1}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td class="bp"><label class="custom-radio"><input type="radio" name="radio${index+1}" tabindex="-1"><span class="checkmark"></span></label></td>
        <td><input type="text" class="w3-center miniontosum"></td>
        <td class="location"><textarea class="w3-center auto-expand" rows="1"></textarea></td>
    </tr>`)
});

table.insertAdjacentHTML("beforeend", 
    `<tr class="w3-hover-none">
        <th colspan="5" class="w3-center">TỔNG SỐ</th>
        <th class="w3-center"><span class="sum"></span></th>
        <th class="w3-center"><span class="largest"></span></th>
    </tr>`
);

const allminion = document.querySelectorAll(".miniontosum");
allminion.forEach(minion=>{
    minion.addEventListener("keyup", ()=>{
        tinhtong(allminion);
    });
});

let textareas = document.querySelectorAll('.auto-expand');
textareas.forEach(textarea=>{
    textarea.addEventListener('input', function() {
        if (this.scrollHeight > this.clientHeight) {
            this.rows++;
          }
        timMax(textareas);
    });
});
const editButtons = document.querySelectorAll(".w3-button.editContent");
editButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const mother = document.querySelector(`#motherContent${button.id.substring(4)}`);
        const title = mother.querySelector(".nameofdoc");
        const children = mother.querySelector("div");

        const input = document.createElement("textarea");
        input.value = title.textContent;
        input.classList.add("customEditBox");

        mother.removeChild(children);
        mother.appendChild(input);
        input.focus();
        input.addEventListener("blur", function() {
            mother.appendChild(children);
            title.textContent = input.value;
            mother.removeChild(input);
          });
    })
});

const resetMiniButtons = document.querySelectorAll(".miniReset");
resetMiniButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const parent = document.querySelector(`#grandPa${button.id.substring(5)}`);
        parent.querySelector(".bc input").checked = false;
        parent.querySelector(".sy input").checked = false;
        parent.querySelector(".bp input").checked = false;
        parent.querySelector(".miniontosum").value = "";
        parent.querySelector("textarea").value = "";
        tinhtong(allminion);
        timMax(textareas);
    })
});

document.querySelector(".w3-badge.reload").onclick = function() {
    location.reload(true);
};
document.querySelector(".w3-badge.print").onclick = function() {
    window.print();
};
document.querySelector(".w3-badge.save").onclick = function() {
    document.getElementById('id01').style.display='block';
}; 
document.querySelector("#dongyButton").onclick = function(){
    saveDoc(); 
    document.getElementById('id01').style.display='none';
};
document.querySelector("#tenthuky").onclick = function() {
    const ten = this.querySelector("b");
    const input = document.createElement("input");
    input.placeholder = ten.textContent;
    input.type = "text";

    this.removeChild(ten);
    this.appendChild(input);
    input.focus();
    input.addEventListener("blur", ()=> {
        if (input.value!==""){ten.textContent = input.value};
        localStorage.tenthuky = input.value;
        this.appendChild(ten);
        this.removeChild(input);
      });
}

document.querySelector("#tablecontent tr:nth-of-type(1) .bc input").checked = true;
document.querySelector("#tablecontent tr:nth-of-type(1) textarea").value = "1-";
document.querySelector("#tablecontent tr:nth-of-type(1) .miniontosum").value = 1;
document.querySelector("#tablecontent tr:nth-of-type(2) .miniontosum").value = 1;
document.querySelector("#tablecontent tr:nth-of-type(2) .bc input").checked = true;

if (localStorage.tenthuky){
document.querySelector("#tenthuky").querySelector("b").textContent = localStorage.tenthuky;
}
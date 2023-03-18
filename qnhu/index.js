import { listImage } from "./linkimage.js";

const tablehtml = document.querySelector("#frameTable")
listImage.sort(() => Math.random() - 0.5);

listImage.forEach(img=>{
    tablehtml.insertAdjacentHTML("beforeend", 
    `<div class="w3-panel w3-center" style="padding:0px"><img src="${img}" alt="qnhu" class="w3-card-4 w3-round-large" style="width:100%"></div>`)
})
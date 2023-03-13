import { listImage } from "./linkimage.js";

const tablehtml = document.querySelector("#frameTable")
listImage.sort(() => Math.random() - 0.5);

listImage.forEach(img=>{
    tablehtml.insertAdjacentHTML("beforeend", 
    `<div class="w3-panel w3-center"><img src="${img}" alt="qnhu" class="w3-card-4"></div>`)
})
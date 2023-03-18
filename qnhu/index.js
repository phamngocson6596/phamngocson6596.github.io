import { listImage } from "./linkimage.js";

const tablehtml = document.querySelector("#frameTable")
listImage.sort(() => Math.random() - 0.5);

listImage.forEach(img=>{
    tablehtml.insertAdjacentHTML("beforeend", 
    `<div class="w3-display-container w3-padding-16">
        <img src="${img}" alt="qnhu" class="w3-card-4 w3-round-large" style="width:100%">
        <img src="/images/heart-svgrepo-com.svg" atl="heart" class="w3-display-bottomright w3-hover-opacity" style="width:8%; padding-bottom:16px">
    </div>`)
})
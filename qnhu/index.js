import { listImage } from "./linkimage.js";

const tablehtml = document.querySelector("#frameTable")
listImage.sort(() => Math.random() - 0.5);

listImage.forEach(img=>{
    tablehtml.insertAdjacentHTML("beforeend", 
    `<div class="w3-padding-16">
        <div class="w3-display-container qnhu">
            <img src="/images/placeholder.jpg" data-src="${img}" alt="qnhu" class="w3-card-4 w3-round-large" style="width:100%">
            <div class="w3-display-bottomright w3-display-hover w3-padding">
                <i class="far fa-heart fa-5x w3-text-red"></i>
            </div>
        </div>
    </div>`)
})

const images = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver(onIntersection);

images.forEach(image => {
    observer.observe(image);
});

function onIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.src;

        // Load the actual image
        const img = new Image();
        img.onload = () => {
            image.src = src;
            image.removeAttribute('data-src');
        };
        img.src = src;

        // Stop observing the image
        observer.unobserve(image);
        }
    });
}
  



const pics = document.querySelectorAll(".qnhu")
pics.forEach(pic=>{
    pic.addEventListener("dblclick", ()=>{
        pic.querySelector("i").classList.toggle("fas");
    })
})
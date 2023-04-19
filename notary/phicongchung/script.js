import MyElement from "../element.js";

function phicongchung(giamuaban) {
    const value = parseInt(giamuaban,10);
    if (value<50_000_000) {
        return 50_000;
    } else if (value>=50_000_000 && value<=100_000_000) {
        return 100_000;
    } else if (value>100_000_000 && value<=1_000_000_000) {
        return value*0.001;
    } else if (value>1_000_000_000 && value<=3_000_000_000) {
        let vuotqua = value-1_000_000_000;
        return 1_000_000+vuotqua*0.0006;
    } else if (value>3_000_000_000 && value<=5_000_000_000) {
        let vuotqua = value-3_000_000_000;
        return 2_200_000+vuotqua*0.0005;
    } else if (value>5_000_000_000 && value<=10_000_000_000) {
        let vuotqua = value-5_000_000_000;
        return 3_200_000+vuotqua*0.0004;
    } else if (value>10_000_000_000 && value<=100_000_000_000) {
        let vuotqua = value-10_000_000_000;
        return 5_200_000+vuotqua*0.0003;
    } else if (value>100_000_000_000) {
        let vuotqua = value-100_000_000_000;
        let phi = 32_200_000+vuotqua*0.0002;
        if (phi>70_000_000){return 70_000_000} else {return phi}
    } else {
        return "Input value out of range";
    }
}

const giatrihoso = document.getElementById("giatrihoso");
giatrihoso.addEventListener("keyup", () =>{
    document.querySelector("#phicongchung").textContent = phicongchung(giatrihoso.value);
});

customElements.define('my-element', MyElement);
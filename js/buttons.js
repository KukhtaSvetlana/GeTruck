const btn = document.getElementById("cross");
const btn1 = document.getElementById("openWindow");
const modal = document.getElementById('modalWindow');
const span = document.getElementsByClassName("infoIMG");


btn1.onclick = function () {
    modal.style.display = "block";
    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = "hidden";
    }
};

btn.onclick = function () {
    modal.style.display = "none";
    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = "visible";
    }
};


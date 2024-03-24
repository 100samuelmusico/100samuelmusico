const so = document.getElementById("so");
const si = document.getElementById("si");
const rell = document.getElementById("rell");
const juan = document.getElementById("juan");
const audio = document.querySelector("audio");
so.classList.add("si");
so.addEventListener("click",()=>{
    so.style.display="none";
    si.style.display="block";
    rell.style.display="flex";
    juan.classList.add("epico");
    audio.play();
});
document.addEventListener('mouseover',() => {
    setTimeout(() => {
        document.getElementById("titulo").style.top="100vh";
      }, 500);
      setTimeout(() => {
        document.getElementById("titulo").style.display="none";
      }, 2000);
})
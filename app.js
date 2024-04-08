document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.querySelector(".menu");
    let subMenu = menuButton.nextElementSibling;
  
    menuButton.addEventListener("click", function (event) {
      event.preventDefault(); 
      subMenu.classList.toggle("active");
    });
  });
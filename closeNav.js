window.addEventListener ('mouseup', function(event) {
  let nav = document.getElementById("nav");

  if(event.target != nav && event.target.parentNode != nav) {
    document.getElementById("menu").style.left = "-240px";
    document.getElementById("footer").style.display = "block";
    toggleMenu.style.left = "0px";
  }
});

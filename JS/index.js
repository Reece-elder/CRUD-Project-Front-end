var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.location.replace("/HTML/main-page.html");
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = "<p>" + width  + "%" + "</p>";
      }
    }
  }
}
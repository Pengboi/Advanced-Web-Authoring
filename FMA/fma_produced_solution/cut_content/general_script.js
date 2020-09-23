function openNav() {
  document.getElementById("navbar").style.width = "250px";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}

$(window).resize(function () {
  if ($(window).width() > 766) {
    document.getElementById("navbar").style.width = "100%";
  }
  else {
    document.getElementById("navbar").style.width = "0";
  }
});



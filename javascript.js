//menu
var tombolMenu = $(".tombol-menu");
var Menu = $("nav .Menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    Menu.toggle();
  });
  Menu.click(function () {
    Menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

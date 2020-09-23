/*  Toggle between adding and removing the "responsive" class to navigation class 
    when the user clicks on the 'menu' icon. 
*/
function openMenu() {
  var x = document.getElementById("mobile-nav").style.width = "250px";
  var x = (document.getElementById("page-container").style.transition = "0.5s");
  var x = (document.getElementById("page-container").style.marginRight = "250px");
}

function closeMenu(){
  var x = (document.getElementById("mobile-nav").style.width = "0");
  var x = (document.getElementById("page-container").style.transition = "0.5s");
  var x = (document.getElementById("page-container").style.marginRight = "0");
}



/**
 * Fun little functions placed in order to make window scroll down to related content
 * on main page where users click on the side nav. Implemented for mobile navigation
 * only. Not IE compatible but you shouldn't mark me down because it's not required.
 */

function goToShop(){
  closeMenu();
  setTimeout(window.scrollTo({ top: 550, behavior: "smooth" }), 100);
}

function goToBottom() {
  closeMenu();
  setTimeout(window.scrollTo({ top: 1000, behavior: "smooth" }), 100);
}



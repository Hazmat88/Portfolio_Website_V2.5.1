

main();

function main(){
  //test_js();
  menu_api();
  smooth_scrollJQ();
}

//ALL FUNCTIONS

function test_js(){
  alert("hello world");
}

// MENU _ MODULES FUNCTIONS
function menu_api(){
  function toggleClassMenu() {
      myMenu.classList.add("menu--animatable");
      if(!myMenu.classList.contains("menu--visible")) {
          myMenu.classList.add("menu--visible");
      } else {
          myMenu.classList.remove('menu--visible');
      }
  }

  function OnTransitionEnd() {
      myMenu.classList.remove("menu--animatable");
  }

  var myMenu = document.querySelector(".menu");
  var oppMenu = document.querySelector(".logo_menu");
  myMenu.addEventListener("transitionend", OnTransitionEnd, false);
  oppMenu.addEventListener("click", toggleClassMenu, false);
  myMenu.addEventListener("click", toggleClassMenu, false);
}

function smooth_scrollJQ() {
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
}

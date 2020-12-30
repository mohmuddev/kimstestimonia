// select the button and div of the overlay element
const jayBtn = document.querySelector("#jayBtn");
const JayOverlay = document.querySelector("#jayoverlay");
const JayClose = document.querySelector("#jay-close");

//Create event listner function
jayBtn.addEventListener("click", function() {
  JayOverlay.classList.add("showOverlay");
});

JayClose.addEventListener("click", function() {
  JayOverlay.classList.remove("showOverlay");
});

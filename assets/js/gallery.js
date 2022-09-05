filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("galleryColumn");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// MODALS SECTION
// Get the modal
var modal = document.getElementById("myModal");
var modals = document.getElementsByClassName("modal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var modalBtns = document.getElementsByClassName("modalButton");

// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
for(var i = 0; i < modalBtns.length; i++){
  modalBtns[i].addEventListener("click", OpenCorrespondingModal);
  modalBtns[i].classToCheck = modalBtns[i].classList[2];
}
function OpenCorrespondingModal(evt){
      Array.from(modals).forEach(mod => {
      if(mod.classList[1] == evt.currentTarget.classToCheck){
        mod.style.display = "block";
        // console.log(mod);
      }
    });
  console.log(evt.currentTarget.classToCheck);
}

// When the user clicks on <span> (x), close the modal
for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener("click", CloseAllModals);
}
function CloseAllModals(){
  Array.from(modals).forEach(mod => {
    mod.style.display = "none";
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for(var i = 0; i < modals.length; i++){
    if (event.target == modals[i]) {
      CloseAllModals();
    }
  }
} 
// Modal Two
  // Get the modal
  var modal = document.getElementById("modalTwo");

  // Get the button that opens the modal
  var btn = document.getElementById("button-two");
  
  // Get the <span> element that close-ones the modal
  var span = document.getElementsByClassName("close-two")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close-one the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close-one it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
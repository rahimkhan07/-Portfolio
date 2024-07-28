document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
  });





  //service section start =========================

  document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modalTwo");
    var btn = document.getElementById("openModalBtnTwo");
    var span = document.getElementsByClassName("closeTwo")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });



  document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modalThree");
    var btn = document.getElementById("openModalBtnThree");
    var span = document.getElementsByClassName("closeThree")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
// service secton end===========================
  

// back to top btn start===============

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// back to top btn end=================



// dark mode start===========

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// dark mode end=============


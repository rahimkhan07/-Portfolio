document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
  });

  // =====================Navbar end




  //Protfolio start=====================


  // var header = document.getElementById("buttons");
  // var btns = header.getElementsByClassName("btnn");
  // for (var i = 0; i < btns.length; i++){
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByClassName("active");
  //   current[0].className = current[0].className.replace(" active", "");
  //   this.className += " active";
  //   });
  // }
  //portfolio btns =========================

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
  

  



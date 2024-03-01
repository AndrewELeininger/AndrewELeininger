function sorry() {
    alert("sorry this page is currently under developement")
}
function photography() {
    window.location.href="photo.html";
}
function filmmaking() {
    window.location.href="film.html";
}
function animation() {
    window.location.href="3D.html";
}
function back() {
    window.location.href="index.html";
}
/*PHOTOGRAPHY*/

function scrolldown() {
    window.scrollTo(0, document.body.scrollHeight);    
}
function scrollup() {
  window.scrollTo(top);
}

function naturebtn() { 
document.querySelectorAll(".gal1").forEach(function(gal1) {
    gal1.style.display = "block";
  });
  document.querySelectorAll(".gal2").forEach(function(gal2) {
    gal2.style.display = "none";
  }); 
  document.querySelectorAll(".gal3").forEach(function(gal3) {
    gal3.style.display = "none";
  });       
}

function streetbtn() {
    document.querySelectorAll(".gal1").forEach(function(gal1) {
        gal1.style.display = "none";
      });
      document.querySelectorAll(".gal2").forEach(function(gal2) {
        gal2.style.display = "block";
      }); 
      document.querySelectorAll(".gal3").forEach(function(gal3) {
        gal3.style.display = "none";
      });  
}

function otherbtn() {
    document.querySelectorAll(".gal1").forEach(function(gal1) {
        gal1.style.display = "none";
      });
      document.querySelectorAll(".gal2").forEach(function(gal2) {
        gal2.style.display = "none";
      }); 
      document.querySelectorAll(".gal3").forEach(function(gal3) {
        gal3.style.display = "block";
      });   
}
/*FILMMAKING*/
SF1.style.display = "none";
SF2.style.display = "none";
SF3.style.display = "none";
SF4.style.display = "block";

function playSF1() {
  scrollup()
SF1.style.display = "block";
SF2.style.display = "none";
SF3.style.display = "none";
SF4.style.display = "none";
DT1.classList.add("Tdetails");
DT2.classList.remove("Tdetails");
DT3.classList.remove("Tdetails");
DT4.classList.remove("Tdetails");
} 
function playSF2() {
  scrollup()
SF1.style.display = "none";  
SF2.style.display = "block";
SF3.style.display = "none";
SF4.style.display = "none";
DT1.classList.remove("Tdetails");
DT2.classList.add("Tdetails");
DT3.classList.remove("Tdetails");
DT4.classList.remove("Tdetails");
} 
function playSF3() {
  scrollup()
SF1.style.display = "none";
SF2.style.display = "none";  
SF3.style.display = "block";
SF4.style.display = "none";
DT1.classList.remove("Tdetails");
DT2.classList.remove("Tdetails");
DT3.classList.add("Tdetails");
DT4.classList.remove("Tdetails");
} 
function playSF4() {
  scrollup()
SF1.style.display = "none";
SF2.style.display = "none";
SF3.style.display = "none";
SF4.style.display = "block";
DT1.classList.remove("Tdetails");
DT2.classList.remove("Tdetails");
DT3.classList.remove("Tdetails");
DT4.classList.add("Tdetails");
} 
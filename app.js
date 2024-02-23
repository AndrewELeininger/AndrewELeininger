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

const galleryContainers = [...document.querySelectorAll('.gallery-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

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

galleryContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
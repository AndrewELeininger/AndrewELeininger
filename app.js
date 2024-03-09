const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function scrolldown() {
    window.scrollTo(0, document.body.scrollHeight);    
}
function scrollup() {
  window.scrollTo(top);
}

function sorry() {
    alert("sorry this page is currently under developement")
}
function photography() {
  document.getElementById('phoGal').scrollIntoView();
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
const SP = document.getElementById('SP');

function changeText(newText) {
  document.getElementById('text').innerHTML = newText;
}
function play(Number) {
  scrollup();
  const summaries = [  
  "The sole survivor of a shipwreck has been stranded on a strange, unknown island where the only food he has to eat is small pink flowers, and the only friend he has is a magical floating fish. Every day as the sun begins to set, he must hide himself, and the fish, to avoid the dangers of the night, but he can't hide forever and soon he will have to face his fears and risk everything for a chance of freedom.<b><br><br>Time Approx. 7 Miuutes<br><br>Directed by Andrew Leinger<br> ToastMan2020<b>",
  "Lord Alister and his ragtag band of rebellious knights have received word that their old friend, Lord Jerome, will be passing through the outer borders, carrying a very valuable piece of cargo. Unable to pass up such an opportunity, they devise a plan to intercept him, but it may not be as simple as they hope.<b><br><br>Time Approx. 7 Minutes<br><br>Directed by Andrew Leinger<br>Starring Peter Leininger<br> ToastMan2022<b>",
  "Deep in the forests, high in the hills, in legends lost to time, there lives a creature, half man and half bird. Of his strength all are afraid, all but one, one man, one king.<b><br><br>Time Approx. 3 Minutes<br><br>Directed by Andrew Leinger<br> ToastMan2023<b>",
  "After years living inside the walls of a shady institution, Patient Zero has formed a plan and is getting ready to act on it. This plan may prove perilous, but no risk is too great for the chance of escape.<b><br><br>Time Approx. 4 Minutes<br><br>Directed by Andrew Leinger<br>Music by Jacob Ryman<br> ToastMan2024<b>",
  ];
  const selectedSummary = summaries[Number - 1];
  changeText(selectedSummary);
  let stillNumber = [Number];
  var stillUrl = 'still' + stillNumber + '.jpg';
  SP.style.backgroundImage = "url('" + stillUrl + "')";
  const films = ['SF1', 'SF2', 'SF3', 'SF4'];
  const posters = ['FP1', 'FP2', 'FP3', 'FP4'];
  const targetClass = "Tposter";

 films.forEach((film, index) => {
    const display = film === films[Number - 1] ? 'block' : 'none';
    document.getElementById(film).style.display = display;
  });

  posters.forEach((poster, index) => {
    const classAction = index === Number - 1 ? 'add' : 'remove';
    if (classAction === 'add'){
      document.getElementById(poster).classList.add("Tposter");
    } else if (classAction === 'remove') {
      document.getElementById(poster).classList.remove("Tposter"); 
    }
  }); 
}
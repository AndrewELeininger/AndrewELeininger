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

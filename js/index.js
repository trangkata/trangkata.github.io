let images = document.querySelectorAll("div.collection-silde img");
let prev = document.querySelector("button.slick-prev");
let next = document.querySelector("button.slick-next");
let imgIndex = 0;

function sildeImage(isNext) {
    images[imgIndex].style.display = "none";
    if (isNext) {
        imgIndex ++;
    } else {
        imgIndex --;
    }
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    } else if (imgIndex >= images.length) {
        imgIndex = 0;
    }

    images[imgIndex].style.display = "block";
}

prev.addEventListener("click", function() {
    sildeImage(false);
});

next.addEventListener("click", function() {
    sildeImage(true);
});

let items = document.querySelectorAll('.paralax-item');
document.addEventListener("scroll", function(event) {
    items.forEach(item => {
        if((item.offsetTop - window.scrollY) < -400){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
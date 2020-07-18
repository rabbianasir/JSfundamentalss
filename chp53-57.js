var modal = document.getElementById('modal');

modal.classList.add('modal-open')
modal.classList.remove('modal-close');

function img() {
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.png"];

    for (var i = 0; i < images.length; i++) {
        document.getElementById("modal-img").innerHTML = images[i].src;
    }
}

img();

function showImages() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.png"];
    const modalElement = document.getElementById('modal');
 
    for (let i = 0; i < images.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.classList.add('modal-content');
        modalElement.appendChild(imageElement);
    }
}
 
showImages();
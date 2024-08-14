// Get the modal
var modal = document.getElementById('modal');

// Get the modal image element
var modalImg = document.getElementById('modal-img');

// Get all images with the class "image-item"
var images = document.getElementsByClassName('image-item');

// Loop through the images and add click event listeners
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = 'flex';
        modalImg.src = this.src;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = 'none';
}

// Close the modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

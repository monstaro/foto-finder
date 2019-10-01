var addButton = document.querySelector("#addButton");
var photoArray = [];

addButton.addEventListener("click", instantiatePhoto)

function instantiatePhoto() {
    var photoTitle = document.querySelector("#photoTitle").value;
    var photoCaption = document.querySelector("#photoCaption").value;
    // create new Photo instance
    // pass photoTitle and photoCaption and file
    // create variable to store information of instance
    var newPhoto = new Photo(photoTitle, photoCaption, 'www.google.com')
    photoArray.push(newPhoto)
}
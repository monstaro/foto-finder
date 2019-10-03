var addButton = document.querySelector("#addButton");
var photoArray = []

addButton.addEventListener("click", instantiatePhoto)



function instantiatePhoto() {
    console.log("test")
    var photoTitle = document.querySelector("#photoTitle").value;
    var photoCaption = document.querySelector("#photoCaption").value;
    var newPhoto = new Photo(photoTitle, photoCaption, 'https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png')
    photoArray.push(newPhoto)
    newPhoto.saveToStorage()
}











//click button,
//instatiate photo,
//pass new photo, save to storage
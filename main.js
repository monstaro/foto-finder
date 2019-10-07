var addButton = document.querySelector("#addButton");
var bottomContainer = document.querySelector(".main-bottom");
// var deleteButton = document.querySelector("#trash");
// var photoArray = []
var faveButton = document.querySelector(".fave");

bottomContainer.addEventListener('click', favePhoto);
addButton.addEventListener('click', newPhoto);
bottomContainer.addEventListener('click', removePhoto);


// addButton.addEventListener('click', instantiatePhoto);
// window.addEventListener('load', parseObj(event));


// function instantiatePhoto() {
//     console.log('hello')
//     var photoTitle = document.querySelector("#photoTitle").value;
//     var photoCaption = document.querySelector("#photoCaption").value;
//     var newPhoto = new Photo(photoTitle, photoCaption, 'https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png');
//     newPhoto.saveToStorage();
//     photoArray.push(newPhoto);
// }

// function parseObj(event) {
//     var parsedObj = JSON.parse(localStorage.getItem('storeObj'))
//     console.log('anObject');
//     localArray.push(anObject);
//     var photo = new Photo(anObject.title, anObject.title, anObject.file);
// }

//when you get items
//loop over and parse
//reinstantiate


function newPhoto() {
    console.log('test')
    var photoTitle = document.querySelector("#photoTitle").value;
    var photoCaption = document.querySelector("#photoCaption").value;
    var photoArea = document.querySelector('.main-bottom');
    photoArea.insertAdjacentHTML('beforeend',
        `<div class="main-bottom-card">
        <p class="bottom-card-title">
            ${photoTitle}
        </p>
        <img src="images/sample-image.png" class="card-image">
        <p class="bottom-card-desc">${photoCaption}</p>
        <section class="card-control-container">
        <img src="images/delete.svg" class="bottom-card-icon trash" id="trash">
        <img src="" class="bottom-card-icon fave">
        </section>
        </div>`)
}

function removePhoto(event) {
    if (event.target.classList.contains('trash')) {
        event.target.parentNode.parentNode.remove();
    }
}


function favePhoto(event) {
    if (event.target.classList.contains('fave')) {
        event.target.classList.toggle('fave-clicked')
    }

}





//click button,
//instatiate photo,
//pass new photo, save to storage


// on page load, get items from local storage
// parse items back into local storage
// turns into an array of objects
//  loop over every item in array
// push into local array
// assign local array to global array
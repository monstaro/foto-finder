var addButton = document.querySelector("#addButton");
var bottomContainer = document.querySelector(".main-bottom");
var faveButton = document.querySelector(".fave");

bottomContainer.addEventListener('click', favePhoto);
addButton.addEventListener('click', newPhoto);
bottomContainer.addEventListener('click', removePhoto);

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
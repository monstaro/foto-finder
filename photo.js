class Photo {
    constructor(title, caption, file) {
        this.id = Date.now();
        this.title = title;
        this.caption = caption;
        this.file = file;
    }
    saveToStorage() {
        localStorage.setItem('storeObj', JSON.stringify(this))
    }
}





// deleteFromStorage() {

// }

// updatePhoto() {

// }
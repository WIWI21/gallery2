// Event for mouseover
function upDate(evt) {
    const previewPic = document.getElementById("image");
    previewPic.innerHTML = `<img src="${evt.target.src}" alt="${evt.target.alt}" />`;
    previewPic.style.backgroundImage = `url('${evt.target.src}')`;
    console.log("Mouse over event triggered.");
}

// Event for mouseleave
function unDo() {
    const previewPic = document.getElementById("image");
    previewPic.innerHTML = "Hover over an image below to display here.";
    previewPic.style.backgroundImage = `url('')`;
    console.log("Mouse leave event triggered.");
}

// Event for focus (keyboard)
function onFocus(evt) {
    const focusPic = document.getElementById("image");
    focusPic.innerHTML = `<img src="${evt.target.querySelector('img').src}" alt="${evt.target.querySelector('img').alt}" />`;
    focusPic.style.backgroundImage = `url('${evt.target.querySelector('img').src}')`;
    console.log("Focus event triggered.");
}

// Event for blur (keyboard)
function onBlur(evt) {
    const focusPic = document.getElementById("image");
    focusPic.innerHTML = "Hover over an image below to display here.";
    focusPic.style.backgroundImage = `url('')`;
    console.log("Blur event triggered.");
}

// Add event listeners to the images
function addEventListeners() {
    const images = document.querySelectorAll('figure');
    
    images.forEach(image => {
        image.addEventListener('mouseover', upDate);
        image.addEventListener('mouseleave', unDo);
        image.addEventListener('focus', onFocus, true);  // true for capturing phase
        image.addEventListener('blur', onBlur, true);
    });
}

// Call function to add event listeners when the page loads
window.onload = addEventListeners;
function addTabIndex() {
    const images = document.querySelectorAll('figure');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
    console.log("Tabindex attributes added.");
}


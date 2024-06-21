var ObjectsElement;

document.addEventListener("DOMContentLoaded", function() {
    ObjectsElement = document.querySelector('.Objects');
    ObjectsElement.style.display = "none";  
});

function startGame() {
    var Title = document.querySelector('.Title');
    Title.style.display = 'none';
    ObjectsElement.style.display = 'block';
}

function matrixBackground() {

}

document.addEventListener("DOMContentLoaded", function() {
    var character = document.querySelector('.player');

    character.style.top = '60%';
    character.style.left = '50%';
    var speed = 1;

    document.body.addEventListener("keydown", (ev) => {
        if (ev.key === "w") {
            character.style.top = (parseFloat(character.style.top) || 0) - speed + '%';
        }
        if (ev.key === "s") {
            character.style.top = (parseFloat(character.style.top) || 0) + speed + '%';
        }
        if (ev.key === "a") {
            character.style.left = (parseFloat(character.style.left) || 0) - speed + '%';
        }
        if (ev.key === "d") {
            character.style.left = (parseFloat(character.style.left) || 0) + speed + '%';
        }
    });

});
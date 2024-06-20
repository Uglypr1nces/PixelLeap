document.addEventListener("DOMContentLoaded", function() {
    var platform1 = document.querySelector('.Platform1');
    var platform2 = document.querySelector('.Platform2');
    var platform3 = document.querySelector('.Platform3');

    var speed = 50;

    platform1.style.left = getRandomNumber(0, 25) + '%';
    platform2.style.left = getRandomNumber(35, 60) + '%';
    platform3.style.left = getRandomNumber(70, 100) + '%';

    function movePlatforms() {
        platform1.style.top = (parseFloat(platform1.style.top) || 0) + speed + '%';
        platform2.style.top = (parseFloat(platform2.style.top) || 0) + speed + '%';
        platform3.style.top = (parseFloat(platform3.style.top) || 0) + speed + '%';
        if (platform1.style.top === '100%') {
            platform1.style.top = '0%';
        }
        if (platform2.style.top === '100%') {
            platform2.style.top = '0%';
        }
        if (platform3.style.top === '100%') {
            platform3.style.top = '0%';
        } 

        setTimeout(movePlatforms, 1000); 
    }

    document.addEventListener("DOMContentLoaded", function() {
        var platform1 = document.querySelector('.Platform1');
        var platform2 = document.querySelector('.Platform2');
        var platform3 = document.querySelector('.Platform3');

        var speed = 1;

        platform1.style.left = '50%';
        platform1.style.top = '50%';

        movePlatforms(); // Start the loop
    });

});

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

document.addEventListener("DOMContentLoaded", function() {
    var platform1 = document.querySelector('.Platform1');
    var platform2 = document.querySelector('.Platform2');
    var platform3 = document.querySelector('.Platform3');

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function movePlatforms() {
        platform1.style.top = getRandomArbitrary(20, 100) + '%';
        platform2.style.top = getRandomArbitrary(20, 100) + '%';
        platform3.style.top = getRandomArbitrary(20, 100) + '%';

        var intervalId = setInterval(function() {
            platform1.style.left = (parseFloat(platform1.style.left) || 0) - 0.5 + '%'; 
            platform2.style.left = (parseFloat(platform2.style.left) || 0) - 0.5 + '%';
            platform3.style.left = (parseFloat(platform3.style.left) || 0) - 0.5 + '%';

            if (parseFloat(platform1.style.left) <= -100) {
                platform1.style.left = '100%';
            }
            if (parseFloat(platform2.style.left) <= -100) {
                platform2.style.left = '100%';
            }
            if (parseFloat(platform3.style.left) <= -100) {
                platform3.style.left = '100%';
            }
        }, 100);
    }

    movePlatforms();
    setInterval(movePlatforms, 10000);  // Adjust the timing for a better animation effect
});

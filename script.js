window.onload = function() {
    setTimeout(function() {
        document.getElementById('greeting').style.display = "none";
        document.getElementById('birthdayButton').style.display = "block";
    }, 8000);
};

function moveButton() {
    let button = document.getElementById('birthdayButton');

    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function generateRandomHex () {
    let color = '#';
    while (color.length < 7) {
        color += (Math.round(Math.random() * 15)).toString(16)
    }
    document.body.style.background = color;
    document.getElementById('number').innerHTML = color;
}

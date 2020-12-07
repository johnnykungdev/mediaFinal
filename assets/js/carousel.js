const backgrounds = ["landingbg1.jpg", "landingbg2.jpg", "landingbg3.jpg"]
const index = true;

// Added a really simplistic "carousel" that changes the landing page background on index.html.
window.addEventListener('load', () => {
    setInterval(() => {
        setTimeout(() => {
            document.getElementById("background").style.backgroundImage = "url('./assets/images/landingbg1.jpg')";
        }, 0)
        setTimeout(() => {
            document.getElementById("background").style.backgroundImage = "url('./assets/images/landingbg2.jpg')";
        }, 5000)
        setTimeout(() => {
            document.getElementById("background").style.backgroundImage = "url('./assets/images/landingbg3.jpg')";
        }, 10000)
        
    }, 15000)
});
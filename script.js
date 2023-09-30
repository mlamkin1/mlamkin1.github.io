document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const maskedText = document.getElementById('masked-text');
        maskedText.style.animationPlayState = "running";
        
        maskedText.addEventListener("animationend", function() {
            document.querySelector('.loader-wrapper').style.display = 'none';
        });
    }, 500);  // delay before starting, adjust as needed
});

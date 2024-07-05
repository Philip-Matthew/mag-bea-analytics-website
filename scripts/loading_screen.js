window.addEventListener('load', function () {
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 1000); // Match the timeout with the transition duration
});

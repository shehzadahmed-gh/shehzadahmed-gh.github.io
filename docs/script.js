document.getElementById("yes-button").addEventListener("click", function() {
    for (let i = 0; i < 10; i++) { // Number of hearts
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️"; // Heart symbol
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heart.style.animationDelay = Math.random() * 2 + "s"; // Random delay for staggered effect
        document.body.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }
});

document.getElementById("no-button").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Wrong answer!";
});

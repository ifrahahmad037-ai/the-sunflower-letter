function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌼";

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (8 + Math.random() * 6) + "s";
    petal.style.opacity = 0.4 + Math.random() * 0.6;
    petal.style.fontSize = (18 + Math.random() * 14) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 14000);

}

setInterval(createPetal, 700);

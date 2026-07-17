const envelope = document.getElementById("envelope");
const intro = document.querySelector(".intro");
const letter = document.getElementById("letterSection");
const ending = document.getElementById("ending");

envelope.addEventListener("click", () => {

    envelope.style.transform = "scale(0.92)";
    envelope.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        letter.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});

window.addEventListener("scroll", () => {

    const bottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        150;

    if (window.scrollY >= bottom) {
        ending.classList.remove("hidden");
    }

});

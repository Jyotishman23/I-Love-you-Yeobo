/* ================================= */
/* LOADER */
/* ================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1500);
        }

    }, 2500);

});

/* ================================= */
/* MUSIC */
/* ================================= */

const bgMusic =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

const beginBtn =
    document.getElementById("beginBtn");

if (beginBtn) {

    beginBtn.addEventListener("click", () => {

        document
            .getElementById("story")
            .scrollIntoView({
                behavior: "smooth"
            });

        if (bgMusic) {

            bgMusic.play()
                .catch(() => { });

        }

    });

}

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!bgMusic) return;

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.innerHTML =
                "🎵 Playing ❤️";

        }

        else {

            bgMusic.pause();

            musicBtn.innerHTML =
                "🎵 Our Song ❤️";

        }

    });

}

/* ================================= */
/* SCROLL REVEAL */
/* ================================= */

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );

hiddenElements.forEach(el => {

    observer.observe(el);

});

/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 1200);

/* ================================= */
/* HEART CURSOR TRAIL */
/* ================================= */

document.addEventListener(
    "mousemove",
    (e) => {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            e.clientX + "px";

        heart.style.top =
            e.clientY + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            "12px";

        heart.style.opacity =
            ".8";

        heart.style.zIndex =
            "9999";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 800);

    }
);

/* ================================= */
/* MEMORY SLIDER */
/* ================================= */

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

    if (!slides.length) return;

    slides.forEach(slide => {

        slide.classList.remove(
            "active"
        );

    });

    currentSlide++;

    if (
        currentSlide >= slides.length
    ) {

        currentSlide = 0;

    }

    slides[currentSlide]
        .classList.add("active");

}

setInterval(showSlide, 4500);

/* ================================= */
/* LOVE LETTER TYPEWRITER */
/* ================================= */

const typingText =
    document.getElementById(
        "typingText"
    );

const letter = `

Dear Mou ❤️

Sometimes I wonder how
one random Snapchat message

became the most beautiful
part of my life.

You became my peace.

My happiness.

My comfort.

My favourite person.

If I had one wish...

I'd choose you

again...

and again...

and forever.

Thank you for every smile.

Thank you for every memory.

Thank you for being you.

Forever Yours ❤️

Your Yeobo

`;

let letterIndex = 0;

function typeLetter() {

    if (!typingText) return;

    if (
        letterIndex <
        letter.length
    ) {

        typingText.innerHTML +=
            letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(
            typeLetter,
            45
        );

    }

}

window.addEventListener(
    "load",
    () => {

        setTimeout(
            typeLetter,
            2500
        );

    }
);

/* ================================= */
/* PROPOSAL SCENE */
/* ================================= */

const proposalLines =
    document.querySelectorAll(
        ".proposal-line"
    );

function startProposalScene() {

    proposalLines.forEach(
        (line, index) => {

            setTimeout(() => {

                line.classList.add(
                    "show-line"
                );

            }, index * 3000);

        }
    );

}

window.addEventListener(
    "load",
    () => {

        setTimeout(
            startProposalScene,
            5000
        );

    }
);

/* ================================= */
/* ROSE PETALS */
/* ================================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position =
        "fixed";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top = "-30px";

    petal.style.fontSize =
        (15 + Math.random() * 20)
        + "px";

    petal.style.zIndex =
        "9999";

    petal.style.transition =
        "transform 8s linear, opacity 8s";

    document.body.appendChild(
        petal
    );

    setTimeout(() => {

        petal.style.transform =
            `translateY(120vh)
             rotate(720deg)`;

        petal.style.opacity = 0;

    }, 100);

    setTimeout(() => {

        petal.remove();

    }, 8000);

}

/* ================================= */
/* CONFETTI */
/* ================================= */

function createConfetti() {

    for (
        let i = 0;
        i < 250;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 +
            "vw";

        confetti.style.top =
            "-20px";

        confetti.style.width =
            "10px";

        confetti.style.height =
            "10px";

        confetti.style.borderRadius =
            "50%";

        confetti.style.zIndex =
            "9999";

        confetti.style.background =
            `hsl(
            ${Math.random() * 360},
            100%,
            70%
            )`;

        confetti.style.transition =
            "transform 5s linear, opacity 5s";

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.style.transform =
                `translateY(120vh)
                translateX(${
                    (
                        Math.random() - 0.5
                    ) * 250
                }px)
                rotate(720deg)`;

            confetti.style.opacity =
                0;

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

/* ================================= */
/* YES BUTTON */
/* ================================= */

const yesBtn =
    document.getElementById(
        "yesBtn"
    );

if (yesBtn) {

    yesBtn.addEventListener(
        "click",
        () => {

            createConfetti();

            setInterval(
                createPetal,
                500
            );

            for (
                let i = 0;
                i < 80;
                i++
            ) {

                setTimeout(
                    createHeart,
                    i * 100
                );

            }

            setTimeout(() => {

                const finalScreen =
                    document.getElementById(
                        "finalScreen"
                    );

                if (finalScreen) {

                    finalScreen
                        .scrollIntoView({
                            behavior:
                                "smooth"
                        });

                }

            }, 1500);

        }
    );

}

/* ================================= */
/* FOREVER PAGE REVEAL */
/* ================================= */

const foreverPage =
    document.querySelector(
        ".forever-page"
    );

if (foreverPage) {

    observer.observe(
        foreverPage
    );

}
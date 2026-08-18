/* =====================================
   🎀 EASY CUSTOMIZATION
===================================== */

/*
   CHANGE THIS NAME
*/

const birthdayPerson = "Birthday Star";


/*
   CHANGE THIS MESSAGE
*/

const birthdayMessage = `
Happy Birthday! 💗

I hope your special day is filled with
laughter, happiness, cake and amazing
memories.

You deserve so many wonderful things.

May this next year bring you new
adventures, exciting moments and
lots of reasons to smile! ✨

Never forget how awesome you are! 🌸

Have the BEST birthday ever! 🎂🎉
`;


/* =====================================
   PAGE SWITCHING
===================================== */

function showScreen(id) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList.add("active");

}


/* =====================================
   START
===================================== */

function startSurprise() {

    showScreen("envelope-screen");

    createConfetti(30);

}


/* =====================================
   ENVELOPE
===================================== */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(() => {

        showScreen("letter-screen");

        startTyping();

    }, 900);

}


/* =====================================
   TYPING EFFECT
===================================== */

let typingStarted = false;

function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    const text =
        birthdayMessage.trim();

    const element =
        document.getElementById("typing-text");

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(type, 25);

        }

    }

    type();

}


/* =====================================
   CAKE
===================================== */

function showCake() {

    showScreen("cake-screen");

}


function blowCandles() {

    const flames =
        document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.classList.add("out");

    });

    createConfetti(80);

    setTimeout(() => {

        showScreen("present-screen");

    }, 1800);

}


/* =====================================
   PRESENT
===================================== */

function openPresent() {

    createConfetti(180);

    setTimeout(() => {

        showScreen("final-screen");

    }, 800);

}


/* =====================================
   PARTY
===================================== */

function party() {

    createConfetti(250);

    showPopup(
        "🎉",
        "HAPPY BIRTHDAY!!!",
        "Today is officially a day for cake, happiness and absolutely NO boring stuff! 🥳💗"
    );

}


/* =====================================
   WISHES
===================================== */

const wishes = [

    "✨ May your biggest dreams come true!",

    "🌸 May this be your happiest year yet!",

    "💗 May you always have reasons to smile!",

    "⭐ May something amazing happen to you soon!",

    "🎂 May you always have enough cake!",

    "🦋 May this year be full of unforgettable adventures!",

    "🎀 May you receive lots of love and happiness!",

    "🌈 May every new day bring you something wonderful!"

];


function makeWish() {

    const random =
        wishes[
            Math.floor(
                Math.random() *
                wishes.length
            )
        ];

    document.getElementById("wish")
        .textContent = random;

    createConfetti(60);

}


/* =====================================
   POPUP
===================================== */

function showPopup(
    emoji,
    title,
    message
) {

    document.getElementById("popup-emoji")
        .textContent = emoji;

    document.getElementById("popup-title")
        .textContent = title;

    document.getElementById("popup-message")
        .textContent = message;

    document
        .getElementById("popup")
        .classList.add("show");

}


function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );

    const colors = [

        "#ff65aa",
        "#a66ee8",
        "#ffd45c",
        "#67d9ff",
        "#72df9a",
        "#ff8d8d",
        "#ffffff"

    ];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.animationDuration =
            (2 + Math.random() * 3) +
            "s";

        piece.style.animationDelay =
            Math.random() * 0.5 +
            "s";

        piece.style.width =
            (6 + Math.random() * 8) +
            "px";

        piece.style.height =
            (10 + Math.random() * 15) +
            "px";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =====================================
   FLOATING HEARTS / STARS
===================================== */

const floatingItems = [

    "💗",
    "💕",
    "💖",
    "💜",
    "✨",
    "⭐",
    "🌸",
    "🎀",
    "🦋"

];


function createFloatingItem() {

    const item =
        document.createElement("div");

    item.className =
        "floating";

    item.textContent =
        floatingItems[
            Math.floor(
                Math.random() *
                floatingItems.length
            )
        ];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        (15 + Math.random() * 25) +
        "px";

    item.style.animationDuration =
        (7 + Math.random() * 8) +
        "s";

    document
        .getElementById("floating-items")
        .appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 16000);

}


setInterval(
    createFloatingItem,
    500
);


/* =====================================
   MOUSE / TOUCH SPARKLES
===================================== */

document.addEventListener(
    "mousemove",
    createCursorSparkle
);

document.addEventListener(
    "touchmove",
    function(event) {

        if (
            event.touches &&
            event.touches.length > 0
        ) {

            createSmallSparkle(
                event.touches[0].clientX,
                event.touches[0].clientY
            );

        }

    }
);


function createCursorSparkle(event) {

    if (Math.random() > 0.25) return;

    createSmallSparkle(
        event.clientX,
        event.clientY
    );

}


function createSmallSparkle(x, y) {

    const sparkle =
        document.createElement("div");

    sparkle.textContent =
        "✨";

    sparkle.style.position =
        "fixed";

    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";

    sparkle.style.pointerEvents =
        "none";

    sparkle.style.zIndex =
        "3000";

    sparkle.style.fontSize =
        "12px";

    sparkle.style.transition =
        "all 0.7s ease";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.transform =
            "translateY(-25px) scale(0)";

        sparkle.style.opacity =
            "0";

    }, 20);

    setTimeout(() => {

        sparkle.remove();

    }, 800);

}


/* =====================================
   SET NAME
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        document.getElementById(
            "person-name"
        ).textContent =
            birthdayPerson;

        document.getElementById(
            "final-name"
        ).textContent =
            birthdayPerson;

    }
);


/* =====================================
   LITTLE STARTUP EFFECT
===================================== */

setTimeout(() => {

    createConfetti(25);

}, 1000);

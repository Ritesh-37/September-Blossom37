/* =========================================================
   🎀 BIRTHDAY WEBSITE CUSTOMIZATION
========================================================= */


/*
   =========================================================
   CHANGE THE NAME HERE
   =========================================================
*/

const birthdayPerson = "Birthday Star";



/*
   =========================================================
   YOUR 10 SURPRISES
   =========================================================

   You can change:

   emoji
   title
   question
   answer
   message

   IMPORTANT:

   The answer is NOT case-sensitive.

   So:

   "Paris"

   "paris"

   "PARIS"

   will all work.

*/


const surprises = [

    /* =====================================================
       SURPRISE 1
    ===================================================== */

    {

        emoji: "🎀",

        title: "A Little Memory 💗",

        question:
            "What is the first letter of your name?",

        answer:
            "a",

        message:
            "You found the first surprise! 💗<br><br>There are still 9 more hiding around this little birthday world... 👀"

    },


    /* =====================================================
       SURPRISE 2
    ===================================================== */

    {

        emoji: "💌",

        title: "A Secret Message",

        question:
            "What do you get when you mix cake + candles + presents?",

        answer:
            "birthday",

        message:
            "Happy Birthday to one of the most amazing people ever! 🥹💗<br><br>I hope you know how special you are."

    },


    /* =====================================================
       SURPRISE 3
    ===================================================== */

    {

        emoji: "🌸",

        title: "Cute Photo",

        question:
            "What has a face and two hands but cannot smile?",

        answer:
            "clock",

        message:
            `
            Look what I found! 🌸

            <img
                src="media/photo1.jpg"
                alt="A special birthday photo"
            >

            This photo is officially part of the birthday museum now. 😂💗
            `

    },


    /* =====================================================
       SURPRISE 4
    ===================================================== */

    {

        emoji: "🎥",

        title: "A Secret Video",

        question:
            "What goes up but never comes down?",

        answer:
            "age",

        message:
            `
            🎥 You unlocked a secret video!

            <video
                controls
                playsinline
            >

                <source
                    src="media/video1.mp4"
                    type="video/mp4"
                >

                Your browser cannot play this video.

            </video>

            Hope you like it! 💗
            `

    },


    /* =====================================================
       SURPRISE 5
    ===================================================== */

    {

        emoji: "⭐",

        title: "A Birthday Wish",

        question:
            "I shine at night and disappear in the morning. What am I?",

        answer:
            "star",

        message:
            "🌟 My wish for you:<br><br>May you have a year filled with happiness, amazing memories, laughter and dreams coming true.<br><br>And obviously... LOTS OF CAKE. 🎂"

    },


    /* =====================================================
       SURPRISE 6
    ===================================================== */

    {

        emoji: "🦋",

        title: "Something Special",

        question:
            "What has many keys but cannot open a door?",

        answer:
            "piano",

        message:
            "🦋 You found another one!<br><br>Never stop being curious, weird, funny and completely yourself. That's what makes you awesome. 💗"

    },


    /* =====================================================
       SURPRISE 7
    ===================================================== */

    {

        emoji: "🎂",

        title: "Cake Time",

        question:
            "What food is usually the most important part of a birthday?",

        answer:
            "cake",

        message:
            `
            <h3>🎂 IMPORTANT ANNOUNCEMENT 🎂</h3>

            <p>
            This website officially declares that
            birthday cake has zero calories.
            </p>

            <p>
            Yes, I made the rules. 😂💗
            </p>
            `

    },


    /* =====================================================
       SURPRISE 8
    ===================================================== */

    {

        emoji: "💖",

        title: "A Tiny Compliment",

        question:
            "What is the opposite of sad?",

        answer:
            "happy",

        message:
            `
            💖 You are genuinely awesome.

            <br><br>

            And yes, this is your official reminder
            that you are loved, appreciated and
            incredibly special.

            <br><br>

            Never forget that. 🌸
            `

    },


    /* =====================================================
       SURPRISE 9
    ===================================================== */

    {

        emoji: "🌈",

        title: "The Rainbow Surprise",

        question:
            "What comes after the letter A?",

        answer:
            "b",

        message:
            `
            🌈 You made it here!

            <br><br>

            Every little surprise was just an excuse
            to remind you that someone thinks you're
            pretty amazing.

            <br><br>

            💗 Happy Birthday!
            `

    },


    /* =====================================================
       SURPRISE 10
    ===================================================== */

    {

        emoji: "🔮",

        title: "The Final Secret",

        question:
            "What do you say when someone has a birthday?",

        answer:
            "happy birthday",

        message:
            `
            🔮 THE FINAL SECRET!

            <br><br>

            You unlocked everything.

            <br><br>

            But there is actually one more surprise...

            <br><br>

            🎉 LOOK AT THE CENTER OF THE SCREEN!
            `

    }

];



/* =========================================================
   VARIABLES
========================================================= */

let currentChallenge = 0;

let unlocked = [];



/* =========================================================
   START GAME
========================================================= */

function startGame() {

    showScreen("game-screen");

    createConfetti(50);

    updateProgress();

}



/* =========================================================
   SCREEN SWITCHING
========================================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    document
        .getElementById(id)
        .classList.add("active");

}



/* =========================================================
   OPEN A CHALLENGE
========================================================= */

function openChallenge(index) {

    currentChallenge = index;

    const challenge =
        surprises[index];


    /*
       Already unlocked?
    */

    if (unlocked[index]) {

        showSurprise(index);

        return;

    }


    /*
       Put challenge information on screen
    */

    document.getElementById(
        "challenge-emoji"
    ).textContent =
        challenge.emoji;


    document.getElementById(
        "challenge-title"
    ).textContent =
        challenge.title;


    document.getElementById(
        "challenge-question"
    ).textContent =
        challenge.question;


    document.getElementById(
        "wrong-answer"
    ).textContent =
        "";


    const input =
        document.getElementById(
            "answer-input"
        );


    input.value = "";


    document
        .getElementById("challenge-popup")
        .classList.add("show");


    setTimeout(() => {

        input.focus();

    }, 200);

}



/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer() {

    const input =
        document.getElementById(
            "answer-input"
        );


    const userAnswer =
        input.value
            .trim()
            .toLowerCase();


    const correctAnswer =
        surprises[currentChallenge]
            .answer
            .trim()
            .toLowerCase();


    const error =
        document.getElementById(
            "wrong-answer"
        );


    if (userAnswer === correctAnswer) {

        /*
           Correct!
        */

        unlocked[currentChallenge] =
            true;


        error.textContent =
            "🎉 Correct!";


        createConfetti(60);


        updateProgress();


        setTimeout(() => {

            closeChallenge();

            showSurprise(
                currentChallenge
            );

        }, 600);


    }

    else {

        /*
           Wrong answer
        */

        error.textContent =
            "❌ Nope! Try again... 💗";


        input.classList.remove(
            "shake"
        );


        void input.offsetWidth;


        input.classList.add(
            "shake"
        );

    }

}



/* =========================================================
   ENTER KEY
========================================================= */

function answerWithEnter(event) {

    if (
        event.key === "Enter"
    ) {

        checkAnswer();

    }

}



/* =========================================================
   CLOSE CHALLENGE
========================================================= */

function closeChallenge() {

    document
        .getElementById(
            "challenge-popup"
        )
        .classList.remove("show");

}



/* =========================================================
   SHOW SURPRISE
========================================================= */

function showSurprise(index) {

    const surprise =
        surprises[index];


    document.getElementById(
        "surprise-emoji"
    ).textContent =
        surprise.emoji;


    document.getElementById(
        "surprise-title"
    ).textContent =
        surprise.title;


    document.getElementById(
        "surprise-content"
    ).innerHTML =
        surprise.message;


    document
        .getElementById(
            "surprise-popup"
        )
        .classList.add("show");


    createConfetti(35);


    /*
       If all 10 are unlocked,
       prepare the final celebration.
    */

    if (
        unlocked.filter(Boolean).length ===
        surprises.length
    ) {

        setTimeout(() => {

            closeSurprise();

            showFinal();

        }, 1200);

    }

}



/* =========================================================
   CLOSE SURPRISE
========================================================= */

function closeSurprise() {

    document
        .getElementById(
            "surprise-popup"
        )
        .classList.remove("show");

}



/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const amount =
        unlocked.filter(Boolean).length;


    document.getElementById(
        "progress-count"
    ).textContent =
        amount;


    document.getElementById(
        "game-hint"
    ).textContent =

        amount === 0

            ? "🔐 Everything is locked..."

            : amount < 10

                ? `✨ ${amount} surprise${amount === 1 ? "" : "s"} unlocked!`

                : "🎉 EVERYTHING UNLOCKED!";

}



/* =========================================================
   FINAL CELEBRATION
========================================================= */

function showFinal() {

    document.getElementById(
        "final-name"
    ).textContent =
        birthdayPerson;


    document
        .getElementById(
            "final-popup"
        )
        .classList.add("show");


    createConfetti(200);

}



/* =========================================================
   MASSIVE PARTY
========================================================= */

function massiveParty() {

    createConfetti(500);


    document
        .getElementById(
            "final-popup"
        )
        .classList.remove("show");


    setTimeout(() => {

        alert(
            "🎉 HAPPY BIRTHDAY!!! 🎂💗🎊"
        );

    }, 1000);

}



/* =========================================================
   INSTRUCTIONS
========================================================= */

function showInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.add("show");

}


function closeInstructions() {

    document
        .getElementById(
            "instructions-popup"
        )
        .classList.remove("show");

}



/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const colors = [

        "#ff65aa",
        "#a66ee8",
        "#ffd45c",
        "#65d9ff",
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
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            (
                2 +
                Math.random() * 4
            ) + "s";


        piece.style.animationDelay =
            (
                Math.random() * 0.5
            ) + "s";


        piece.style.width =
            (
                6 +
                Math.random() * 8
            ) + "px";


        piece.style.height =
            (
                10 +
                Math.random() * 15
            ) + "px";


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}



/* =========================================================
   FLOATING HEARTS / STARS
========================================================= */

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
        document.createElement(
            "div"
        );


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
        Math.random() * 100 +
        "vw";


    item.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) + "px";


    item.style.animationDuration =
        (
            7 +
            Math.random() * 8
        ) + "s";


    document
        .getElementById(
            "floating-items"
        )
        .appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 16000);

}


setInterval(
    createFloatingItem,
    500
);



/* =========================================================
   STARTUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createConfetti(25);

    }
);

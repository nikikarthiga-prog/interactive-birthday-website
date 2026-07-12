const startBtn = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const story = document.getElementById("story");

const caption = document.getElementById("caption");
const memoryPhoto = document.getElementById("memoryPhoto");
const nextBtn = document.getElementById("nextBtn");
const bgMusic = document.getElementById("bgMusic");
const memories = [

{
    caption: "Every beautiful journey begins somewhere...",
    image: "images/images2.jpeg"
},

{
    caption: "Tiny footsteps. Big dreams.",
    image: "images/images.jpeg"
},

{
    caption: "A smile that could brighten any room.",
    image: "images/images3.jpeg"
},

{
    caption: "Growing a little stronger every year.",
    image: "images/images4.jpeg"
},

{
    caption: "Little did the world know... a champion was growing.",
    image: "images/images5.jpeg"
},

{
    caption:"Strength isn't measured by medals. It's measured by the courage to keep going.",
    image: "images/images6.jpeg"
},

{
    caption: "And somewhere along that journey... our paths crossed.",
    image: "images/images7.jpeg"
},

{
    caption: "Some memories become stories we'll always remember.",
    image: "images/images8.jpeg"
},

{
    caption: "Here's to many more memories together. 💙",
    image: "images/images9.jpeg"
}

];

let currentIndex = 0;

startBtn.addEventListener("click", () => {

bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});
musicBtn.classList.add("playing");
    landing.style.opacity = "0";

    setTimeout(() => {

        landing.style.display = "none";

        story.classList.remove("hidden");

        showMemory();

    }, 1000);

});

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex < memories.length) {

        showMemory();

    } else {

        story.classList.add("hidden");

        document.getElementById("letter").classList.remove("hidden");

        startTyping();
    }

});

function showMemory() {

    memoryPhoto.style.opacity = "0";
    memoryPhoto.style.transform = "scale(0.9)";

    setTimeout(() => {

        caption.innerText = memories[currentIndex].caption;
        memoryPhoto.src = memories[currentIndex].image;

        memoryPhoto.style.opacity = "1";
        memoryPhoto.style.transform = "scale(1)";

    }, 400);

}

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();
        musicBtn.innerHTML = "🎵";

    }else{

        bgMusic.pause();
        musicBtn.innerHTML = "🔇";

    }

});
const letter = `

Congratulations! 🎉

You are officially 19 now...
which means you're an adult...

...but don't worry,
you still have full permission to be your wonderfully weird self. 😄

Life will throw challenges,
people will have opinions,

But I know one thing...

You'll keep moving forward.

Keep smiling.
Keep boxing. 🥊
Keep shining. ✨

Happy 19th Birthday! 💙

pathutae erukatha paeh 😒`;

let i = 0;

function startTyping(){

    const text = document.getElementById("letterText");

    const timer = setInterval(()=>{

        text.textContent += letter.charAt(i);

        i++;

        if(i >= letter.length){

            clearInterval(timer);

        }

    },35);

}
const stars = document.getElementById("stars");

for(let i = 0; i < 80; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);

}

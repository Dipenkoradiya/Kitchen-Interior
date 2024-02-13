const btnnavel = document.querySelector(".nav-menu-button");
const headerel = document.querySelector(".header");
btnnavel.addEventListener("click", function () {
    headerel.classList.toggle("nav-open");
});
console.log("hello");

// DONE
const cardels = document.querySelector(".Parent");
console.log(cardels.children);

cardels.addEventListener("click", (e) => {
    if (e.target.classList.contains("CARDS")) {
        if (!e.target.classList.contains("highlight")) {
            e.target.classList.add("highlight");

            [...cardels.children].forEach((cardel) => {
                if (cardel !== e.target) {
                    if (cardel.classList.contains("highlight")) {
                        cardel.classList.remove("highlight");
                    }
                }
            });
        }
    }
});

// const cardels = document.querySelectorAll(".CARDS");
// console.log(Array.from(cardels));

// Array.from(cardels).forEach((cardel))

// cardels.forEach((cardel) => {
//     cardel.addEventListener("click", () => {
//         if (!cardel.classList.contains("highlight")) {
//             cardel.classList.add("highlight");
//         }
//     });
//     if (cardel.classList.contains("highlight")) {
//         cardel.classList.remove("highlight");
//     }
// });

// for (let cardel of cardels) {
//     cardel.addEventListener("click", (e) => {
//         if (!cardel.classList.contains("highlight")) {
//             cardel.classList.add("highlight");

//         }
//     });
// }

// if(cardel.)
// cardel.addEventListener("click", function (e) {
//     if (cardel.classList == "highlight") {
//         console.log(e);
//         this.classList.remove("highlight");
//     } else {
//         console.log(e);
//         this.classList.add("highlight");
//     }
// });
// });

// const cardel = document.querySelectorAll(".CARDS");
// cardel.forEach((cardel) => {
//     const cardclasslist = cardel.className.split(" ");
//     console.log(cardclasslist);
//     cardclasslist.forEach((cardclasslist =='highlight') =>{

//     })
// cardel.addEventListener("click", function () {
//     if (cardel.classList == "highlight") {
//         this.classList.remove("highlight");
//     } else {
//         this.classList.toggle("highlight");
//     }
// });
// });
console.log("world");

const sectionheroEl = document.querySelector(".section2");
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        //in the viewport
        root: null,
        threshold: 0,
        rootMargin: "-200px",
    }
);
obs.observe(sectionheroEl);

// let sections = document.getElementsByTagName("section");
// let anchors = document.querySelectorAll("nav ul li a");

// window.addEventListener("scroll", event => {

//   for(let i = 0; i < sections.length; i++) {
//     let e = sections[i];
//     let top     = window.innerHeight * i > window.scrollY;
//     let bottom  = window.innerHeight * (i + 1) < window.scrollY;
//     console.log(
//       window.scrollY, window.innerHeight * i, window.innerHeight * (i + 1), i, anchors[i]
//     )

//     if (top && bottom && anchors[i] && !anchors[i].classList.contains("current")) {
//       console.log("fdsf");
//       for (let j = 0; j < anchors.length; j++) {
//         anchors[j].classList && anchors[j].classList.remove("current");
//       }
//       anchors[i].classList.add("current");
//     }
//   }
// });
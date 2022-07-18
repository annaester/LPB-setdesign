document.getElementById("exp-mov").onclick = toggleAnswer;
document.getElementById("exp-tv").onclick = toggleAnswer;
document.getElementById("exp-mc").onclick = toggleAnswer;
document.getElementById("exp-th-co").onclick = toggleAnswer;
document.getElementById("experience").onclick = toggleAllAnswers;
document.getElementById("education").onclick = addBg;

const menus = document.querySelectorAll(".drop-title");

function toggleAnswer() {
  this.classList.toggle("open");
}

function toggleAllAnswers() {
  const mov = document.getElementById("exp-mov");
  const tv = document.getElementById("exp-tv");
  const mc = document.getElementById("exp-mc");
  const thco = document.getElementById("exp-th-co");
  mov.classList.toggle("open");
  tv.classList.toggle("open");
  mc.classList.toggle("open");
  thco.classList.toggle("open");
  console.log("heeeej");
}

function addBg() {
  const edu = document.querySelector(".education");
  edu.classList.toggle("two");
}

const pics = document.querySelectorAll(".slide");

setTimeout(function () {
  pics[0].classList.remove("first");
}, 2500);

i = 1;

const interval = () => {
  if (i !== pics.length) {
    pics[i].classList.add("slideIn");
    pics[i].classList.remove("slideOut");
  }
  if (i > 0) {
    pics[i - 1].classList.add("slideOut");
    pics[i - 1].classList.remove("slideIn");
  }
  i++;
  if (pics.length + 1 === i) {
    i = 1;
    pics[0].classList.remove("slideOut");
    pics[0].classList.add("slideIn");
  }
};

setInterval(interval, 2500);

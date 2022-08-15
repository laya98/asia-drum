var myvoise = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];
var audio = new Audio();
w.addEventListener("click", (oe) => {
  audio.src = myvoise[0];
  audio.play();
});

a.addEventListener("click", (oe) => {
  audio.src = myvoise[1];
  audio.play();
});

s.addEventListener("click", (oe) => {
  audio.src = myvoise[2];
  audio.play();
});
s.addEventListener("click", (oe) => {
  audio.src = myvoise[3];
  audio.play();
});
d.addEventListener("click", (oe) => {
  audio.src = myvoise[4];
  audio.play();
});
j.addEventListener("click", (oe) => {
  audio.src = myvoise[5];
  audio.play();
});
k.addEventListener("click", (oe) => {
  var audio = new Audio();
  audio.src = myvoise[6];
  audio.play();
});
l.addEventListener("click", (oe) => {
  audio.src = myvoise[0];
  audio.play();
});

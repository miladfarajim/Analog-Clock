let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");
let deg = 6;
setInterval(timer, 1000);
function timer() {
  let d = new Date();
  let s = d.getSeconds() * deg;
  let m = d.getMinutes() * deg;
  let h = d.getHours() * 30;
  sec.style.transform = `rotateZ(${s}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
}

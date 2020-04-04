import Hike from './hikes.js';

const myHike = new Hike(document.getElementById("hikes"));

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  myHike.showHikeList();
});
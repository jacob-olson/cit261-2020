import QuakesController from './QuakesController.js';
import { getJSON, getLocation } from './utilities.js';
import buildNavigation from './routing.js';

//const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

//const myQuakesController = new QuakesController('#quakeList');
//myQuakesController.getQuakesByRadius();

const Quakeys = new QuakesController('#quakeList');
Quakeys.init();

console.log(Quakeys);
//const navElement = document.getElementById('mainNav');
//buildNavigation(navElement);

function setRadius() {
    Quakeys.radius = document.getElementById('radius').value;
    console.log(Quakeys.radius);
}

document.getElementById("submit").addEventListener('click', () => {
    setRadius();
    Quakeys.getQuakesByRadius(Quakeys.radius);
});
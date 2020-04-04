//create an array of hikes
const hikeList = [
  {
    name: "Bechler Falls",
    imgSrc: "bechler.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description:
      "Beautiful short hike along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
    name: "Teton Canyon",
    imgSrc: "teton.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
    name: "Dunanda Falls",
    imgSrc: "dunanda.jpg",
    imgAlt: "Image of Dunanda Falls",
    distance: "7 miles",
    difficulty: "Moderate",
    description:
      "Beautiful hike through Bechler meadows river to Dunanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
];

export default class Hike {
  constructor(elementId) {
   this.parentElement = elementId;
   this.backButton = this.buildBackButton();
  }

  getAllHikes() {
    return hikeList;
  }

  // For the first stretch we will need to get just one hike.
  getHikeByName(hikeName) {
    return this.getAllHikes().find(hike => hike.name === hikeName);
  }

  showHikeList() {
    this.parentElement.innerHTML = '';
    // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    renderHikeList(this.parentElement, this.getAllHikes());
    this.addHikeListener();
    // make sure the back button is hidden
    this.backButton.classList.add('hidden');
  }
  

  showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(renderOneHikeFull(hike));
    // show the back button
    this.backButton.classList.remove('hidden');
  }
  
  
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  
  addHikeListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }

  buildBackButton() {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Hikes';
    backButton.addEventListener('touchend', () => {
      this.showHikeList();
    });
    backButton.classList.add('hidden');
    this.parentElement.before(backButton);
    return backButton;
  }
}
;

function renderHikeList(parent, hikes) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHikeLight(hike));
  });
}

function renderOneHikeLight(hike) {
  const item = document.createElement('li');
  item.classList.add('light');
  // setting this to make getting the details for a specific hike easier later.
  item.setAttribute('data-name', hike.name);
  item.innerHTML = ` <h2>${hike.name}</h2>
<div class="image"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
<div>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
</div>`;

  return item;
}

function renderOneHikeFull(hike) {
  const item = document.createElement('li');
  item.innerHTML = ` 
    
        <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${hike.directions}</p>
        </div>
    
    `;
  return item;
}

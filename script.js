let prevScrollPos = window.pageYOffset;

// Settings Vars
var srcDirectory = "RandomFolder/";
var buttonColor = "#5c61b2";
var RarityColor = [0xFFce00, 0xFFFFFF]
var colorExpPow = 2;



var scriptElement = document.currentScript;
var fileName = scriptElement.getAttribute('data-file-name');

var isPageSwitch = false;

// Important functions
function LerpColor(color1, color2, t, exp) {
  t = Math.pow(t, exp);

  // Extract color components
  const r1 = color1 >> 16 & 255;
  const g1 = color1 >> 8 & 255;
  const b1 = color1 & 255;
  const a1 = color1 >>> 24;

  const r2 = color2 >> 16 & 255;
  const g2 = color2 >> 8 & 255;
  const b2 = color2 & 255;
  const a2 = color2 >>> 24;

  // Interpolate color components
  const r = Math.round(r1 + t * (r2 - r1));
  const g = Math.round(g1 + t * (g2 - g1));
  const b = Math.round(b1 + t * (b2 - b1));
  const a = Math.round(a1 + t * (a2 - a1));

  // Combine interpolated components into a new color
  return (a << 24) | (r << 16) | (g << 8) | b;
}





// Open Pages Functions
function backHome() {
  window.open('index.html', '_self');
}
function openRandomEvent() {
  isPageSwitch = true

  document.getElementById("menu-bar").style.height = "100%";
  document.getElementById("btn").style.height = "100px";
  document.getElementById("icon").style.display = "none";
  document.getElementById("follow-btn").style.display = "none";
  
  setTimeout(function() {
    window.open('random-event.html', '_self');
  }, 1000);
}

function updateCurrentPage() {
  if (fileName == "random-event.html") {
    document.body.style.backgroundImage = 'url("assets/birthday-sparkle-darken.gif")';
    document.body.style.backgroundColor = '#000';
    document.getElementById("menu-bar").style.backgroundColor = "#333";
    
  }
  
  if (fileName == "index.html") {
    changeIndexPage(0)
  }
  
  if (fileName == "socials.html") {
    document.getElementById("menu-bar").style.backgroundColor = "#e8d659";
  }
  
  if (fileName == "random-event.html") {
    createRandomItem()
  }
  
  
}

var indexHTMLexplication = 0;
var opacityIndex = 0;


function changeIndexPage(dir) {
  var tempCONDITION = indexHTMLexplication + dir;
 
  if (tempCONDITION >= 0) {
    if (tempCONDITION < indexExplication.length) {
      indexHTMLexplication += dir;
      
      document.getElementById("index-container").style.opacity = 0;
      var currentIndexExplication = indexExplication[indexHTMLexplication];
  
      setTimeout(function() {
        
        document.getElementById("index-container").innerHTML = '';
        document.getElementById("index-container").insertAdjacentHTML('afterbegin', indexExplication[indexHTMLexplication]);
        
        document.getElementById("index-container").style.opacity = 1;
        
        
        if (document.getElementById("randomNumberIndex") !== null) {
          document.getElementById("randomNumberIndex").textContent = '';
          document.getElementById("randomNumberIndex").textContent = 'Vous aurez aussi un nombre, par exemple "#' + (Math.floor(Math.random() * randomItems.length) + 1) + '" qui représentera la valeur de rareté du contenu découvert.';
          
        }
        
        
        
        decorateRainbow()
        quickRandom()
      }, 200);
    }
  }

  
  
  if (indexHTMLexplication == 0) {
    document.getElementById("leftPageButton").style.backgroundColor = "#ccc";
  } else {
    document.getElementById("leftPageButton").style.backgroundColor = buttonColor;
  }
  
  if (indexHTMLexplication == indexExplication.length -1) {
    document.getElementById("rightPageButton").style.backgroundColor = "#ccc";
  } else {
    document.getElementById("rightPageButton").style.backgroundColor = buttonColor;
  }
}




function quickRandom() {
  var randomIndex2 = Math.floor(Math.random() * 5);
  if (document.getElementById("contentExample") !== null) {
    document.getElementById("contentExample").style.maxHeight = "0px";
    setTimeout(function() {
      document.getElementById("contentExample").src = 'assets/QuickRandom/index-screen' + randomIndex2 + '.png';
      document.getElementById("contentExample").style.maxHeight = "70px";
    }, 250);
  }
}




function isHTMLElement(text) {
  var htmlTagRegex = /<[^>]*>/;
  return htmlTagRegex.test(text);
}








var lastRandom = 0;

function createRandomItem(index) {
  var normSpecialSlider = (randomItems.length - 1) / 100;
  // Random Var
  var randomIndex = Math.floor(Math.random() * randomItems.length);
  if (index !== undefined) {
    randomIndex = Math.round(index);
  }

  // Do not touch Vars
  var itemsDataEvent = "none";
  var display = document.getElementById('display-random')
  
  document.getElementById("display-random").style.minHeight = "10px";
  display.innerHTML = '';
  
  // Animates the Rarity Number
  document.getElementById("index-display-display").style.opacity = .3;

  const numberRandomDisplay = document.getElementsByClassName('index-display');

  var rareColor = LerpColor(RarityColor[0], RarityColor[1], randomIndex / (randomItems.length - 1), colorExpPow);
  numberRandomDisplay[0].style.color = "#" + rareColor.toString(16);
  numberRandomDisplay[1].style.color = "#" + rareColor.toString(16);

  document.getElementById("index-display").textContent = '?';
  setTimeout(function() {
    document.getElementById("index-display").textContent = '??';
  }, 100);
  
  
  
  
  
  
  
  
  
  
  
  // Writes Notes dependent of RandomQuotes Array
  if (randomQuotes[randomIndex] !== undefined) {
    document.getElementById("quote-display").style.display = "flex";
    document.getElementById("paper-note").textContent = randomQuotes[randomIndex];
  } else {
    document.getElementById("quote-display").style.display = "none";
  }
  
  
  
  // Creates en HTML Element if it's an html element
  if (isHTMLElement(randomItems[randomIndex])) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = randomItems[randomIndex];
    display.appendChild(tempDiv.firstChild);
    itemsDataEvent = document.getElementById("items").dataset.event;
  }
  // Every Other Generation
  if (!isHTMLElement(randomItems[randomIndex]) ) {
    var element = randomItems[randomIndex];
    
    if (/img_/.test(element) ) {
      var imgElement = document.createElement('img');
      var patternRemoved = element.replace("img_", "");
      imgElement.src = srcDirectory + "images/" + patternRemoved;
      imgElement.id = 'items';
      imgElement.setAttribute('data-event', 'none');
      display.appendChild(imgElement);
      
    } else if (/vid_/.test(element) ) {
      var vidElement = document.createElement('video');
      var patternRemoved = element.replace("vid_", "");
      vidElement.src = srcDirectory + "videos/" + patternRemoved;
      vidElement.id = 'items';
      vidElement.controls = true;
      vidElement.setAttribute('data-event', 'none');
      display.appendChild(vidElement);
    }
  }
  
  
  
  
  
  
  
  
  
  
  // Hides the RandomButton when DateEvent is called
  if (itemsDataEvent == "hide") {
    document.getElementById("random-button-div").style.display = "none";
  } else {
    document.getElementById("random-button-div").style.display = "flex";
  }
  

  // experiments slider 
  if (document.getElementById('items').dataset.type !== null) {
    if (document.getElementById('items').dataset.type === "slider") { 
      // Sliders Scripts
      const slider = document.getElementById('items');
      var sliderValue = 0;

      slider.addEventListener('input', function() {
        sliderValue = slider.value;
      });

      slider.addEventListener('change', function() {
        createRandomItem(normSpecialSlider * sliderValue);
      })
    }
  }




  
  // Finalize Display
  setTimeout(function() {
    document.getElementById("display-random").style.minHeight = "200px";
    document.getElementById("index-display").textContent = randomIndex +1 + " / " + randomItems.length;
    document.getElementById("index-display-display").style.opacity = 1;
    
    document.getElementById("items").style.display = 'block';
    lastRandom = randomIndex;
  }, 250)
  
  
}








// Rainbow Animation

function decorateRainbow() {
  if (document.getElementById('colorful-decoration')!==null) {
    var rainbowText = document.getElementById('colorful-decoration');
    var rainbowTextContent = rainbowText.textContent;
    rainbowText.innerHTML = '';
  
    for (var i = 0; i < rainbowTextContent.length; i++) {
      var span = document.createElement('span');
      span.textContent = rainbowTextContent[i];
      span.style.animationDelay = i * .15 + 's';
      rainbowText.appendChild(span);
    }
  }
}







// Scroll Menu function 
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  // Vérifie si la page est tout en haut
  if (currentScrollPos <= 0) {
    // Si la page est tout en haut, affiche la barre de menu
    document.getElementById("menu-bar").style.top = "0";
    if (fileName == "index.html") {
      document.getElementById("menu-bar").style.height = "100%";
      document.getElementById("icon").style.width = "150px";
    }
  } else if (prevScrollPos > currentScrollPos) {
    // Si on scroll vers le haut, affiche la barre de menu
    if (isPageSwitch == false) {
      document.getElementById("menu-bar").style.top = "0";
      document.getElementById("menu-bar").style.height = "60px";
      document.getElementById("icon").style.width = "80px";
    }
  } else {
    // Si on scroll vers le bas, masque la barre de menu
    if (isPageSwitch == false) {
      document.getElementById("menu-bar").style.top = "-60px";
      document.getElementById("menu-bar").style.height = "60px";
      document.getElementById("icon").style.width = "80px";
    }
  }
  prevScrollPos = currentScrollPos;
}









window.onload = function() {
  updateCurrentPage()
}

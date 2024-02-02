let prevScrollPos = window.pageYOffset;

// Settings Vars
var srcDirectory = "assets/";
var buttonColor = "#5c61b2";



var scriptElement = document.currentScript;
var fileName = scriptElement.getAttribute('data-file-name');

var isPageSwitch = false;

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

function createRandomItem() {
  // Do not touch Vars
  var itemsDataEvent = "none";
  var display = document.getElementById('display-random')
  
  document.getElementById("display-random").style.minHeight = "10px";
  display.innerHTML = '';
  
  
  // Animates the Rarity Number
  document.getElementById("index-display-display").style.opacity = .3;
  document.getElementById("index-display").textContent = '?';
  setTimeout(function() {
    document.getElementById("index-display").textContent = '??';
  }, 100);
  
  
  
  
  
  
  // Random Var
  var randomIndex = Math.floor(Math.random() * randomItems.length);
  
  
  
  
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
      imgElement.src = srcDirectory + patternRemoved;
      imgElement.id = 'items';
      imgElement.setAttribute('data-event', 'none');
      display.appendChild(imgElement);
      
    } else if (/vid_/.test(element) ) {
      var vidElement = document.createElement('video');
      var patternRemoved = element.replace("vid_", "");
      vidElement.src = srcDirectory + patternRemoved;
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
  
  
  // Finalize Display
  setTimeout(function() {
    document.getElementById("display-random").style.minHeight = "200px";
    document.getElementById("index-display").textContent = randomIndex +1;
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









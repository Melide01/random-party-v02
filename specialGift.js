var btnGift = document.getElementById("btnGift");
btnGift.addEventListener("click", eventGift);


function eventGift() {
    if (document.getElementById("inputGift").value > 0) {
      var newIndex = document.getElementById("inputGift").value - 1;
      
      if (newIndex < randomItems.length) {
        createRandomItem(newIndex);
      } else {
        console.log(randomItems.length);
        newIndex = randomItems.length - 1;
        createRandomItem(newIndex);
        document.getElementById("inputGift").value = randomItems.length;
      }
    }
  }
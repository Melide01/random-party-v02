var btnGift = document.getElementById("btnGift");
btnGift.addEventListener("click", eventGift);

function eventGift() {
  if (parseFloat(sessionStorage.getItem("specialGift")) >= 2) {
    if (document.getElementById("inputGift").value > 1) {
      var newIndex = document.getElementById("inputGift").value - 1;
      
      if (newIndex < randomItems.length - limitGift) {
        createRandomItem(newIndex);
      } else {
        console.log(randomItems.length);
        newIndex = randomItems.length - limitGift - 1;
        createRandomItem(newIndex);
        document.getElementById("inputGift").value = randomItems.length;
      };
    };
  } else {
    if (document.getElementById("inputGift").value > -16) {
      var newIndex = document.getElementById("inputGift").value - 1;
      
      if (newIndex < randomItems.length - limitGift) {
        createRandomItem(newIndex);
      } else {
        console.log(randomItems.length);
        newIndex = randomItems.length - limitGift - 1;
        createRandomItem(newIndex);
        document.getElementById("inputGift").value = randomItems.length;
      };
    };
  }
}
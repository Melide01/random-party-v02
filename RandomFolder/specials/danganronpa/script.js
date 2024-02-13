var dialog1 = [
    {
        name: '',
        dialogue: 'Eh toi...',
        background: 1,
        character: 2,
        character_opacity: 0,
        backgroung_opacity: 0
    },
    {
        character: 2,
        character_opacity: 1,
        backgroung_opacity: 1
    },
    {
        name:'Nagito',
        character: 1,
        dialogue: 'Tu vas bien?'
    },
    {
        character: 3,
        dialogue: 'Hônnetement tu as lair creuvé.'
    },
    {
        character: 1,
        dialogue: 'Prends du temps pour dormir sil te plait.'
    },
    {
        character: 7,
        character_opacity: 0,
        dialogue: 'A plus!'
    }
]

var currentArray = dialog1;





// Do not touch vars
var currentName = 'Nagito';
var currentIndex = -1;
var currentDialogIndex = null;
var currentText = null;
var trimIndex = 0;



function updateDialog() {
    document.getElementById("dangan-dialog").textContent = "";
    trimIndex = 0;
    
    currentIndex += 1;

    currentDialogIndex = currentArray[currentIndex];
    console.log(currentDialogIndex);

    // Updates the engine
    if (currentDialogIndex !== undefined) {
        currentText = currentDialogIndex['dialogue'];

        if (currentDialogIndex['name'] !== undefined) {
            document.getElementById("dangan-name").textContent = currentDialogIndex['name'];
            if (currentDialogIndex['name'] !== "") {
                currentName = currentDialogIndex['name'];
            };
        };

        if (currentDialogIndex['character'] !== undefined) {
            document.getElementById("dangan-character").src = currentName + '/' + currentName + currentDialogIndex['character'] + '.png';
            console.log(currentName + '/' + currentName + currentDialogIndex['character'] + '.png');
        };
        
        

        
        if (currentDialogIndex['background'] !== undefined) {
            document.getElementById("dangan-bg").src = 'background/danganBG' + currentDialogIndex['background'] + '.png';
        };
        if (currentDialogIndex['backgroung_opacity'] !== undefined) {
            document.getElementById("dangan-bg").style.opacity = currentDialogIndex['backgroung_opacity'];
        };
        if (currentDialogIndex['character_opacity'] !== undefined) {
            document.getElementById("dangan-character").style.opacity = currentDialogIndex['character_opacity'];
        };
        
        if (currentDialogIndex['dialogue'] !== undefined) {
            typeWrite();
        };

    } else {
        window.location.href = '../../../random-event.html';
    };
    




    
}


function typeWrite() {
    
    const textElement = document.getElementById("dangan-dialog");

    if (trimIndex < currentText.length) {
        trimIndex += 1;
        textElement.textContent = currentText.substring(0, trimIndex);

        setTimeout(function() {
            typeWrite(currentText);
        }, 50);
    } else {
        return
    };
};

window.onload = function() {
    updateDialog();
  }
  
const arrayArray = [
    dialog1,
    dialog2,
    dialog3,
    dialog4,
    dialog5,
    dialog6
]

var isRandomArray = 0;
var currentArray = dialog6;





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
            if (currentDialogIndex['name'] !== "" && currentDialogIndex['name'] !== "???") {
                currentName = currentDialogIndex['name'];
            };
        };

        if (currentDialogIndex['name'] == "") {
            document.getElementById('dangan-dialog').style.color = "#aaaaff";
        } else {
            document.getElementById('dangan-dialog').style.color = "#ffffffff";
        }


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
        }, 20);
    } else {
        return
    };
};


// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

const tock = new Audio('sounds/tock.mp3');

const kick = new Audio('sounds/kick-drum.mp3');

const snare = new Audio('sounds/snare-drum.mp3');

const hat = new Audio('sounds/hi-hat.mp3');

let counting = document.querySelector('.counting p');

let kicker = document.querySelector('#kick-drum');

let snareBox = document.querySelector('#snare-drum');

let hatBox = document.querySelector('#hat');

let boxes = document.querySelector('.toggler');

let kickCounter = document.querySelector('#kick-drums');

let snareInput = document.querySelector('#snare-drums');

let hatInput = document.querySelector('#hats');

const coolButton = document.querySelector('.dark');

let on = document.body.style.backgroundColor === '#202020';

let off = document.body.style.backgroundColor = '#81b29a';

let inputColor = document.querySelector('input');

let core = document.querySelector('.core');

let metronome = document.querySelector('.metronome')

let bLeft = document.querySelector('.background-left');

let bCenter = document.querySelector('.background-center');

let bRight = document.querySelector('.background-right');

let metroLabel = document.querySelector('.metroLabel');

let kickDrumLabel = document.querySelector('#kickLabel');

let snareDrumLabel = document.querySelector('#snareLabel');

let hatLabel = document.querySelector('#hatLabel');

coolCounter = 0;

// let body = document.getElementById('BODY');

let counter = 1;

// Responsible for updating counter
function countDown() {
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

let kickingCounter = 0;


// This function is called every 600ms
function update() {
    
    console.log(kickingCounter)
    // Function for the countdown
    countDown();

    // Updates HTML Counter
    counting.innerText = counter;

    if (metronome.checked === true) {
        metro();
    }

    if(kicker.checked === true) {
        kickDrum(kickCounter.value)
    }

    if(snareBox.checked === true) {
        snarey(snareInput.value);
    }

    if(hatBox.checked === true) {
        hatting(hatInput.value);
    }

}

function kickDrum(element) {
    if (element == counter) {
        kick.play();
    }
    else if(element < 1) {
        kick.play();
    }
}

function metro() {
    tick.play();
    if (counter === 4) {
        tock.play()
    }
}

function hatting(elements) {
    if (elements == counter) {
        hat.play();
    }
    else if (elements < 1) {
        hat.play();
    }
}

function snarey(elemented) {
    if (elemented == counter) {
        snare.play();
    }
    else if(elemented < 1) {
        snare.play();
    }
}

coolButton.addEventListener('click', function() {
    coolCounter++;
    if (coolCounter % 2 !== 0) {
        document.body.style.backgroundColor = 'rgb(0,0,0)';
        document.body.style.color = '#5B4FCF';
        core.style.backgroundColor = 'black';
        bCenter.style.backgroundColor = 'black';
        bLeft.style.borderBottom = '400px solid black';
        bRight.style.borderBottom = '400px solid black';
        metronome.style.backgroundColor = 'black';
        core.style.border = '6px dashed black';
    }

    else {
        document.body.style.backgroundColor = '#81b29a'
        document.body.style.color = 'black';
        core.style.backgroundColor = '#f4f1de';
        core.style.border =  '6px dashed #e07a5f';
        bCenter.style.backgroundColor = '#f2cc8f';
        bLeft.style.borderBottom = '400px solid #e07a5f';
        bLeft.style.borderLeft = '100px solid transparent';
        bRight.style.borderBottom = '400px solid #e07a5f';
        bRight.style.borderRight = '100px solid transparent';
        metronome.style.backgroundColor = '#f4f1de';
        core.style.border = '6px dashed #e07a5f';
    }
})

let metroClick = 0;
metroLabel.addEventListener('click', function() {
    metroClick++;

    if (metroClick % 2 !== 0) {
        metroLabel.style.opacity = '1';
        metronome.checked = true;
    }
    else {
        metroLabel.style.opacity = '.5';
        metronome.checked = false;
    }
})

kickDrumLabel.addEventListener('click', function() {
    kickingCounter++;
    if (kickingCounter % 2 !== 0) {
        kickDrumLabel.style.opacity = '1';
    }
    else {
        kickDrumLabel.style.opacity = '.5';
    }
})


let snareCounter = 0;
snareDrumLabel.addEventListener('click', function() {
    snareCounter++;

    if(snareCounter % 2 !== 0) {
        snareDrumLabel.style.opacity = '1'
    }
    else {
        snareDrumLabel.style.opacity = '.5'
    }
})

let hatCounter = 0;
hatLabel.addEventListener('click', function() {
    hatCounter++;
    if (hatCounter % 2 !== 0) {
        hatLabel.style.opacity = '1'
    }
    else {
        hatLabel.style.opacity = '.5'
    }
})

// metroLabel.addEventListener('mouseover', function() {
//     metroLabel.style.cursor = 'pointer';
//     metroLabel.style.opacity = '1';
// })

// snareDrumLabel.addEventListener('mouseover', function() {
//     snareDrumLabel.style.cursor = 'pointer';
//     snareDrumLabel.style.opacity = '1';
// })

// hatLabel.addEventListener('mouseover', function() {
//     hatLabel.style.cursor = 'pointer';
//     hatLabel.style.opacity = '1';
// })

// hatLabel.addEventListener('mouseover', function() {
//     kickDrumLabel.style.cursor = 'pointer';
//     kickDrumLabel.style.opacity = '1';
// })


// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

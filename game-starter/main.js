/**
 * Work with strings.
 */
window.addEventListener("DOMContentLoaded", function () {
  'use strict';
  let rockford = document.getElementById('baddie1'),
    area = document.getElementById('flash'),
    left = area.offsetLeft,
    top = area.offsetTop,
    posLeft = 0,
    posTop = 0,
    tileSize = 32,
    gridSize = 24,



    /**
     * This is the background for the game area.
     */
    gameArea = [
      30, 30, 31, 30, 30, 30, 30, 30, 30, 30, 30, 38, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 37, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 33, 30, 31, 30, 30, 60, 30, 30, 30, 30, 30, 30, 30, 35, 30, 30, 30, 30, 30, 37, 30, 30, 30,
      30, 30, 30, 30, 33, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 35, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 35, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 32, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 38,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 38, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 30, 30, 30, 30, 30, 34, 30, 30, 30, 30, 30, 30,
      30, 30, 34, 30, 30, 30, 30, 30, 36, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 32, 30, 30, 30, 30, 30, 30, 30, 30, 30, 36, 30, 30, 30, 30, 30, 30, 30, 30,
      38, 30, 30, 34, 35, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 34, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 33, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 34, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 31, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 36, 30, 30, 30, 30, 31, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 33, 30, 30, 30, 30, 30, 30, 30, 38, 30, 30, 30,
    ],

    /**
     * These are blocks that cant be moved to, or something happens when you try to move on them.
     * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31,
      31, 10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 21, 10, 10, 23, 66, 23, 10, 10, 10, 10, 10, 10, 32,
      32, 10, 21, 10, 22, 10, 20, 20, 21, 22, 10, 21, 22, 10, 23, 10, 22, 10, 10, 10, 10, 10, 10, 33,
      33, 10, 22, 10, 23, 10, 21, 10, 10, 20, 10, 63, 20, 10, 23, 10, 22, 10, 22, 23, 10, 21, 21, 34,
      34, 10, 10, 10, 22, 10, 22, 10, 10, 10, 20, 21, 10, 10, 22, 10, 21, 22, 10, 10, 10, 10, 22, 35,
      35, 22, 23, 10, 10, 10, 61, 10, 10, 10, 10, 21, 10, 22, 22, 10, 21, 10, 10, 21, 21, 10, 22, 36,
      36, 10, 10, 10, 20, 21, 20, 10, 10, 10, 10, 20, 10, 10, 10, 10, 22, 10, 22, 10, 10, 10, 10, 37,
      37, 21, 10, 10, 21, 10, 20, 10, 10, 10, 10, 10, 10, 10, 22, 10, 10, 10, 22, 10, 10, 10, 10, 38,
      38, 20, 10, 23, 22, 10, 62, 10, 10, 21, 21, 21, 20, 20, 10, 20, 10, 21, 10, 10, 10, 10, 10, 39,
      39, 23, 10, 10, 10, 10, 21, 10, 22, 24, 24, 24, 24, 24, 10, 20, 21, 21, 10, 10, 64, 10, 10, 40,
      40, 10, 22, 23, 62, 20, 20, 10, 22, 24, 10, 10, 10, 24, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30,
      30, 10, 23, 10, 10, 21, 10, 10, 22, 24, 10, 18, 10, 24, 20, 20, 20, 10, 10, 10, 10, 10, 10, 31,
      31, 10, 10, 10, 22, 10, 20, 10, 22, 24, 10, 666, 10, 24, 68, 10, 10, 20, 10, 10, 20, 20, 10, 32,
      32, 21, 10, 21, 21, 21, 10, 21, 22, 24, 24, 24, 24, 24, 20, 20, 10, 20, 20, 10, 10, 10, 10, 33,
      33, 50, 10, 10, 10, 20, 10, 10, 22, 10, 20, 10, 10, 10, 20, 10, 10, 20, 10, 10, 20, 10, 20, 34,
      34, 10, 10, 10, 10, 21, 22, 10, 22, 21, 20, 10, 20, 10, 20, 10, 20, 10, 10, 10, 20, 10, 20, 35,
      35, 20, 10, 20, 10, 10, 10, 10, 21, 21, 10, 10, 21, 10, 10, 10, 10, 10, 10, 10, 20, 10, 20, 36,
      36, 20, 10, 10, 20, 21, 21, 20, 10, 10, 10, 10, 23, 10, 10, 10, 20, 10, 10, 10, 20, 10, 20, 37,
      37, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 10, 22, 10, 20, 10, 20, 20, 20, 20, 10, 10, 10, 38,
      38, 10, 10, 20, 20, 20, 20, 21, 22, 22, 10, 10, 23, 10, 20, 10, 21, 10, 10, 10, 10, 10, 20, 39,
      39, 10, 20, 20, 10, 10, 10, 10, 10, 22, 10, 22, 10, 10, 20, 10, 21, 10, 21, 20, 20, 10, 20, 40,
      40, 10, 21, 10, 10, 21, 21, 21, 21, 21, 10, 10, 22, 10, 20, 10, 10, 10, 22, 10, 20, 10, 20, 30,
      30, 10, 21, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 10, 21, 21, 22, 10, 10, 10, 20, 32,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31,
    ];

  /**
   * Draw the initial gameplan
  */
  function drawGamePlan(gameArea, gameBlocks) {
    let i, e, b;
    for (i = 0; i < gameArea.length; i++) {
      e = document.createElement('div');
      e.innerHTML = '';
      e.className = 'tile t' + gameArea[i] + (gameBlocks[i] ? ' b' + gameBlocks[i] : '');
      e.id = 'n' + i;
      area.appendChild(e);
    }
  };
  console.log('Drawing gameplan.');
  drawGamePlan(gameArea, gameBlocks);

  let hasClub = false;
  let drankBlood = false;
  let hasCup = false;
  let halflingDead = false;
  let runOnce = 0;


  let backgroundAudio = new Audio('./sounds/the-sound-of-hell-21703.mp3');
  backgroundAudio.volume = 0.005;
  backgroundAudio.play();
  /**
   * Move Rockford
  */
  let move = function (moveLeft, moveTop, which) {


    function moveIt() {
      rockford.style.left = (area.offsetLeft + posLeft * tileSize + tileSize / 2) + 'px';
      rockford.style.top = (area.offsetTop + posTop * tileSize + tileSize / 2) + 'px';
      //  console.log("
      // Moved to: " + rockford.style.left + "x" + rockford.style.top);
    };
    if (which) { rockford.className = 'baddie ' + which; }
    let magma_move = new Audio("./sounds/liquid-whoosh-3-185332.mp3");
    magma_move.volume = 0.2;
    // First if means the baddie can movie
    if (!(gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] - 10)) {
      posLeft += moveLeft;
      posTop += moveTop;
      moveIt();
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 63) {
      hasClub = true;
      let pickup = new Audio('./sounds/paper-collect-6-186720.mp3');
      pickup.volume = 0.8;
      pickup.play();
      area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
      gameBlocks[83] = 10;                  // Removes the club
      drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed club
      rockford = document.getElementById('baddie1');
      alert("Du har nu en farlig klubba i händerna!")
      moveIt()
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 61) {
      if (hasClub) {
        // alert("Du slår ner trollet. Riktigt våldsamt och blodigt. ")
        let blood_sound = new Audio("./sounds/splash-death-splash-46048.mp3");
        blood_sound.volume = 0.6;
        blood_sound.play();
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[126] = 10;                 // Removes the troll
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed troll
        rockford = document.getElementById('baddie1');
        moveIt()
      }
      else {
        let troll_sound = new Audio("./sounds/monster-growl-376892.mp3");
        troll_sound.volume = 0.7;
        troll_sound.play();
        setTimeout(function () { alert("RAWWWR! Gå härifrån, tack.") }, 1000);
      }
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 66) {
      alert('Grattis! Du hittade en bägare!');
      hasCup = true;
      area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
      gameBlocks[39] = 67;                 // Removes the magma
      drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed magma
      rockford = document.getElementById('baddie1');
      moveIt()
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 64) {
      let choiceDrink = prompt('Vill du dricka blodet?');

      if (hasCup && choiceDrink == 'Ja') {
        drankBlood = true;
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[236] = 65;                 // Removes the magma
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed magma
        rockford = document.getElementById('baddie1');
        moveIt()
      } else if (hasCup == false) {
        alert('Du har inget att dricka ur. :(');
      } else {

      }

    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 68) {
      let pushHalfling = prompt('Vill du knuffa honom?');
      if (pushHalfling == 'Ja') {
        let scream = new Audio('./sounds/wilhelm-1-86895.mp3');
        scream.volume = 0.5;
        scream.play();
        halflingDead = true;
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[302] = 10;                 // Removes the magma
        gameBlocks[301] = 69;
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed magma
        rockford = document.getElementById('baddie1');
        moveIt()
      }

    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 50) {
      if (drankBlood && halflingDead) {
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[323] = 10;                 // Removes the magma
        magma_move.play();
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed magma
        rockford = document.getElementById('baddie1');
        moveIt()
      } else {
        if ((drankBlood == false && halflingDead == false)) {
          alert('Du ser törstig ut, och du har publik.')
        } else if (drankBlood == false) {
          alert('Du ser törstig ut.');
        } else {
          alert('Du har publik.')
        }
      }
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 666) {
      let devilLaugh = new Audio("./sounds/demonic-laugh-246556.mp3");
      devilLaugh.volume = 0.5;
      devilLaugh.play();
      const answer = prompt(`Jasså, du tror att du kan överlista självaste djälvulen? Låt oss se, svara på denna gåta: 
              Jag följer dig från födsel till grav,
              jag växer när ljuset är starkt.
              I mörkret dör jag utan ett ljud,
              men i solsken är jag din slav.

              Du kan springa, gömma dig, fly eller slåss –
              men mig lämnar du aldrig.

              Vad är jag?`);
      if (answer == 'skugga' || answer == 'en skugga' || answer == 'Skugga' || answer == 'En skugga' || answer == 'skuggan' || answer == 'Skuggan') {
        alert("Du har utlistat djävulen! Du är nu vår nya djävul!");

        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[299] = 10;                 // Removes the door
        gameBlocks[275] = 60;
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
        rockford = document.getElementById('baddie1');
        rockford.style.backgroundImage = "url('./img/red_devil_new.png')";
        moveIt()
      } else {
        alert("Du är lika dum som du ser ut! Tillbaka till början!");
        window.location.reload();
      }
    } else if (gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] == 60) {
      if (runOnce < 1) {
        runOnce++
        // backgroundAudio.pause();
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[323] = 24;
        magma_move.play();
        let endSong = new Audio("./sounds/sympathy-for-the-devil.mp3");
        endSong.volume = 0.5;
        endSong.play();
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
        rockford = document.getElementById('baddie1');
        rockford.style.backgroundImage = "url('./img/red_devil_new.png')";
        moveIt()
      }
    }
    else {  // Else means the baddie cannot move because of a wall
      console.log('Block detected, cant move.');
    }
    // console.log("area.offsetLeft", area.offsetLeft);
    // console.log("area.offsetTop", area.offsetTop);
    // console.log("posLeft", posLeft)
    // console.log("posTop", posTop)
  };
  console.log('Moving Mickey Mos (Rockford) to initial spot.');
  move(1, 1, 'down');


  /**
   * Keep track on keys pressed and move Rockford accordingly.
  */
  document.onkeydown = function (event) {
    let key;
    key = event.keyCode || event.which;
    switch (key) {
      case 37: move(-1, 0, 'left'); break;
      case 39: move(1, 0, 'right'); break;
      case 38: move(0, -1, 'up'); break;
      case 40: move(0, 1, 'down'); break;
      default: move(0, 0, 'down'); break;
    };
    console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + rockford.offsetLeft + ', ' + rockford.offsetTop);
  };

  console.log('Everything is ready.');
});









// SIBARS GREJER
// } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 20) {
//         area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
//         gameBlocks[344] = 10;                 // Removes the door
//         drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
//         rockford = document.getElementById('baddie1');
//         moveIt()

//       // Plays a sound when trying to enter the closed door
//       } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 18) {
//         let audio = new Audio('sounds/trying-to-open-a-locked-door-104302.mp3');
//         audio.volume = 0.2 //Volumne 0-1
//         audio.play()

//       // Plays a sound when arriving to the Emerald, and also giving a Success message
//       } else if (gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 14) {
//         let audio = new Audio('sounds/chaos-emerald-323237.mp3');
//         audio.volume = 0.2 //Volumne 0-1
//         audio.play()
//         alert("Congratz, You have arrived to Emerald City")
//       } else {  // Else means the baddie cannot move because of a wall
//         console.log('Block detected, cant move.');
//       }
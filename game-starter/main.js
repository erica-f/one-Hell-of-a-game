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
      30, 33, 30, 31, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 30, 30, 30, 30, 30, 37, 30, 30, 30,
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
      31, 10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 21, 10, 10, 23, 10, 23, 10, 10, 10, 10, 10, 10, 32,
      32, 10, 21, 10, 22, 10, 20, 20, 21, 22, 10, 21, 22, 10, 23, 10, 22, 10, 10, 10, 10, 10, 10, 33,
      33, 10, 22, 10, 23, 10, 21, 10, 10, 20, 10, 10, 20, 10, 23, 10, 22, 10, 22, 23, 10, 21, 21, 34,
      34, 10, 10, 10, 22, 10, 22, 10, 10, 10, 20, 21, 10, 10, 22, 10, 21, 22, 10, 10, 10, 10, 22, 35,
      35, 10, 23, 10, 10, 10, 10, 10, 10, 10, 10, 21, 10, 22, 22, 10, 21, 10, 10, 21, 21, 10, 22, 36,
      36, 10, 10, 10, 20, 21, 20, 10, 10, 10, 10, 20, 10, 10, 10, 10, 22, 10, 22, 10, 10, 10, 10, 37,
      37, 10, 10, 10, 21, 10, 20, 10, 10, 10, 10, 10, 10, 10, 22, 10, 10, 10, 22, 10, 10, 10, 10, 38,
      38, 10, 10, 23, 22, 10, 10, 10, 10, 21, 21, 21, 20, 20, 10, 20, 10, 21, 10, 10, 10, 10, 10, 39,
      39, 10, 10, 10, 10, 10, 21, 10, 22, 24, 24, 24, 24, 24, 10, 20, 21, 21, 10, 10, 10, 10, 10, 40,
      40, 10, 22, 23, 10, 20, 20, 10, 22, 24, 10, 10, 10, 24, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30,
      30, 10, 23, 10, 10, 21, 10, 10, 22, 24, 10, 18, 10, 24, 20, 20, 20, 10, 10, 10, 10, 10, 10, 31,
      31, 10, 10, 10, 22, 10, 10, 10, 22, 24, 10, 666, 10, 24, 10, 10, 10, 20, 10, 10, 20, 20, 10, 32,
      32, 10, 10, 21, 21, 21, 10, 21, 22, 24, 24, 24, 24, 24, 20, 20, 10, 20, 20, 10, 10, 10, 10, 33,
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


    //     gameBlocks = [
    //   30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31,
    //   31, 10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 21, 10, 10, 23, 10, 23, 10, 10, 10, 10, 10, 10, 32,
    //   32, 10, 21, 10, 22, 10, 20, 20, 21, 22, 10, 21, 22, 10, 23, 10, 22, 10, 10, 10, 10, 10, 10, 33,
    //   33, 10, 22, 10, 23, 10, 21, 10, 10, 20, 10, 10, 20, 10, 23, 10, 22, 10, 22, 23, 10, 21, 21, 34,
    //   34, 10, 10, 10, 22, 10, 22, 10, 10, 10, 20, 21, 10, 10, 22, 10, 21, 22, 10, 10, 10, 10, 22, 35,
    //   35, 22, 23, 10, 10, 10, 10, 10, 10, 10, 10, 21, 10, 22, 22, 10, 21, 10, 10, 21, 21, 10, 22, 36,
    //   36, 10, 10, 10, 20, 21, 20, 10, 10, 10, 10, 20, 10, 10, 10, 10, 22, 10, 22, 10, 10, 10, 10, 37,
    //   37, 21, 10, 10, 21, 10, 20, 10, 10, 10, 10, 10, 10, 10, 22, 10, 10, 10, 22, 10, 10, 10, 10, 38,
    //   38, 20, 10, 23, 22, 10, 10, 10, 10, 21, 21, 21, 20, 20, 10, 20, 10, 21, 10, 10, 10, 10, 10, 39,
    //   39, 23, 10, 10, 10, 10, 21, 10, 22, 24, 24, 24, 24, 24, 10, 20, 21, 21, 10, 10, 10, 10, 10, 40,
    //   40, 10, 22, 23, 10, 20, 20, 10, 22, 24, 10, 10, 10, 24, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30,
    //   30, 10, 23, 10, 10, 21, 10, 10, 22, 24, 10, 18, 10, 24, 20, 20, 20, 10, 10, 10, 10, 10, 10, 31,
    //   31, 10, 10, 10, 22, 10, 10, 10, 22, 24, 10, 666, 10, 24, 10, 10, 10, 20, 10, 10, 20, 20, 10, 32,
    //   32, 21, 10, 21, 21, 21, 10, 21, 22, 24, 24, 24, 24, 24, 20, 20, 10, 20, 20, 10, 10, 10, 10, 33,
    //   33, 50, 22, 10, 10, 20, 10, 10, 22, 10, 20, 10, 10, 10, 20, 10, 10, 20, 10, 10, 20, 10, 20, 34,
    //   34, 10, 10, 10, 10, 21, 22, 10, 22, 21, 20, 10, 20, 10, 20, 10, 20, 10, 10, 10, 20, 10, 20, 35,
    //   35, 20, 10, 20, 10, 10, 10, 10, 21, 21, 10, 10, 21, 10, 10, 10, 10, 10, 10, 10, 20, 10, 20, 36,
    //   36, 20, 10, 10, 20, 21, 21, 20, 10, 10, 10, 10, 23, 10, 10, 10, 20, 10, 10, 10, 20, 10, 20, 37,
    //   37, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 10, 22, 10, 20, 10, 20, 20, 20, 20, 10, 10, 10, 38,
    //   38, 10, 10, 20, 20, 20, 20, 21, 22, 22, 10, 10, 23, 10, 20, 10, 21, 10, 10, 10, 10, 10, 20, 39,
    //   39, 10, 20, 20, 10, 10, 10, 10, 10, 22, 10, 22, 10, 10, 20, 10, 21, 10, 21, 20, 20, 10, 20, 40,
    //   40, 10, 21, 10, 10, 21, 21, 21, 21, 21, 10, 10, 22, 10, 20, 10, 10, 10, 22, 10, 20, 10, 20, 30,
    //   30, 10, 21, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 10, 21, 21, 22, 10, 10, 10, 20, 32,
    //   30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 30, 31,
    // ];

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


    // First if means the baddie can movie
    if (!(gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] - 10)) {
      posLeft += moveLeft;
      posTop += moveTop;
      moveIt();
    } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 50) { 
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[323] = 10;                 // Removes the door
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
        rockford = document.getElementById('baddie1');
        moveIt()
    } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 666) {
      const answer = prompt(`Tror du att du kan överlista djälvulen? Svara då på denna gåta: 
              Jag följer dig från födsel till grav,
              jag växer när ljuset är starkt.
              I mörkret dör jag utan ett ljud,
              men i solsken är jag din slav.

              Du kan springa, gömma dig, fly eller slåss –
              men mig lämnar du aldrig.

              Vad är jag?`);
              if (answer == 'skugga' ||answer == 'en skugga' ||answer == 'Skugga' ||answer == 'En skugga') {
                alert("Rätt svar! Du kan gå vidare.");
                area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
                gameBlocks[299] = 10;                 // Removes the door
                drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
                rockford = document.getElementById('baddie1');
                moveIt()
              } else {
                alert("Fel svar! Försök igen nästa gång.");
                window.location.reload();
              }
    }else {  // Else means the baddie cannot move because of a wall
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
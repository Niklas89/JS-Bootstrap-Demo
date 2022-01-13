let start, previousTimeStamp;
const d = document.getElementById("zombietomb");
const audio = new Audio("./media/zombie-growling.mp3");
let count = 0;

startgame();

function startgame() {
    d.hidden = false;
    d.style.border = "1px solid red";
    d.textContent = "click inside this square, something will pop out...";
    d.style.cursor = "pointer";
    d.style.color = "red";
}

function step(timestamp) {
    d.style.border = "none";
    d.textContent = "";
    // if start is not yet defined, set a timestamp in start
    if (start === undefined) {
      start = timestamp; // timestamp is like new Date().getTime()
      }
      // elapsed duration = time now - time at the start
    const elapsed = timestamp - start;
    // if timestamp at previous loop is not equal to actual timestamp
    if (previousTimeStamp !== timestamp) {
        d.style.backgroundImage = "url(./img/zombie.png)";
        // add 100px on X at each loop
        d.style.backgroundPositionX = - count + 'px';
        console.log(count);
        if(count < 1000) {
          count += 100;
        }
        
    }
    let fps = 10;
    // 1000 is 1sec duration, keep doing requestAnimationFrame(step) as long as time below 1000
    if (elapsed < 1000) { // Stop the animation after 1 seconds
    // actual timestamp set in previous loop variable called previousTimeStamp
      previousTimeStamp = timestamp;
      // make another loop with a lowered frameRate
      // thanks to setTimeout() I can change the speed with 1000/fps
      setTimeout(function(){
        requestAnimationFrame(step)
        }, 1000/fps)
        // if time elapsed is superior or equal to 1000 (1sec) you can move the zombie
    } else if(elapsed >= 1000) {
        // as soon as we press down a key we launch detectKey function
        document.onkeydown = detectKey;
    }
  }

  // Move the zombie with arrow keys
  function detectKey(e) {
    let posLeft = d.offsetLeft; // offsetLeft renvoie la position du coin supérieur gauche de l'élément 
    let posTop = d.offsetTop; // offsetTop renvoie la distance entre l'élément courant et le haut du nœud 
    // e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        d.style.marginTop  = (posTop-60)+"px";
        d.style.transform = "rotate(90deg)";
    }
    else if (e.keyCode == '40') {
        // down arrow
        d.style.marginTop  = (posTop+60)+"px";
        d.style.transform = "rotate(-90deg)";
    }
    else if (e.keyCode == '37') {
       // left arrow
        d.style.marginLeft  = (posLeft-60)+"px";
        d.style.transform = "scaleX(1)";
    }
    else if (e.keyCode == '39') {
       // right arrow
        d.style.marginLeft  = (posLeft+60)+"px";
        d.style.transform = "scaleX(-1)";
    }
    // make the zombie disappear
    else if(e.key == "q") {
        start = undefined;
        previousTimeStamp = undefined;
        count = 0;
        requestAnimationFrame(stepdown);
    }
}

function stepdown(timestamp) {
    // if start is not yet defined, set a timestamp in start
    if (start === undefined) {
      start = timestamp; // timestamp is like new Date().getTime()
      }
      // elapsed duration = time now - time at the start
    const elapsedd = timestamp - start;
    // if timestamp at previous loop is not equal to actual timestamp
    if (previousTimeStamp !== timestamp) {
        // add 100px on X at each loop
        d.style.backgroundPositionX = count + 'px';
        console.log(count);
        if(count<1000) {
          count += 100;
        }
        
        
    }
    let fps = 10;
    // 1000 is 1sec duration, keep doing requestAnimationFrame(step) as long as time below 1000
    if (elapsedd < 1000) { // Stop the animation after 1 seconds
    // actual timestamp set in previous loop variable called previousTimeStamp
      previousTimeStamp = timestamp;
      // make another loop with a lowered frameRate
      // thanks to setTimeout() I can change the speed with 1000/fps
      setTimeout(function(){
        requestAnimationFrame(stepdown)
        }, 1000/fps);
    } 
    else if(elapsedd >= 1000) {
        d.hidden = true;
        count = 0;
        console.log(d.style);
       d.style.backgroundPositionX = 0;
        d.style.marginTop = 0;
        d.style.marginLeft = 0;
        d.style.transform = "revert";
        d.style.backgroundImage = "";
        console.log(d.style);
        start = undefined;
        previousTimeStamp = undefined;
        startgame();
    }
  }

  
    // start event when you move the mouse over the div
    d.addEventListener('click', (event) => {
      audio.play();
      requestAnimationFrame(step);
      });

  /*
d.addEventListener('mouseover', (event) => {
    d.style.backgroundImage = "url(./img/zombie.png)";
    d.style.backgroundPositionX = "50px";

    var progress;
    if (start === null) start = timestamp;
    progress = timestamp - start;
    d.style.left = Math.min(progress/10, 200) + "px";
    if (progress < 2000) {
      requestAnimationFrame(step);
    }
  });
  requestAnimationFrame(step);


let start = null;
d.addEventListener('click', function step(timestamp) {
    var progress;
    if (start === null) start = timestamp;
    progress = timestamp - start;
    d.style.left = Math.min(progress/10, 200) + "px";
    if (progress < 2000) {
      requestAnimationFrame(step);
    }
  });

requestAnimationFrame(step);  */


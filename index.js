/**
 * Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the font-size CSS property (style.fontSize) on its parent element. Remember to include a unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, without scrolling the page.

When that works, add a feature where, if you blow up the balloon past a certain size, it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).
 */

import "./style.css";

const appContainer = document.getElementById("app");
const baloonElement = document.getElementById("baloon");

const CURRENT_SIZE = 10;
const EXPLODE_SIZE = 100;

baloonElement.style.fontSize = CURRENT_SIZE+ "px";


const handler = document.addEventListener("keydown", event => {
  const keyCode = event.which;
  console.log(keyCode)
  switch (keyCode) {
    case 38: //UP
      if(CURRENT_SIZE>EXPLODE_SIZE) {
        explodeBaloon();
      } else{
      CURRENT_SIZE = calculateGrow(CURRENT_SIZE, 10);
      baloonElement.style.fontSize = CURRENT_SIZE+"px";
      }
      break;
    case 40: //down
      CURRENT_SIZE = calculateShrink(CURRENT_SIZE, 10);
      baloonElement.style.fontSize = CURRENT_SIZE+"px";
      break;
    default:
  }
});

const explodeBaloon = ()=>{
  baloonElement.innerHTML = "💥";
  setTimeout(()=>{
    baloonElement.innerHTML = null;
    document.removeEventListener('keydown');
  },2000)
}


const calculateGrow = (currentSize, factor) => {
  return Math.floor(currentSize + (currentSize * factor) / 100);
};

const calculateShrink = (currentSize, factor) => {
  return  Math.floor(currentSize - (currentSize * factor) / 100);
};

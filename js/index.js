const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function title_mouseEventHandler(event)
{
  // console.log(title.style.color);
  const currentColor = title.style.color;
  if( currentColor == BASE_COLOR )
    title.style.color = OTHER_COLOR;
  else
    title.style.color = BASE_COLOR;
}

function init()
{
  title.style.color = BASE_COLOR;
  // title.addEventListener("click", title_mouseEventHandler);
  title.addEventListener("mouseenter", title_mouseEventHandler);
}

init();

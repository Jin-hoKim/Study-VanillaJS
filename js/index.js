const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function title_mouseEventHandler(event)
{
  const currentClassName = title.className;
  // if( !title.classList.contains(CLICKED_CLASS) )
  //   title.classList.add(CLICKED_CLASS);
  // else
  //   title.classList.remove(CLICKED_CLASS);

  title.classList.toggle(CLICKED_CLASS);
}

function init()
{
  title.addEventListener("click", title_mouseEventHandler);
}

init();

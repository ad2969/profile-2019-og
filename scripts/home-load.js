/*******************************************************************************
      Cookies Added
*******************************************************************************/
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/*******************************************************************************
    Load Screen Anims
*******************************************************************************/

contactbutt.addEventListener( 'click', pullContactMenu, false);

document.getElementById('body-container').ontouchend = (e) => {
    e.preventDefault();
};

window.onload = () => {
  if(!readCookie("home-loaded")) {
    modalClosedFlag = 0;
    modalback.style.display = "block";
    setTimeout(() => { openModal() }, 1000);
    createCookie("home-loaded", "1", 1000);
  }
  else {
    if( window.innerWidth <= 800 && window.innerHeight >= 501 ) {
      setTimeout( () => { title.style.opacity = "1" }, 100 );
      setTimeout( () => { showText( mainDiv, words[0], maxLength ) }, 1500 );
      setTimeout( () => { switchText() }, switchDelay + 1500 );
      setTimeout( () => { play.classList.toggle('active') }, 1500);
    }
    else {
      setTimeout( () => { title.style.opacity = "1" }, 1000 );
      setTimeout( () => { showText( mainDiv, words[0], maxLength ) }, 2000 );
      setTimeout( () => { switchText() }, switchDelay + 2000 );
      setTimeout( () => { play.classList.toggle('active') }, 3000);
    }
    modalClosedFlag = 1;
    menu.style.display = "flex";
    updateScene();
    window.addEventListener('resize', updateScene);
    glitchEffect();
  }
}

// brandimg.classList.toggle('active');

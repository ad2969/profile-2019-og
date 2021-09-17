// var brandimg = document.getElementsByClassName('brand-img')[0];
var play = document.getElementsByClassName('play')[0];
var playdiv = document.getElementsByClassName('play-div')[0];

/*******************************************************************************
*******************************************************************************/

// CONTACT MENU

var contactbutt = document.getElementsByClassName('contact-button')[0];
var contact1 = document.getElementsByClassName('contact-1')[0];
var contact2 = document.getElementsByClassName('contact-2')[0];
var contact3 = document.getElementsByClassName('contact-3')[0];

var contactimg1 = document.getElementsByClassName('close-contact-tab-img')[0];
var contactimg2 = document.getElementsByClassName('close-contact-tab-img')[1];
var contacthandler = true;

var pullContactMenu = function() {
  if(contact1.classList.length == 1) {  // if bar hidden
    document.getElementsByClassName("contact-tab")[0].style.display = "block";
    contact1.classList.toggle('active');
    setTimeout(function() {contact2.classList.toggle('active')}, 100);
    setTimeout(function() {contact3.classList.toggle('active')}, 200);
    setTimeout(function() {contactimg1.classList.toggle('active')}, 50);
    contactimg2.classList.toggle('active');
    contacthandler = false;
    setTimeout(function() {contacthandler = true}, 800);
  }
  else {  // if bar is being shown
    contactH1.classList.remove('special-highlight');
    if(contact1.classList[1].indexOf('hidden') > -1 | contacthandler == false) {} // bug fix
    else if(contact1.classList[1].indexOf('active') > -1) {
      contact1.classList.toggle('active');
      contact2.classList.toggle('active');
      contact3.classList.toggle('active');
      contactimg1.classList.toggle('active')
      contactimg2.classList.toggle('active');

      contact1.classList.toggle('hidden');
      contact2.classList.toggle('hidden');
      contact3.classList.toggle('hidden');
      contactimg1.classList.toggle('hidden');
      contactimg2.classList.toggle('hidden');

      // remove hidden
      setTimeout(function() {contact1.classList.toggle('hidden')}, 800);
      setTimeout(function() {contact2.classList.toggle('hidden')}, 800);
      setTimeout(function() {contact3.classList.toggle('hidden')}, 800);
      setTimeout(function() {document.getElementsByClassName("contact-tab")[0].style.display = "none"}, 800);
      setTimeout(function() {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(function() {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}


/*******************************************************************************
    Title Scripts
*******************************************************************************/

/*	Customizable
*******************************************************************************/
var words = ["An Electrical Engineer  ",
             "A Passionate Programmer ",
             "An Aspiring Entrepreneur"];
// 24 Characters in each
var maxLength;  // Maximum number of letters in 'words'
var wipeTime = 5;  // Time to delay between wiping letters
var printTime = 10;  // Time delay when showing letters
var switchDelay = 5000;  // Time to pause between switches

/*	Variables
*******************************************************************************/

var position = 0;

var title = document.getElementsByClassName( 'title' )[0];
var newSpan = document.createElement( 'span' );
var mainDiv = document.getElementById( 'st' );

/*	Functions
*******************************************************************************/

function findLength() {
  let length = 0;
  for( let i = 0; i < words.length; i++ ) {
    if( words[i].length > length ) length = words[i].length;
  }
  return length;
}

function initializeDivs( length ) {
  mainDiv.innerHtml = "";
  for( let i = 0; i < length; i++ ) {
    newSpan = document.createElement('span');
    newSpan.className = "letter";
    mainDiv.appendChild( newSpan );
  }
}

function showText( node, string, length ) {
  let letters = string.toString().split("");
  for( let i = 0; i < length; i++ ) {
    node.children[i].textContent = letters[i];
    setTimeout( () => {
      node.children[i].classList.add('scaling-text__letter--show')
    }, i * printTime );
  }
}

function removeText( node, length ) {
  for( let i = 0; i < length; i++ ) {
    setTimeout( () => {node.children[i].classList.remove('scaling-text__letter--show')}, i * wipeTime );
  }
}

function switchText( ) {
  removeText( mainDiv, maxLength );
  if(position == words.length - 1) {
    setTimeout( () => { showText( mainDiv, words[0], maxLength ) }, maxLength * wipeTime );
    position = 0;
  }
  else {
    position++;
    setTimeout( () => { showText( mainDiv, words[position], maxLength ) }, maxLength * wipeTime );
   }
  setTimeout( () => { switchText() }, switchDelay );
}

/*	Initialization and function calls
*******************************************************************************/

maxLength = findLength();
console.log( maxLength );
initializeDivs( maxLength );


/*******************************************************************************
    Animation and Picture Data (Base64)
*******************************************************************************/

var menu = document.getElementsByClassName('menu')[0];
var menubutton = document.getElementsByClassName('menu-open')[0];
var menuopenbutton = document.getElementsByClassName('menu-open-button')[0];
var canvas = document.getElementById("scene");
var canvas2 = document.getElementsByClassName("scene-2")[0];
var ctx = canvas.getContext("2d");
var particles = [];
var zoom = 2.5;
var particlesLoaded = 0;
var imageLoaded = 0;
if( window.innerWidth <= 400) {
  if( window.innerHeight >= 800) zoom = 2.2;
  else zoom = 1.5;
}
else if( window.innerWidth <= 800) {
  if(window.innerHeight <= 400) zoom = 1;
  else if(window.innerHeight <= 600) zoom = 1.5;
  else if(window.innerHeight <= 1000) zoom = 2;
  else zoom = 2.5;
}
else {
  if(window.innerHeight <= 400) zoom = 1;
  else if(window.innerHeight <= 600) zoom = 2;
}
var png = new Image();
png.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iODRBMTAxRDFBMzY2NUY4QjNENDFEOTg1NjNDRTYwRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0OTU5ODU4MkQ2MTFFOUIwNTVEODc3OTUxNDE5RTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI0OTU5ODQ4MkQ2MTFFOUIwNTVEODc3OTUxNDE5RTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5M2NkMjEtNDQ5YS1lMjRiLWI2NDgtZjAxNzc5NGFjZjBmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGRjNDU1NDktODJiMi0xMWU5LTg0YWItZWMyM2E3Mjk0YTgy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";

var render = () => {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0, j = particles.length; i < j; i++) {
    var particle = particles[i];
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x1*zoom, particle.y1*zoom, 2, 2);
  }
};

function drawScene() {
  canvas.width = png.width*zoom;
  canvas.height = png.height*zoom;

  ctx.drawImage(png, 0, 0);

  var data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var y = 0, y2 = data.height; y < y2; y+=2) {
    for (var x = 0, x2 = data.width; x < x2; x+=2) {
        var particle = {
          x0: x,
          y0: y,
          x1: png.width / 2,
          y1: png.height / 2,
          color: "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")",
          speed: Math.random() * 4 + 2
        };
        TweenMax.to(particle, particle.speed, {
          x1: particle.x0,
          y1: particle.y0,
          delay: y / 130,
          ease: Elastic.easeOut
        });
        particles.push(particle);
      }
  }
  requestAnimationFrame(render);
  particlesLoaded = 1;
}

function imageScene() {
  var sceneImage = document.getElementsByClassName('scene-img')[0];
  sceneImage.setAttribute('src','./media/portrait.png');
  setTimeout(() => { sceneImage.style.opacity = "1" }, 500);
  imageLoaded = 1;
}

function updateScene() {
  if( window.innerWidth <= 800 && window.innerHeight >= 501 ) {
    canvas.style.display = "none";
    canvas2.style.display = "unset";

    if( !imageLoaded ) {
      if( menubutton.checked == true ) { playdiv.classList.add('moveaside') }
      menubutton.addEventListener('click', () => { playdiv.classList.toggle('moveaside') });
      imageScene();
    }
  }
  else if( window.innerWidth >= 501 && window.innerWidth <= 1050 && window.innerHeight <= 800 ) {
    canvas.style.display = "none";
    canvas2.style.display = "unset";

    if( !imageLoaded ) {
      if( menubutton.checked == true ) { playdiv.classList.add('moveaside') }
      menubutton.addEventListener('click', () => { playdiv.classList.toggle('moveaside') });
      imageScene();
    }
  }
  else {
    canvas.style.display = "unset";
    canvas2.style.display = "none";

    if( particlesLoaded ) {}
    else if( imageLoaded ) {
      canvas.style.display = "unset";
      if( menubutton.checked == true ) { playdiv.classList.remove('moveaside') }
      menubutton.removeEventListener('click', () => { playdiv.classList.toggle('moveaside') });
      imageLoaded = 0;
      drawScene();
    }
    else drawScene();
  }
}

/*******************************************************************************
    Transition Anims
*******************************************************************************/

function redirectIndex() {
  location.href = "./index.html";
  return false;
}
function redirectProjects() {
  location.href = "./projects.html";
  return false;
}

menuItem = document.getElementsByClassName('menu-item');

play.onclick = () => { prevPageTransition() };
menuItem[1].onclick = () => {
  nextPageTransition();
  setTimeout(() => { redirectProjects() }, 1200);
};
menuItem[2].onclick = () => { openModal() };

/*******************************************************************************
    Page Transitions
*******************************************************************************/

function prevPageTransition() {
  play.classList.add('fadeout-anims');
  play.classList.remove('active');

  setTimeout(() => {
    title.classList.add('fadeout-anims');
    menu.classList.add('fadeout-anims');
  }, 500);
  setTimeout(() => { menu.style.display = "none" }, 1000)
  setTimeout(() => { redirectIndex() }, 1200);
}

function nextPageTransition() {
  play.classList.add('fadeout-anims');
  play.classList.remove('active');
  setTimeout(() => {
    title.classList.add('fadeout-anims');
    menu.classList.add('fadeout-anims');
  }, 500);
  setTimeout(() => { menu.style.display = "none" }, 1000)
}

/*******************************************************************************
    Modal Load
*******************************************************************************/

var modalback = document.getElementsByClassName("modal-back")[0];
var modal = document.getElementsByClassName("modal")[0];
var modalClosedFlag = 1;

function openModal() {
  modalback.style.display = "block";
  modalback.style.opacity = "1";
  initializeColors();
  setTimeout(() => { modalback.style.backgroundColor = "rgba(0,0,0,0.8)"}, 50);
  setTimeout(() => { modal.style.height = "100%" }, 750);
  setTimeout(() => { modal.style.width = "100%" }, 750);
  setTimeout(() => {
    modal.addEventListener( "click", closeModal);
    modal.style.cursor = "pointer";
   }, 1500);
  setTimeout(() => { initializeModal() }, 1500);
}

function closeModal() {
  modal.style.cursor = "unset";
  modal.removeEventListener( "click", closeModal );
  modal.style.height = "0";
  modal.style.width = "0";
  setTimeout(() => { modalback.style.opacity = "0" }, 1000);
  setTimeout(() => { modalback.style.display = "none" }, 1500);
  setTimeout(() => { resetModal() }, 1500);

  if( modalClosedFlag == 0 ) {
    if( window.innerWidth <= 800 && window.innerHeight >= 501 ) {
      setTimeout( () => { title.style.opacity = "1" }, 100 );
      setTimeout( () => { showText( mainDiv, words[0], maxLength ) }, 1000 );
      setTimeout( () => { switchText() }, switchDelay + 1000 );
      setTimeout( () => { play.classList.add('active') }, 1500); }
    else {
      setTimeout( () => { title.style.opacity = "1" }, 1500 );
      setTimeout( () => { showText( mainDiv, words[0], maxLength ) }, 2000 );
      setTimeout( () => { switchText() }, switchDelay + 2000 );
      setTimeout( () => { play.classList.add('active') }, 3000 );
    }
    setTimeout(() => {
      menu.style.display = "flex";
      updateScene();
      window.addEventListener('resize', updateScene);
    }, 2000);
    glitchEffect();
  }
  modalClosedFlag = 1;
}

/*******************************************************************************
    Modal Contents
*******************************************************************************/

var colorArray = [
  '#7f00ff',
  '#ff00ff',
  '#0000ff',
  '#007fff',
  '#00ffff'
];
var covers = document.getElementsByClassName('cover');
var texts = document.getElementsByClassName('text');
function randomColor() {
  return colorArray[Math.floor(Math.random()*colorArray.length)];
}
function initializeColors() {
  for( let i = 0; i < covers.length; i++ ) {
    covers[i].style.backgroundColor = randomColor();
  }
}
function initializeModal() {
  for( let i = 0; i < covers.length; i++ ) {
    setTimeout( () => {
      covers[i].classList.add('active');
      texts[i].classList.add('active');
    }, i * 50);
  }
}

function resetModal() {
  for( let i = 0; i < covers.length; i++ ) {
    covers[i].classList.remove('active');
    texts[i].classList.remove('active');
  }
}

/*	Contact Link
*******************************************************************************/
var contactLink = document.getElementById('contact-link');
var contactH1 = document.getElementsByClassName('contact-h1')[0];
contactLink.onclick = () => {
  closeModal();
  setTimeout( () => { pullContactMenu() }, 1500 );
  setTimeout( () => { contactH1.classList.add('special-highlight') }, 2000 );
}

/*******************************************************************************
    Background Glitch Effect
*******************************************************************************/
var glitchback1 = document.getElementsByClassName('glitch-back')[0];
var glitchback2 = document.getElementsByClassName('glitch-back-2')[0];

function glitchEffect() {
  glitchback1.classList.toggle('active-inf');
  glitchback2.classList.toggle('active-inf');

  setTimeout(() => {
    glitchback1.classList.toggle('active-inf');
    glitchback2.classList.toggle('active-inf');
  }, 1000);

  setTimeout(() => {
    glitchEffect();
  }, 10000);
}

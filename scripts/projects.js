var brandimg = document.getElementsByClassName('brand-img')[0];

/*
  ____      _      ____     ___    _   _   ____    _____   _
 / ___|    / \    |  _ \   / _ \  | | | | / ___|  | ____| | |
| |       / _ \   | |_) | | | | | | | | | \___ \  |  _|   | |
| |___   / ___ \  |  _ <  | |_| | | |_| |  ___) | | |___  | |___
 \____| /_/   \_\ |_| \_\  \___/   \___/  |____/  |_____| |_____|

*******************************************************************************/

var carousel = document.querySelector('.carousel');
var carouselpage = document.getElementsByClassName('carousel_page');
var scene = document.querySelector('.scene');
var cellNum = 8;
var activeCells = 5;

var focusPage = 2;
var rotate = 0;
var checkRotate = 0;
var temp = 0;
var calc = 0;

var title = document.getElementsByClassName('title');
var description = document.getElementsByClassName('description');

var navButton = document.getElementsByClassName('nav-button');

function rotateCarousel() {
  if(focusPage >= cellNum) focusPage = 0;
  if(focusPage < 0) focusPage = cellNum - 1;

  var contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  while(contentCheck == 0 && rotate == 0) {
    focusPage++;
    if(focusPage >= cellNum) focusPage = 0;
    contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  }
  while(contentCheck == 0 && rotate == 1) {
    focusPage--;
    if(focusPage < 0) focusPage = cellNum - 1;
    contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  }
  var angle = focusPage / cellNum * -360;
  carousel.style.transform = 'translateZ(-1207px) rotateY(' + angle + 'deg)';
  setTimeout(() => {
    title[focusPage].classList.toggle('active');
    title[focusPage].style.setProperty('opacity', '1');
  }, 1300);
  setTimeout(() => {description[focusPage].classList.toggle('active')}, 1400);
  navUpdate();
}

var prevButton = document.querySelector('.previous-button');
var nextButton = document.querySelector('.next-button');

carousel.classList.toggle('active');
setTimeout(() => {
  title[focusPage].classList.toggle('active');
  description[focusPage].classList.toggle('active');
  prevButton.classList.toggle('active');
  nextButton.classList.toggle('active');
  for(let i = 0; i < activeCells; i++) {
    navButton[i].classList.toggle('active');
  }
  navUpdate();
}, 2000);

function navHandler(input) {
  if(checkRotate == 0) {
    title[focusPage].style.setProperty('opacity', '0');
    temp = focusPage;
    setTimeout(() => {title[temp].classList.toggle('active')}, 1000);
    description[focusPage].classList.toggle('active');
    checkRotate = 1;
    setTimeout(() => {checkRotate = 0}, 1500);
    focusPage = input;
    rotateCarousel();
  }
}

function navUpdate() {
  for(let i = 0; i < activeCells; i++) {
    navButton[i].style.setProperty('background-color' , '#919191');
  }
  navButton[focusPage].style.setProperty('background-color' , '#fff');
}

prevButton.addEventListener( 'click', function() {
  rotate = 1;
  calc = (focusPage - 1) < 0 ? activeCells : focusPage - 1;
  navHandler(calc);
});
nextButton.addEventListener( 'click', () => {
  rotate = 0;
  calc = (focusPage + 1) >= activeCells ? 0 : focusPage + 1;
  navHandler(calc);
});
for(let i = 0; i < activeCells; i++) {
  navButton[i].addEventListener( 'click', () => {
    rotate = 0;
    navHandler(i);
  });
}

/*******************************************************************************
*******************************************************************************/

/*
__  __    ___    ____       _      _
|  \/  |  / _ \  |  _ \     / \    | |
| |\/| | | | | | | | | |   / _ \   | |
| |  | | | |_| | | |_| |  / ___ \  | |___
|_|  |_|  \___/  |____/  /_/   \_\ |_____|

********************************************************************************/

var buttons = document.getElementsByClassName('flex');
var modalback = document.getElementsByClassName("modal-back")[0];
var modal = document.getElementsByClassName("modal")[0];
var close = document.getElementsByClassName("close")[0];
var tempNode;

/*    FUNCTIONS
********************************************************************************/

function openModal() {
  modalback.style.display = "block";
  setTimeout(() => { modalback.style.opacity = "1" }, 50);
  setTimeout(() => { modal.style.height = "80%" }, 550);
  setTimeout(() => { modal.style.width = "80%" }, 1500);
}

function closeModal() {
  modal.style.height = "0";
  setTimeout(() => { modal.style.width = "0" }, 1000);
  setTimeout(() => { modalback.style.opacity = "0" }, 2000);
  setTimeout(() => { modalback.style.display = "none" }, 2500);
}

function buttonEvent( event ) {
  tempNode = event.currentTarget;
  event.currentTarget.removeEventListener( "click", buttonEvent );
  insertNode( event.currentTarget.info );
  openModal();
  setTimeout(() => {
    close.addEventListener( "click", closeModalEvent );
    window.addEventListener( "click", closeModalEvent2 );
  }, 2500);
}

function closeModalEvent( event ) {
  setTimeout(() => {
    close.removeEventListener( "click", closeModalEvent );
    window.removeEventListener( "click", closeModalEvent2 );
    tempNode.addEventListener( "click", buttonEvent );
  }, 2500);
  closeModal();
}

function closeModalEvent2( event ) {
  if (event.target == modalback) {
    setTimeout(() => {
      close.removeEventListener( "click", closeModalEvent );
      window.removeEventListener( "click", closeModalEvent2 );
      removeNodes();
      tempNode.addEventListener( "click", buttonEvent );
    }, 2500);
    closeModal();
  }
}

/*    INFO
********************************************************************************/
/* Template
info[0] = {
  mainsrc : "./media/project-media/",
  displaysrc : "./media/project-media/",
  title : "",
  author : "Authors: ",
  proj : "",
  desc1 : "",
  desc2 : "",
  desc3 : "",
  desc4 : "",
  list : "",
  bullet1 : "",
  bullet2 : "",
  bullet3 : "",
  bullet4 : ""
} */

var info = [];

info[38] = {
  mainsrc : "./media/project-media/FPGA-microchip.png",
  displaysrc : "./media/project-media/FPGA.png",
  title : "FPGA RISC Machine",
  author : "Authors: Clarence Adrian, Jacky Yu",
  proj : "November 2018, Academic Individual Project",
  desc1 : "Using Verilog HDL to design a FPGA (Field-Programmable Gate Array), I built a simple Reduced Instruction Set Computer (RISC) by designing computer datapaths controlled by a Moore  type finite state machine. The RISC machine is capable of receiving, decoding, and running multiple 16-bit instruction sets from fetching user input or by navigating encoded instructions using a load-enabled program counter. Simple instructions include loading/storing from Read-Write memory-declared registers, utilizing logic-block registers and, using an arithmetic logic unit, computing arithmetic problems as complex as floating-point matrix multiplications.",
  desc2 : "In order to ensure that the RISC machine was “Turing-complete”, the RISC machine was made to support branches as additional instruction sets in order to support loops and function calls. As a bonus, a working interrupt service routine (ISR) was included to support interrupting the main program flow through user input.",
  desc3 : "Due to the nature of the project, a rigorous and efficient development sequence was used, which included detailed design before its manufacturing and techniques in revision testing (git) and rigorous regression testing conducted after each iteration/change. Verilog testbenches and waveform analysis were used to constantly test the functionality of the machine.",
  desc4 : "",
  list : "Hardware/Software: ",
  bullet1 : "ModelSim-Altera (Verilog HDL)",
  bullet2 : "Intel Quartus Prime",
  bullet3 : "Terasic Cyclone V DE1-SoC ARM Cortex-A9 FPGA",
  bullet4 : "Altera Monitor Program"
}
info[40] = {
  mainsrc : "./media/project-media/ORC-real.png",
  displaysrc : "./media/project-media/ORC.png",
  title : "Oven Reflow Controller",
  author : "Authors: Clarence Adrian, Jian Gao, Matthew Lee, Edward Luo, Jojo Windsor-Lewis, Jacky Yu",
  proj : "February 2019, Academic Team Project",
  desc1 : "The Oven Reflow Controller is a prototype program that is used to control a basic lab oven to conduct reflow soldering, a process of permanently soldering small surface mount components on a printed circuit board (PCB). Having a specific thermal profile, the oven needed to be precise in terms of its operating temperature and time throughout the process, to prevent overheating and burning the solder paste and PCB.",
  desc2 : "The main components of the oven controller includes a general-purpose thermocouple and serial connections from the microcontroller to the thermocouple and SSR (solid state relay) controlling the oven’s power. Programming was done almost entirely in assembly, and testing done through simple python plots and GUIs. The reflow oven parameters (temperature, time) were fully adjustable through pushbuttons connected to GPIO pins on the microcontroller, and real-time temperature readings could be observed directly from either the LCD screen or through python plots.",
  desc3 : "A Mealy state machine was used to control the different stages of the reflow process, with real-time input from the K-type thermocouple constantly injected and checked by the program. In the case of errors, the program automatically shuts down the oven through its connection to the solid state relay. Otherwise, the program seeks user attention using audio modules installed in its circuitry. Additionally, simple password protection through the PuTTy platform was implemented to prevent accidental or misuse of the program.",
  desc4 : "LINK: https://gist.github.com/ad2969/b151c8feb8e94b5c0679a81dc4b5b404",
  list : "Hardware/Software: ",
  bullet1 : "Atmel AT89 LP51RC2 Microcontroller",
  bullet2 : "CrossIDE (8051 Assembly)",
  bullet3 : "Makefiles (.mkf)",
  bullet4 : "pySerial (python)"
}
info[45] = {
  mainsrc : "./media/project-media/CPR.png",
  displaysrc : "./media/project-media/CPR-team.jpg",
  title : "Coin-Picker Robot",
  author : "Authors: Clarence Adrian, Jian Gao, Matthew Lee, Edward Luo, Jojo Windsor-Lewis, Jacky Yu",
  proj : "March 2019, Academic Team Project",
  desc1 : "",
  desc2 : "",
  desc3 : "",
  desc4 : "",
  list : "Hardware/Software: ",
  bullet1 : "STM32F051 ARM Cortex-M0 microcontroller",
  bullet2 : "CrossIDE, GNU Linker (Embedded-C)",
  bullet3 : "Makefiles (.mkf)",
  bullet4 : "TKinter (python)"
}
info[47] = {
  mainsrc : "./media/project-media/hrm.png",
  displaysrc : "./media/project-media/hrm-circuit.jpg",
  title : "Heart-Rate Therapy Device",
  author : "Authors: Clarence Adrian, Jojo Windsor-Lewis",
  proj : "February 2019, Academic Project",
  desc1 : "Worked with a biomedical engineering student to construct and design a therapy device using concepts in receptive music therapy and simple heart-rate detection.",
  desc2 : "Hardware-side, a simple photoelectric heart-rate detector was designed and constructed using simple household materials: a clothe peg, LED, ribbon cable, and an infrared phototransistor. Output from the sensor were boarded onto a circuit with equipped with amplifiers and simple filters, and the option of a Schmitt Trigger Comparator to ensure that a clean signal is passed onto the microcontroller. The period of the signal was calculated and converted into BPM (beats per minute), which was sent through a serial port and displayed on a simple graphical user interface (GUI) coded in python.",
  desc3 : "Software-side, a simple GUI was designed to visualize the user’s heart-rate, provide user interfacing, and return therapeutic feedback. Based on the user’s settings and measured heart-rate, the interface will start playing therapeutic music in attempt to alleviate physical, emotional, or mental distress. The user can enter his/her age, gender, and body weight, and save them to named profiles, which will be used to alter way the criteria and the way the device responses.",
  desc4 : "",
  list : "Hardware/Software: ",
  bullet1 : "EFM8LB1",
  bullet2 : "CrossIDE, GNU Linker (Embedded-C)",
  bullet3 : "Makefiles (.mkf)",
  bullet4 : "TKinter, pySerial (python)"
}
info[49] = {
  mainsrc : "https://www.hubspot.com/hubfs/assets/hubspot.com/home/2018/Integrations_Illustration@2x.png",
  displaysrc : "./media/project-media/clock.jpg",
  title : "Microcontroller Alarm Clock",
  author : "Author: Clarence Adrian",
  proj : "January 2019, Academic Individual Project",
  desc1 : "The Microcontroller Alarm Clock implements the AT89 microcontroller, using simple timers, function calls and loops linked through CrossIDE. The entire program was fully coded in 8051 Assembly and relies on serial/pin connections to receive input from pushbuttons and output to a simple 7-segment LCD display. A simple Mealy finite state machine was used to define the alarm clock’s different modes of operation. Some of the extra features it has includes: multiple weekday/weekend alarms, fully functional editable clock, and a simple stopwatch.",
  desc2 : "Demo Videos:",
  desc3 : "- https://youtu.be/kc6fSWSgGA4",
  desc4 : "- https://youtu.be/IB4a5bBmHK8",
  list : "Hardware/Software: ",
  bullet1 : "Atmel AT89 LP51RC2 Microcontroller",
  bullet2 : "CrossIDE (8051 Assembly)",
  bullet3 : "BO230XS Serial, LCD Displays, MOSFETs",
  bullet4 : "Simple Circuit Design"
}

var main_img = document.getElementById('main-img');
var display_img = document.getElementById('display-img');
var project_title = document.getElementById('title');
var author = document.getElementById('author');
var proj = document.getElementById('proj');
var desc1 = document.getElementById('desc-p1');
var desc2 = document.getElementById('desc-p2');
var desc3 = document.getElementById('desc-p3');
var desc4 = document.getElementById('desc-p4');
var list = document.getElementById('bp-1');
var bullet1 = document.getElementById('bp-c1');
var bullet2 = document.getElementById('bp-c2');
var bullet3 = document.getElementById('bp-c3');
var bullet4 = document.getElementById('bp-c4');

// FUNCTION DECLARATIONS

function insertNode( info ) {
  main_img.src = info.mainsrc;
  display_img.src = info.displaysrc;
  project_title.innerHTML = info.title;
  author.innerHTML = info.author;
  proj.innerHTML = info.proj;
  desc1.innerHTML = info.desc1;
  desc2.innerHTML = info.desc2;
  desc3.innerHTML = info.desc3;
  desc4.innerHTML = info.desc4;
  list.innerHTML = info.list;
  bullet1.innerHTML = info.bullet1;
  bullet2.innerHTML = info.bullet2;
  bullet3.innerHTML = info.bullet3;
  bullet4.innerHTML = info.bullet4;
}

function removeNodes() {
  main_img.src = "https://www.hubspot.com/hubfs/assets/hubspot.com/home/2018/Integrations_Illustration@2x.png";
  display_img.src = "http://placehold.it/1920x1080";
  project_title.innerHTML = "";
  author.innerHTML = "";
  proj.innerHTML = "";
  desc1.innerHTML = "";
  desc2.innerHTML = "";
  desc3.innerHTML = "";
  desc4.innerHTML = "";
  list.innerHTML = "";
  bullet1.innerHTML = "";
  bullet2.innerHTML = "";
  bullet3.innerHTML = "";
  bullet4.innerHTML = "";
}

/*    DECLARATIONS
********************************************************************************/

var fpga = buttons[38];
fpga.info = info[38];
fpga.addEventListener( "click", buttonEvent, false );
var orc = buttons[40];
orc.info = info[40];
orc.addEventListener( "click", buttonEvent, false );
var cpr = buttons[45];
cpr.info = info[45];
cpr.addEventListener( "click", buttonEvent, false );
var heart = buttons[47];
heart.info = info[47];
heart.addEventListener( "click", buttonEvent, false );
var clock = buttons[49];
clock.info = info[49];
clock.addEventListener( "click", buttonEvent, false );

/*******************************************************************************
*******************************************************************************/

/*
  ____    ___    _   _   _____      _       ____   _____
 / ___|  / _ \  | \ | | |_   _|    / \     / ___| |_   _|
| |     | | | | |  \| |   | |     / _ \   | |       | |
| |___  | |_| | | |\  |   | |    / ___ \  | |___    | |
 \____|  \___/  |_| \_|   |_|   /_/   \_\  \____|   |_|

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

contactbutt.addEventListener( 'click', pullContactMenu, false);

setTimeout(() => {
  brandimg.classList.toggle('active');
}, 2000);
setTimeout(() => {scene.style.borderStyle = 'solid'}, 2500);

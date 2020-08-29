const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const cont = document.getElementById('cont');


const lohjinform = document.getElementById('lohjinform');
const fghn = document.getElementById('fghn');


const backToTopButton = document.getElementById('back-to-top-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navLinks.classList.add('fade');
    
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navLinks.classList.remove('fade');
  }
});

signUpButton.addEventListener('click', () => {
	cont.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	cont.classList.remove("right-panel-active");
});

var modal = document.getElementById('loginIdd');
window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }
        }


window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300){ // show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else  { // hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function(){
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", /*smoothScrollBackToTop*/ backToTop );

function backToTop() {
  setTimeout(function(){
      window.scrollTo(0, 0);
      }, 250);
  
}

// this code dont worlk

  // function smoothScrollBackToTop() {
  //   const targetPosition = 0;
  //   const startPosition = window.pageYOffset;
  //   const distance = targetPosition - startPosition;
  //   const duration = 750;
  //   let start = null;

  //   window.requestAnimationFrame(Step);

  //   function Step(timestamp) {
  //     if (!start) start = timestamp;
  //     const proogress = timestamp - start;
  //     window.scrollTo(0, easeIOutCubic(proogress, startPosition, distance, duration));
  //     if (proogress < duration).window.requestAnimationFrame(Step);
  //   }
  // }

  // function easeIOutCubic(t, b, c, d) {
  //   t /= d/2;
  //   if (t < 2) return c/2*t*t*t + b;
  //   t -= 2;

  //   return c/2*(t*t*t + 2) + b;
  // };


// this code dont worlk


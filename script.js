// Nathan Shulkin
// Basic Template script


const app = document.getElementById('root');



// drop down button click
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClick() {
  document.getElementById("myDropdown").classList.toggle("show");
  var animate = createKeyframeAnimation();
  window.alert(animate)
  document.getElementById("myDropdown").setAttribute(animate);  
  
  document.getElementById("myDropdown").animate({
                                                  opacity:'+=0.2',
                                                  height: '+=50px',
                                                  margin: '-=20px',
                                                });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function calculateCollapsedScale () {
  // The menu title can act as the marker for the collapsed state.
  const collapsed = ddown.getBoundingClientRect();
  // Whereas the menu as a whole (title plus items) can act as
  // a proxy for the expanded state.
  const expanded = ddown.getBoundingClientRect();
  return {
    x: collapsed.width / expanded.width,
    y: collapsed.height / expanded.height
  };
}

function ease (v, pow=4) {
  return 1 - Math.pow(1 - v, pow);
}

function createKeyframeAnimation () {
  // Figure out the size of the element when collapsed.
  let {x, y} = calculateCollapsedScale();
  let animation = '';
  let inverseAnimation = '';
  
  for (let step = 0; step <= 100; step++) {

    // Remap the step value to an eased one.
    let easedStep = ease(step / 100);

    // Calculate the scale of the element.
    const xScale = x + (1 - x) * easedStep;
    const yScale = y + (1 - y) * easedStep;

    animation += `${step}% {
      transform: scale(${xScale}, ${yScale});
    }`;

    // And now the inverse for the contents.
    const invXScale = 1 / xScale;
    const invYScale = 1 / yScale;
    inverseAnimation += `${step}% {
      transform: scale(${invXScale}, ${invYScale});
    }`;

  }

  return `
  @keyframes menuAnimation {
    ${animation}
  }

  @keyframes menuContentsAnimation {
    ${inverseAnimation}
  }`;
}


function twitOpen() {
  window.open("https://twitter.com");
}

function fbOpen() {
  window.open("https://facebook.com/");
}

function instaClick() {
  window.open("https://instagram.com/");
}

function joinClick() {
  alert("Thank You For Wanting To Join the Revolution.");
}

function usClick() {
  window.scrollTo(0, 1775);
}

function learnClick() {
  alert("Books to Read.");
}

function aboutClick() {
  alert("working on the About Us page.");
}


function favClick() {
  window.scrollTo(0, 2100);
}


// containers for differnt pages
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');

const anotherContainer = document.createElement('div');
anotherContainer.setAttribute('class', 'container');



// create clickable menu for webpage, add it to dropdown 
const menuDDown = document.createElement('div');
menuDDown.setAttribute('id', 'myDropdown');
menuDDown.setAttribute('class', 'dropdown-content');

const custom = document.createElement('div');
custom.setAttribute('class', 'menuCard');

custom.addEventListener("click", joinClick);

const customTxt = document.createElement('p');
customTxt.textContent="Join Us";

const cater = document.createElement('div');
cater.setAttribute('class', 'menuCard');
const caterTxt = document.createElement('p');
caterTxt.textContent="Learn More";

cater.addEventListener("click", learnClick);


const about = document.createElement('div');
about.setAttribute('class', 'menuCard');
const aboutTxt = document.createElement('p');
aboutTxt.textContent="About Us";

about.addEventListener("click", aboutClick);


const favorites = document.createElement('div');
favorites.setAttribute('class', 'menuCard');
const favTxt = document.createElement('p');
favTxt.textContent="Our Favorites";

favorites.addEventListener("click", favClick);


const us = document.createElement('div');
us.setAttribute('class', 'menuCard');
const usTxt = document.createElement('p');
usTxt.textContent="Find Us Online";

us.addEventListener("click", usClick);


//add menu
menuDDown.appendChild(custom);
menuDDown.appendChild(cater);
menuDDown.appendChild(about);
menuDDown.appendChild(favorites);
menuDDown.appendChild(us);
custom.appendChild(customTxt);
cater.appendChild(caterTxt);
favorites.appendChild(favTxt);
us.appendChild(usTxt);
about.appendChild(aboutTxt);


//head image
const head = document.createElement('div');
head.setAttribute('class', 'logoCard');

const headImg = document.createElement('img');
headImg.src="rainbowDD.jpg";

head.appendChild(headImg);

const bio = document.createElement('h2');
bio.textContent="We Are Socialists Here For Revolution, Not Reform.";

// create contact description
const contact = document.createElement('h2');
contact.textContent="Thank You For Participating In The Revolution, Have A Nice Day.";



// PIC
const PIC = document.createElement('div');
PIC.setAttribute('class', 'container');

const picCard = document.createElement('div');
picCard.setAttribute('class', 'fullCard');

const picHead = document.createElement('h1');
picHead.textContent = "The Prison Industrial Complex";

const picText = document.createElement('p');
const picText1 = document.createElement('p');
const picText2 = document.createElement('p');
const picText3 = document.createElement('p');
const picText4 = document.createElement('p');
const picText5 = document.createElement('h2');

picText.textContent = "When we talk about the prison industrial complex (PIC) we are not just talking about prisons and jails. \n\n";
picText1.textContent = "The PIC is a complex system of laws, surveillance, punishment, and exploitation that is all but impossible to escape. \
                        It is made up of companies, organizations, and media outlets that profit off of the US prison system."; 

picText2.textContent = "The overall goal of the PIC is to is to incarcerate (mostly poor) people and keep those people incarcerated. \
                        Once incarcerated, the PIC is able to exploit and torment a person physically, mentally, and sexually. \
                        This, coupled with the fact that the PIC does nothing to rehabilitate an individual, means that incarcerated folks \
                        have no good opportunities to re-enter society and often times end up incarcerated again, trapped in a vicious cycle.";

picText3.textContent = "The PIC works directly with oppressors to remove the oppressed from the oppressor’s view; for this reason, \
                        the PIC directly targets those the oppressor does not like. In our society, the PIC directly targets BIPOC and LGBTQA+ individuals.";

picText4.textContent = "The PIC complex has grown larger and more powerful while also doing less and less to help incarcerated folks. \
                        The PIC is able to thrive because we as a society see the incarcerated as less deserving or unworthy, \
                        so any legislation aimed to help the incarcerated is almost always immediately shot down.";

picText5.textContent = "But why do we automatically see anyone incarcerated as inferior or deserving of less?";


const reactive = document.createElement('div');
reactive.setAttribute('class', 'card');
reactive.style.backgroundImage = "url('negativeBlackDD.png')";
const reactiveText = document.createElement('h1');
const reactiveText1 = document.createElement('p')
reactiveText.textContent = "The PIC is reactive.";
reactiveText1.textContent = "It waits for you to make a mistake and then punishes you for that mistake." 

reactive.appendChild(reactiveText);
reactive.appendChild(reactiveText1);

const active = document.createElement('div');
active.setAttribute('class', 'rightCard');
active.style.backgroundImage = "url('negativeBlackDD.png')";
const activeText = document.createElement('h1');
const activeText1 = document.createElement('p')
activeText.textContent = "We are active.";
activeText1.textContent = "We provide you the necessary care and opportunities, so you don’t have to make mistakes. \
                          And when you do, we want to work with you to find out why it happened and work toward it not happening again." 

active.appendChild(activeText);
active.appendChild(activeText1);


picCard.appendChild(picHead);
picCard.appendChild(picText);
picCard.appendChild(picText1);
picCard.appendChild(reactive);
picCard.appendChild(picText2);
picCard.appendChild(active);
picCard.appendChild(picText3);
picCard.appendChild(picText4);
picCard.appendChild(picText5);
PIC.appendChild(picCard);


// social media
const social = document.createElement('div');
social.setAttribute('class', 'container');

const findUs = document.createElement('h2');
findUs.textContent="Find Us Online";

//instagram
const insta = document.createElement('div');
insta.setAttribute('class', 'smallCard');
const instaLogo = document.createElement('img');
instaLogo.src="instagramLogo.png";
insta.appendChild(instaLogo);

// how to make stuff clickable
insta.addEventListener("click", instaClick);


//facebook
const fb = document.createElement('div');
fb.setAttribute('class', 'smallCard');
const fbLogo = document.createElement('img');
fbLogo.src="facebookLogo.png";
fb.appendChild(fbLogo);

fb.addEventListener("click", fbOpen);


//twitter
const twit = document.createElement('div');
twit.setAttribute('class', 'smallCard');
const twitLogo = document.createElement('img');
twitLogo.src="twitterLogo.png";
twit.appendChild(twitLogo);

twit.addEventListener("click", twitOpen);


// add to social
social.appendChild(findUs);
social.appendChild(fb);
social.appendChild(insta);
social.appendChild(twit);



// create drop down
const ddown = document.createElement('div');
ddown.setAttribute('class', 'dropbtn');
ddown.addEventListener("click", dropdownClick);
ddown.textContent="Ride or Die";

// put menu in dropdown
ddown.appendChild(menuDDown);


// add elements to mainContainer
mainContainer.appendChild(head);
mainContainer.appendChild(bio);
mainContainer.appendChild(PIC);
mainContainer.appendChild(social);
mainContainer.appendChild(contact);

// add elements to page
app.appendChild(ddown);
app.appendChild(mainContainer);


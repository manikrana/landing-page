/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const fragment = document.createDocumentFragment();
const navList = document.getElementById("navbar__list");
const sectionsList = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Function that hides navigation menu after 3 seconds
setTimeout(hideNavbar, 5000);

//hideNavbar function declaration
function hideNavbar() {
  document.querySelector(".navbar__menu").style.display = "none";
}

//Function that creates an li id (strips 'section' and prepends 'li')
function liIdGenerator(id) {
  const newId = id.replace("section", "li");
  return newId;
}

//Function that displays the menu again when mouse moves and hides it after 3 seconds
function showNavbar() {
  document.querySelector(".navbar__menu").style.display = "block";
  setTimeout(hideNavbar, 10000);
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < sectionsList.length; i++) {
  //Create an li element to hold the menu options
  let menuOption = document.createElement("li");
  //Assign an id to the li tag
  menuOption.setAttribute("id", "li" + (i + 1));
  //Create an anchor element to hold the section it would be pointing to
  let anchorElement = document.createElement("a");
  //Set the text of the anchor element by fetching it from the data-nav property of sections
  anchorElement.innerHTML = sectionsList[i].getAttribute("data-nav");
  //Set the attribute of the anchor element so that it points to the corresponding section of the page
  anchorElement.setAttribute("href", "#" + sectionsList[i].id);
  //Make anchor element a child of the li element
  menuOption.appendChild(anchorElement);
  menuOption.classList.add("menu__link");
  //Add the nested li and anchor elements to the document fragment
  fragment.appendChild(menuOption);
}
//Append the fragement to the ul element
navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function activate() {
  for (let i = 0; i < sectionsList.length; i++) {
    const box = sectionsList[i].getBoundingClientRect();
    if (box.top <= 600 && box.bottom >= 600) {
      const id = sectionsList[i].getAttribute("id");
      const liId = liIdGenerator(id);
      document.querySelector(`#${liId}`).classList.add("active");
      sectionsList[i].classList.add("your-active-class");
    } else {
      const id = sectionsList[i].getAttribute("id");
      const liId = liIdGenerator(id);
      document.querySelector(`#${liId}`).classList.remove("active");
      sectionsList[i].classList.remove("your-active-class");
    }
  }
}
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", function () {
  activate();
});

document.addEventListener("mousemove", function () {
  showNavbar();
});
// Build menu

// Scroll to section on link click

// Set sections as active

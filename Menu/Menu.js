const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};

// For stretch challenge - this method will be called if the user clicks anywhere outside the menu
function closeToggleMenu(event) {
  if (menu.classList.length === 2) {
    toggleMenu();
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu.
menuButton.addEventListener("click", event => {
  event.stopPropagation();
  toggleMenu();
});

// For Stretch challenge - Captures the click event on the html.
const htmlEle = document.querySelector("html");
htmlEle.addEventListener("click", event => {
  if (
    event.target.tagName !== "LI" &&
    event.target.tagName !== "UL" &&
    event.target.tagName !== "DIV"
  ) {
    closeToggleMenu(event);
  }
});

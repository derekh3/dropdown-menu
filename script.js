function menuObjectFactory(
  menuItemsObject,
  menuIcon,
  menuClass = "menu-dropdown",
  menuItemClass = "menu-item"
) {
  const menuElement = document.createElement("div");
  menuElement.classList.add(menuClass);
  let keys = Object.keys(menuItemsObject);

  keys.forEach((key) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add(menuItemClass);
    let a = document.createElement("a");
    let linkText = document.createTextNode(key);
    a.appendChild(linkText);
    a.href = menuItemsObject[key];
    menuItem.appendChild(a);
    menuElement.appendChild(menuItem);
  });

  menuIcon.onclick = () => {
    menuElement.classList.toggle("hidden");
  };

  return menuElement;
}

let menuIcon = document.querySelector(".menu");
let menuContainer = document.querySelector(".menu-container");
let menuItems = { "Item 1": "item1URL", "Item 2": "item2URL" };
let menuObject = menuObjectFactory(menuItems, menuIcon);
menuContainer.appendChild(menuObject);

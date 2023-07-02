import './sidebarstyle.css';
import './menustyle.css';
import menuImgNew from './menu.svg';

import { makeSidebar } from './sidebarMaker';

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active-sidebar');
}

function createDish(name, ingredients) {
  const dish = document.createElement('div');
  dish.classList.add('dish');

  const description = document.createElement('div');
  description.classList.add('description');

  dish.appendChild(description);

  const dishName = document.createElement('div');
  dishName.classList.add('dish-name');
  dishName.innerHTML = name;

  description.appendChild(dishName);

  const ingredientsDiv = document.createElement('div');
  ingredientsDiv.classList.add('ingredients');
  ingredientsDiv.innerHTML = ingredients;

  description.appendChild(ingredientsDiv);

  const line = document.createElement('div');
  line.classList.add('line');
  dish.appendChild(line);

  const price = document.createElement('div');
  price.innerHTML = '0.99$';
  dish.appendChild(price);

  return dish;
}

function loadMenu() {
  console.log('menu!!');
  const content = document.querySelector('#content');
  content.replaceChildren();

  // Append menu to the content
  const sidebar = makeSidebar();
  content.appendChild(sidebar);

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');

  const topRow = document.createElement('div');
  topRow.classList.add('top-row');
  menuWrapper.appendChild(topRow);

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-two');
  topRow.appendChild(menuButton);

  function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('active-sidebar');
  }
    menuButton.addEventListener('click', toggleSidebar);



  const menuImg = document.createElement('img');
  menuImg.src = '../src/menu.svg';
  menuImg.alt = 'menu';
  menuButton.appendChild(menuImg);

  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu-title');
  menuTitle.innerHTML = 'OUR MENU';
  topRow.appendChild(menuTitle);


  const appetizersTitle = document.createElement('div');
  appetizersTitle.classList.add('section-title');
  appetizersTitle.innerHTML = 'Appetizers';
  menuWrapper.appendChild(appetizersTitle);

  const garlicParmesanFries = createDish('Garlic Parmesan Fries', 'Crispy fries tossed in a flavorful blend of garlic and Parmesan cheese, served with a tangy dipping sauce.');
  menuWrapper.appendChild(garlicParmesanFries);

  const bruschettaTrio = createDish('Bruschetta Trio', 'A trio of classic Italian bruschetta featuring tomato and basil, creamy goat cheese and caramelized onions, and roasted red pepper with feta cheese.');
  menuWrapper.appendChild(bruschettaTrio);

  const mainsTitle = document.createElement('div');
  mainsTitle.classList.add('section-title');
  mainsTitle.innerHTML = 'Mains';
  menuWrapper.appendChild(mainsTitle);

  const petiteBistroBurger = createDish('Petite Bistro Burger', 'A juicy beef patty topped with cheddar cheese, caramelized onions, fresh lettuce, and tomato, served on a toasted brioche bun with a side of fries.');
  menuWrapper.appendChild(petiteBistroBurger);

  const grilledChickenCaesarSalad = createDish('Grilled Chicken Caesar Salad', 'Grilled chicken breast served on a bed of crisp romaine lettuce, tossed in a creamy Caesar dressing, topped with Parmesan cheese and garlic croutons.');
  menuWrapper.appendChild(grilledChickenCaesarSalad);

  const dessertsTitle = document.createElement('div');
  dessertsTitle.classList.add('section-title');
  dessertsTitle.innerHTML = 'Desserts';
  menuWrapper.appendChild(dessertsTitle);

  const assortedPastries = createDish('Assorted Pastries', 'A delightful selection of freshly baked pastries including flaky croissants, buttery danishes, and sweet cinnamon rolls.');
  menuWrapper.appendChild(assortedPastries);

  const dailySpecial = createDish('Daily Special', 'Ask your server about the special dessert creation prepared by our talented chef.');
  menuWrapper.appendChild(dailySpecial);

  const drinksTitle = document.createElement('div');
  drinksTitle.classList.add('section-title');
  drinksTitle.innerHTML = 'Drinks';
  menuWrapper.appendChild(drinksTitle);

  const icedCoffee = createDish('Iced Coffee', 'A refreshing blend of chilled coffee, served over ice with your choice of milk and sweetener.');
  menuWrapper.appendChild(icedCoffee);

  const freshlySqueezedLemonade = createDish('Freshly Squeezed Lemonade', 'A zesty and tangy lemonade made from freshly squeezed lemons, served over ice.');
  menuWrapper.appendChild(freshlySqueezedLemonade);

  const menuFooter = document.createElement('div');
  menuFooter.classList.add('menu-footer');
  menuFooter.innerHTML = 'Mock items generated by GPT :)';
  menuWrapper.appendChild(menuFooter);

  content.appendChild(menuWrapper);
}

export { loadMenu };
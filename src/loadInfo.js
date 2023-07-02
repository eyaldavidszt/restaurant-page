import './sidebarstyle.css';
import './infostyle.css';
import menuImgNew from './menu.svg';
// import './menustyle.css';
import { makeSidebar } from './sidebarMaker';


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active-sidebar');
}

function loadInfo() {
    const content = document.querySelector('#content');
    content.replaceChildren();
    const sidebar = makeSidebar();
    content.appendChild(sidebar);
  
    console.log('info!');
    
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');

    const titleRow = document.createElement('div');
    titleRow.classList.add('title-row');
    infoWrapper.appendChild(titleRow);

    const titleInfo = document.createElement('div');
    titleInfo.classList.add('info-title');
    titleInfo.innerHTML = 'INFO';

    
    const menuButtonThree = document.createElement('button');
    menuButtonThree.classList.add('menu');
    menuButtonThree.addEventListener('click', toggleSidebar);
    const menuImg = document.createElement('img');
    menuImg.src = menuImgNew;
    menuImg.alt = 'menu';
    menuButtonThree.appendChild(menuImg);
    titleRow.appendChild(menuButtonThree);
    titleRow.appendChild(titleInfo);


    const hours = document.createElement('div');
    hours.classList.add('section');
    const hoursTitle = document.createElement('div');
    hoursTitle.classList.add('hours-title');
    hours.appendChild(hoursTitle);
    hoursTitle.innerHTML = 'Opening Hours';
    infoWrapper.appendChild(hours);

    const monThu = document.createElement('div');
    monThu.innerHTML = 'Mon - Thu: 8AM - 8PM';
    monThu.classList.add('days');
    hours.appendChild(monThu);
    monThu.appendChild(document.createElement('br'));
    monThu.innerHTML += 'Fri - Sun: 8AM - 3PM';

    content.appendChild(infoWrapper);

    const address = document.createElement('div');
    address.classList.add('section');
    const addressTitle  = document.createElement('div');
    addressTitle.classList.add('hours-title');
    address.appendChild(addressTitle);
    addressTitle.innerHTML = 'Location';
    infoWrapper.appendChild(address);
    const addressBody = document.createElement('div');
    addressBody.classList.add('days');
    address.appendChild(addressBody);
    addressBody.innerHTML += 'P. Sherman 42, Wallaby Way';
    addressBody.appendChild(document.createElement('br'));
    addressBody.innerHTML += 'Directions: ';
    addressBody.appendChild(document.createElement('br'));
    addressBody.innerHTML += '1. Start at the Cityville Central Station.';
    addressBody.appendChild(document.createElement('br'));
    addressBody.innerHTML += '2. Make some turns';
    addressBody.appendChild(document.createElement('br'));
    addressBody.innerHTML += '3. ???';
    addressBody.appendChild(document.createElement('br'));
    addressBody.innerHTML += '4. Yeah!';



    

}

export {loadInfo};
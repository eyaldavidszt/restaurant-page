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
    hours.classList.add('hours');
    const hoursTitle = document.createElement('div');
    hoursTitle.classList.add('hours-title');
    hours.appendChild(hoursTitle);
    hoursTitle.innerHTML = 'Opening Hours';
    infoWrapper.appendChild(hours);

    const monThu = document.createElement('div');

    content.appendChild(infoWrapper);

}

export {loadInfo};
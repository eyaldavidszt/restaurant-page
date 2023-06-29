import './style.css';
import menuImg from './menu.svg';
import bgImg from './cafe-bg.jpg';
import expandImg from './expand-arrow.png';

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active-sidebar');
}

function pageLoad() {

    const container = document.createElement('div');
    container.classList.add('container');
    
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    
    const sidebarTop = document.createElement('div');
    sidebarTop.classList.add('top-row');
    
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-button');
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', toggleSidebar);

    sidebarTop.appendChild(closeBtn);
    
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');
    
    const sidebarContentItem = document.createElement('button');
    sidebarContentItem.classList.add('sidebar-content-item');
    sidebarContentItem.textContent = 'Home';
    
    const sidebarContentItemTwo = document.createElement('button');
    sidebarContentItemTwo.classList.add('sidebar-content-item');
    sidebarContentItemTwo.textContent = 'Menu';
    
    const sidebarContentItemThree = document.createElement('button');
    sidebarContentItemThree.classList.add('sidebar-content-item');
    sidebarContentItemThree.textContent = 'Info and hours';
    
    sidebarContent.appendChild(sidebarContentItem);
    sidebarContent.appendChild(sidebarContentItemTwo);
    sidebarContent.appendChild(sidebarContentItemThree);

    const sidebarBot = document.createElement('div');
    sidebarBot.classList.add('bottom-row-address');
    sidebarBot.textContent = 'Giano Nox, since 1989';
    
    sidebar.appendChild(sidebarTop);
    sidebar.appendChild(sidebarContent);
    sidebar.appendChild(sidebarBot);
    
    container.appendChild(sidebar);
    
    const bg = document.createElement('img');
    bg.src = bgImg;
    bg.classList.add('bg-image');
    bg.alt = 'cafe background';

    container.appendChild(bg);
    
    const stickyNav = document.createElement('div');
    stickyNav.classList.add('sticky-nav');
    
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu');
    menuBtn.type = 'button';
    menuBtn.addEventListener('click', toggleSidebar);
    
    const menu = document.createElement('img');
    menu.src = menuImg;
    menu.alt = 'menu';
    menuBtn.appendChild(menu);
    stickyNav.appendChild(menuBtn);
    const mainName = document.createElement('div');
    mainName.classList.add('main-name');
    mainName.textContent = 'Giano Nox Café';
    stickyNav.appendChild(mainName);
    
    container.appendChild(stickyNav);
    
    const centerText = document.createElement('div');
    centerText.classList.add('center-text');
    const hr = document.createElement('hr');
    // centerText.innerHTML = `a cozy experience ${hr} heart of the city`;
    centerText.innerHTML = `a cozy experience`;
    centerText.appendChild(hr);
    centerText.innerHTML += `heart of the city`;

container.appendChild(centerText);

const credit = document.createElement('div');
credit.classList.add('credit');
const artistLink = document.createElement('a');
artistLink.href = 'https://unsplash.com/@kalljet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
artistLink.textContent = 'Katarzyna Grabowska';
const webLink = document.createElement('a');
webLink.href = 'https://unsplash.com/photos/dvdPiqndrdU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
webLink.textContent = 'unsplash';
// credit.innerHTML = `Photo by ${artistLink} on ${webLink}`;
credit.innerHTML = `Photo by `;
credit.appendChild(artistLink);
credit.innerHTML += ` on `;
credit.appendChild(webLink);

container.appendChild(credit);

const downArrow = document.createElement('img');
downArrow.classList.add('arrow-down');
downArrow.alt = 'expand arrow';
downArrow.src = expandImg;
container.appendChild(downArrow);

return container;
}


export {pageLoad};



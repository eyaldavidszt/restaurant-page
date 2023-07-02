import { bottomPageLoad } from "./bottomPageLoad";
import { loadInfo } from "./loadInfo";
import { loadMenu } from "./loadMenu";
import { pageLoad } from "./pageLoad";
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active-sidebar');
}

function makeSidebar() {
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
    sidebarContentItem.addEventListener('click', pageLoad);
    sidebarContentItem.addEventListener('click', bottomPageLoad);

    
    const sidebarContentItemTwo = document.createElement('button');
    sidebarContentItemTwo.classList.add('sidebar-content-item');
    sidebarContentItemTwo.classList.add('first-menu-btn');
    sidebarContentItemTwo.textContent = 'Menu';

    sidebarContentItemTwo.addEventListener('click', loadMenu);

    const sidebarContentItemThree = document.createElement('button');
    sidebarContentItemThree.classList.add('sidebar-content-item');
    sidebarContentItemThree.textContent = 'Info and hours';
    sidebarContentItemThree.addEventListener('click', loadInfo);
    sidebarContent.appendChild(sidebarContentItem);
    sidebarContent.appendChild(sidebarContentItemTwo);
    sidebarContent.appendChild(sidebarContentItemThree);

    const sidebarBot = document.createElement('div');
    sidebarBot.classList.add('bottom-row-address');
    sidebarBot.textContent = 'Giano Nox, since 1989';
    
    sidebar.appendChild(sidebarTop);
    sidebar.appendChild(sidebarContent);
    sidebar.appendChild(sidebarBot);

    return sidebar;
}

export {makeSidebar};
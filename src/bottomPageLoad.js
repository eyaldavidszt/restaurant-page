import './style.css';
import foodImg from './food.jpg';
import foodImg2 from './food2.jpg';
import foodImg3 from './food3.jpg';

import infoImg from './info1.jpg';
import infoImg2 from './info2.jpg';
import infoImg3 from './info3.jpg';

function bottomPageLoad() {

    
    
    const homePageScrolled = document.createElement('div');
    homePageScrolled.classList.add('home-page-scrolled');
    
    const scrolledBoxOne = document.createElement('div');
    scrolledBoxOne.classList.add('scrolled-box-one');
    
    homePageScrolled.appendChild(scrolledBoxOne);
    
    
    const scrolledBoxText = document.createElement('div');
    scrolledBoxText.classList.add('scrolled-box-text');
    
    scrolledBoxOne.appendChild(scrolledBoxText);
    
    const scrolledBoxHeader = document.createElement('div');
    scrolledBoxHeader.classList.add('scrolled-box-header');
    scrolledBoxHeader.textContent = 'About the menu...';
    
    scrolledBoxText.appendChild(scrolledBoxHeader);
    
    const scrolledBoxBody = document.createElement('div');
    scrolledBoxBody.classList.add('scrolled-box-body');
    scrolledBoxBody.innerHTML ='Where culinary excellence meets cozy ambiance. Our menu features juicy burgers, aromatic coffees, and fresh pastries.';
    const br = document.createElement('br');
    scrolledBoxBody.appendChild(br);
    scrolledBoxBody.appendChild(document.createElement('br'));
    scrolledBoxBody.innerHTML += 'Come see what we offer.';
    
    scrolledBoxText.appendChild(scrolledBoxBody);
    
    const bigMenuBtn = document.createElement('button');
    bigMenuBtn.classList.add('bigMenuBtn');
    bigMenuBtn.textContent ='MENU';
    
    scrolledBoxText.appendChild(bigMenuBtn);
    
    const imgsWrapper = document.createElement('div');
    imgsWrapper.classList.add('images-wrapper');
    
    scrolledBoxOne.appendChild(imgsWrapper);
    
    const scrolledImgWrapper = document.createElement('div');
scrolledImgWrapper.classList.add('scrolled-box-img-wrapper');

const foodImgOne = document.createElement('img');
foodImgOne.src = foodImg;
foodImgOne.alt = 'burger';

scrolledImgWrapper.appendChild(foodImgOne);

imgsWrapper.appendChild(scrolledImgWrapper);

const scrolledImgWrapperTwo = document.createElement('div');
scrolledImgWrapperTwo.classList.add('scrolled-box-img-wrapper');

const foodImgTwo = document.createElement('img');
foodImgTwo.src = foodImg2;
foodImgTwo.alt = 'iced coffee';

scrolledImgWrapperTwo.appendChild(foodImgTwo);

imgsWrapper.appendChild(scrolledImgWrapperTwo);

const scrolledimgwrapperThree = document.createElement('div');
scrolledimgwrapperThree.classList.add('scrolled-box-img-wrapper');

const foodImgThree = document.createElement('img');
foodImgThree.src = foodImg3;
foodImgThree.alt = 'pastry';

scrolledimgwrapperThree.appendChild(foodImgThree);

imgsWrapper.appendChild(scrolledimgwrapperThree);


//now 2nd row with a box that contains an images wrapper, 
//with 3 img wrappers and 3 images. then a text with header+body

const scrolledBoxTwo = document.createElement('div');
scrolledBoxTwo.classList.add('scrolled-box-one');
homePageScrolled.appendChild(scrolledBoxTwo);

const imgsWrapperTwo = document.createElement('div');
imgsWrapperTwo.classList.add('images-wrapper');
scrolledBoxTwo.appendChild(imgsWrapperTwo);

const scrolledImgWrapperFour = document.createElement('div');
scrolledImgWrapperFour.classList.add('scrolled-box-img-wrapper');

const infoImgOne = document.createElement('img');
infoImgOne.src = infoImg;
infoImgOne.alt = 'open sign';

scrolledImgWrapperFour.appendChild(infoImgOne);

imgsWrapperTwo.appendChild(scrolledImgWrapperFour);

//
const scrolledImgWrapperFive = document.createElement('div');
scrolledImgWrapperFive.classList.add('scrolled-box-img-wrapper');

const infoImgTwo = document.createElement('img');
infoImgTwo.src = infoImg2;
infoImgOne.alt = 'scenic view';

scrolledImgWrapperFive.appendChild(infoImgTwo);

imgsWrapperTwo.appendChild(scrolledImgWrapperFive);
//
const scrolledImgWrapperSix = document.createElement('div');
scrolledImgWrapperSix.classList.add('scrolled-box-img-wrapper');

const infoImgThree = document.createElement('img');
infoImgThree.src = infoImg3;
infoImgThree.alt = 'cafe';

scrolledImgWrapperSix.appendChild(infoImgThree);

imgsWrapperTwo.appendChild(scrolledImgWrapperSix);
//
const scrolledboxTextTwo = document.createElement('div');
scrolledboxTextTwo.classList.add('scrolled-box-text');

scrolledBoxTwo.appendChild(scrolledboxTextTwo);

const scrolledBoxHeaderTwo = document.createElement('div');

scrolledboxTextTwo.appendChild(scrolledBoxHeaderTwo);
scrolledBoxHeaderTwo.classList.add('scrolled-box-header');
scrolledBoxHeaderTwo.innerHTML = 'About us...';

const scrolledBoxBodyTwo = document.createElement('div');
scrolledboxTextTwo.appendChild(scrolledBoxBodyTwo);

scrolledBoxBodyTwo.classList.add('scrolled-box-body');
scrolledBoxBodyTwo.innerHTML = "We're a place that almost never closes. Located at the city center, we promise a vibrant atmosphere that's easy to get to!";
scrolledBoxBodyTwo.appendChild(br);
scrolledBoxBodyTwo.appendChild(document.createElement('br'));
scrolledBoxBodyTwo.innerHTML += "Find out more about opening hours, location, and ways to book.";

const bigInfoBtn = document.createElement('button');
scrolledboxTextTwo.appendChild(bigInfoBtn);
bigInfoBtn.classList.add('bigMenuBtn');
bigInfoBtn.innerHTML = 'INFO';


const footer = document.createElement('div');
footer.classList.add('footer');

footer.innerHTML = 'card picture credits&nbsp;:&nbsp;';

const creditOne = document.createElement('a');
creditOne.href = 'https://unsplash.com/it/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditOne.innerHTML = 'ål nik,&nbsp;';
footer.appendChild(creditOne);


const creditTwo = document.createElement('a');
creditTwo.href = 'https://unsplash.com/@pariwatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditTwo.innerHTML = 'pariwat pannium,&nbsp;';
footer.appendChild(creditTwo);

const creditThree = document.createElement('a');
creditThree.href = 'https://unsplash.com/@montatip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditThree.innerHTML = 'montatip lilitsanong,&nbsp;';
footer.appendChild(creditThree);


const creditFour = document.createElement('a');
creditFour.href = 'https://unsplash.com/@hgullixson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditFour.innerHTML = 'Hannah Gullixson,&nbsp;';
footer.appendChild(creditFour);

const creditFive = document.createElement('a');
creditFive.href = 'https://unsplash.com/@shobhitsharma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditFive.innerHTML = 'Shobhit Sharma,&nbsp;';
footer.appendChild(creditFive);

const creditSix = document.createElement('a');
creditSix.href = 'https://unsplash.com/@moisamihai092?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
creditSix.innerHTML = 'Mihai Moisa';

footer.appendChild(creditSix);
footer.innerHTML += '&nbsp:)';
    return [homePageScrolled, footer];
}

export { bottomPageLoad };









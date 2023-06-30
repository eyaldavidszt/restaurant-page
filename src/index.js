import {pageLoad} from "./pageLoad";
import { bottomPageLoad } from "./bottomPageLoad";


const content = document.querySelector('#content');

const container = pageLoad();

content.appendChild(container);

// ^^ works!


const [bottomPage, footer] = bottomPageLoad();



content.appendChild(bottomPage);

content.appendChild(footer);

//now: tab switching logic.
import headerUnderline from "./headerUnderline";
import headerTabs from "./headerTabs"
import mainTabs from "./mainTabs"
import cropText from "./cropText";

document.addEventListener('DOMContentLoaded', ()=> {
    // header underline function
    headerUnderline({
        wrapSelector: '.nav',
        reduceUnderline: 20,
        maxWidth: 1100
    });

    // header tabs function
    headerTabs('.nav', '.nav__item', '.main-item', 'active');

    // main tabs function
    mainTabs();

    // croptext
    cropText('.content__subtitle', 90, '.tabs-block', '.tabs__item')
})
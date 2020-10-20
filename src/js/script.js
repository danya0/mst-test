// * headerUnderline
import headerUnderline from "./headerUnderline";
import headerTabs from "./headerTabs"

document.addEventListener('DOMContentLoaded', ()=> {
    // header underline function
    setTimeout(()=> {
        headerUnderline({
            wrapSelector: '.nav',
            reduceUnderline: 20,
        });
    }, 100);
    // header tabs function
    headerTabs('.nav', '.nav__item', '.main-item', 'active')
})
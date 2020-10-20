// * headerUnderline
import headerUnderline from "./headerUnderline";
import tabs from "./tabs"

document.addEventListener('DOMContentLoaded', ()=> {
    // header underline function
    setTimeout(()=> {
        headerUnderline({
            wrapSelector: '.nav',
            reduceUnderline: 20,
        });
    }, 100);
    // header tabs function
    // tabs('.nav', '.nav__item', '.main-item', 'active')
})
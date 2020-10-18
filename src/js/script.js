// * headerUnderline
import headerUnderline from "./headerUnderline";

document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(()=> {
        headerUnderline({
            wrapSelector: '.nav',
            reduceUnderline: 20,
        });
    }, 100)
})
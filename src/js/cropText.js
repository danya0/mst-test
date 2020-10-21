const cropFunction = (cropSelector, maxHeight, tabsSelector, tabsItemsSelector) => {
    const cropItem = document.querySelectorAll(cropSelector),
        tabs = document.querySelector(tabsSelector),
        tabsItems = document.querySelectorAll(tabsItemsSelector);

    function cropCurrentItem(i) {
        const span = cropItem[i].firstChild;
        const linkBlock = cropItem[i].lastChild;
        console.log(cropItem[i].clientHeight);
        if(cropItem[i].clientHeight > maxHeight) {
            let text = '';
            if (window.innerWidth > 320) {
                text = cropItem[i].textContent.substring(0, 35 * 3);
            } else {
                // ? Поддержка экранов 320px
                text = cropItem[i].textContent.substring(0, 25 * 3);
            }
            span.textContent = text;
            linkBlock.style.display = 'inline-block';
        }
    }

    tabs.addEventListener('click', (e)=> {
        const target = e.target;
        if(target.classList.contains(tabsItemsSelector.replace(/\./, ''))) {
            tabsItems.forEach((item, i)=> {
                if(target == item) {
                    cropCurrentItem(i);
                }
            });
        }
    });

    cropCurrentItem(0);
}

export default cropFunction;

const cropFunction = (cropSelector, maxHeight, tabsSelector, tabsItemsSelector) => {
    const cropItems = document.querySelectorAll(cropSelector),
        tabs = document.querySelector(tabsSelector),
        tabsItems = document.querySelectorAll(tabsItemsSelector);


    let currentItem = 0;

    tabs.addEventListener('click', (e)=> {
        const target = e.target;
        if(target.classList.contains(tabsItemsSelector.replace(/\./, ''))) {
            tabsItems.forEach((item, i)=> {
                if(target == item) {
                    cropThisItem(i);
                    currentItem = i;
                }
            });
        }
    });

    // * Рекурсивная функция которая уменьшает текст до трёх строк
    function cropThisItem(ind, n = 45) {
        const span = cropItems[ind].firstChild;
        const linkBlock = cropItems[ind].lastChild;

        if(cropItems[ind].clientHeight > maxHeight) {
            let text = '';
            text = cropItems[ind].textContent.substring(0, n * 3);
            span.textContent = text;
            cropThisItem(ind, n - 7);
            linkBlock.style.display = 'inline-block';
        } else {
            return;
        }
    }
    cropThisItem(0)

    window.addEventListener('resize', ()=> {
        cropThisItem(currentItem);
    });

}

export default cropFunction;

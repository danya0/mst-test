const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    let tabActive = 0;
    // * Функиця которая скрывает таб
    function hideTabContent(prevIndex) {
        content.forEach(item => {
            item.classList.remove(activeClass);
            // ? Удаляем элемент после анимации
        })
        setTimeout(() => {
            content[prevIndex].style.display = 'none';
        }, 300);
    }
    
    // * Функиця которая показывает конкретный таб
    function showTabContent(i) {
        content[i].style.display = 'block';
        content[i].classList.add(activeClass);
    }

    // * Вызов функции
    hideTabContent();
    showTabContent(tabActive);

    header.addEventListener('click', (e)=> {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((item, i)=> {
                if(target == item || target.parentNode == item) {
                    hideTabContent(tabActive)
                    showTabContent(i);
                    tabActive = i;
                }
            });
        }

    });
}

export default tabs;

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    let indexActiveTab = 0;

    // * Функиця которая скрывает таб
    function hideTabContent(prevIndex, nextIndex) {
        if (prevIndex === nextIndex) {
            return;
        }
        content.forEach(item => {
            item.style.zIndex = 0;
            item.classList.remove(activeClass);
        })
        setTimeout(() => {
            content[prevIndex].style.display = 'none';
        }, 300);
    }
    
    // * Функиця которая показывает конкретный таб
    function showTabContent(i) {
        content[i].style.position = 'static';
        content[i].style.display = 'block';
        content[i].style.zIndex = 3;
        setTimeout(() => {
            content[i].classList.add(activeClass);
        }, 10);
    }

    // * Вызов функции
    hideTabContent();
    showTabContent(indexActiveTab);

    // * Прослушка и делегирование событий
    header.addEventListener('click', (e)=> {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((item, i)=> {
                if(target == item || target.parentNode == item) {
                    hideTabContent(indexActiveTab, i)
                    showTabContent(i);
                    indexActiveTab = i;
                }
            });
        }

    });

}

export default tabs;

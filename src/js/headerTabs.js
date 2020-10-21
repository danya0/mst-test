const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    let indexActiveTab = 0;
    let aviableNow = true;

    // * Функиця которая скрывает таб
    function hideTabContent(prevIndex, nextIndex) {
        if (prevIndex === nextIndex) {
            return;
        }
        setTimeout(() => {
            if(indexActiveTab !== prevIndex) {
                content[prevIndex].style.display = 'none';
            }
        }, 300);
        content.forEach(item => {
            item.style.zIndex = -1;
            item.style.position = 'absolute';
            item.classList.remove(activeClass);
        })
    }
    
    // * Функиця которая показывает конкретный таб
    function showTabContent(i) {
        content[i].style.display = 'block';
        content[i].style.position = 'static';
        content[i].style.zIndex = 3;
        setTimeout(() => {
            content[i].classList.add(activeClass);
        }, 10);
    }

    // * Вызов функции
    hideTabContent();

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

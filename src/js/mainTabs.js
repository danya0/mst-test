const mainTabs = () => {
    const header = document.querySelector('.tabs-block'),
        tabSelector = '.tabs__item',
        tabs = document.querySelectorAll(tabSelector),
        inputs = document.querySelectorAll('.tabs__input'),
        textContent = document.querySelectorAll('.content-block'),
        imageContent = document.querySelectorAll('.content-image-block'),
        counter = document.querySelector('.content__counter span');

    let indexActiveTab = 0;
    let aviableNow = true;

    function determDirectionTextContent(item, direction) {
        item.classList.add(direction);
            item.style.display = 'flex';
            setTimeout(() => {
                item.classList.remove(direction);
            }, 10);
    }

    // * Функция которая меняет объект
    function switchItem(current, prev) {
        if (current === prev) {
            return
        }

        // ? Counter
        counter.textContent = current + 1 + ' ';

        // ? Работа с текстовыми блоками
        textContent[prev].classList.add('hide');
        setTimeout(() => {
            textContent[prev].style.display = 'none';
            textContent[current].style.position = 'static';
        }, 300);
        textContent[current].style.maxWidth = textContent[prev].clientWidth + 'px';
        textContent[current].style.position = 'absolute';
        textContent[current].classList.remove('hide');

        // ? Проверка в какую сторону происходит переход
        if(current > prev) {
            // ? Работа с текстовыми блоками
            determDirectionTextContent(textContent[current], 'fromBottom');
            
            // ? Работа с image блоками
            imageContent[current].classList.remove('hidden');
            for(let i = current; i > 0; i--) {
                imageContent[i].classList.remove('hidden');
            }
        } else {
            // ? Работа с текстовыми блоками
            determDirectionTextContent(textContent[current], 'fromTop');
            
            // ? Работа с image блоками
            imageContent[current].classList.remove('hidden');
            for(let i = current + 1; i < imageContent.length; i++) {
                imageContent[i].classList.add('hidden');
            }
        }
    }

    header.addEventListener('click', (e)=> {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, '')) && aviableNow) {
            aviableNow = false;

            tabs.forEach((item, i)=> {
                if(target == item) {
                    switchItem(i, indexActiveTab)
                    indexActiveTab = i;
                }
            });
            inputs.forEach(item => {
                setTimeout(() => {
                    item.setAttribute('disabled', 'true');
                }, 5);
                setTimeout(() => {
                    item.removeAttribute('disabled');
                }, 310);
            })

            setTimeout(() => {
                aviableNow = true;
            }, 300);
        }
    });
}

export default mainTabs;
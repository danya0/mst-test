export default function underline({wrapSelector, itemsBetween, reduceUnderline}) {
    const wrap = document.querySelector(wrapSelector),
    items = wrap.querySelectorAll('*');

    // ? Создание underline
    const underline = document.createElement('div');
    underline.classList.add('underline');
    wrap.appendChild(underline);

    let activeItem = 0; // ? Текущий выделенный элемент

    // * Функция для быстрого доступа к стилям underlin'a
    function underlineStyle({l, r}) {
        if(l || l === 0 || l === '') {
            l = '' ? underline.style.left = '' : underline.style.left = `${l}px`;
        }
        if(r || r === 0 || r === '') {
            r = '' ? underline.style.right = '' : underline.style.right = `${r}px`;
        }
    }

    // * Универсальная функция для подсчёта длин.
    function drawUnderline(start, end) {
        activeItem = start;

        let prevBetween = 0;
        let nextBetween = 0;

        if (end === undefined) { // Расположение underline для одного элемента
            for(let i = 0; i < start; i++) {
                prevBetween += items[i].clientWidth;
            }
            reduceUnderline ? prevBetween += reduceUnderline : null;
            for(let i = start + 1; i < items.length; i++) {
                nextBetween += items[i].clientWidth;
            }
            reduceUnderline ? nextBetween += reduceUnderline : null;
        } else if (start === end) { 
            return
        } else { // Расположение underline для нескольких элементов
            if (start < end) { // Вправо
                for(let i = 0; i < start; i++) {
                    prevBetween += items[i].clientWidth;
                }
                reduceUnderline ? prevBetween += reduceUnderline : null;
                for(let i = end + 1; i < items.length; i++) {
                    nextBetween += items[i].clientWidth;
                }
                reduceUnderline ? nextBetween += reduceUnderline : null;
            } else { // Влево
                for(let i = 0; i < end; i++) {
                    prevBetween += items[i].clientWidth;
                }
                reduceUnderline ? prevBetween += reduceUnderline : null;
                for(let i = start + 1; i < items.length; i++) {
                    nextBetween += items[i].clientWidth;
                }
                reduceUnderline ? nextBetween += reduceUnderline : null;
            }
        }
        setUnderlineOnPosition(prevBetween, nextBetween)
    }

    // * Функция подчёркивания.
    function setUnderlineOnPosition(prevBetween, nextBetween) {

        if(itemsBetween) { // ? Если указаны отступы между элементами
            underlineStyle({
                l: prevBetween + itemsBetween*(start + 1),
                r: nextBetween + itemsBetween*(items.length - start)
            })
        } else { // ? Без поддержки отступов между элементами
            underlineStyle({l: prevBetween, r: nextBetween})
        }
    }

    // * Прослушка событий
    items.forEach((item,index) => {
        item.addEventListener('click', ()=> {
            drawUnderline(index);
        })
        item.addEventListener('mouseover', ()=> {
            drawUnderline(activeItem, index);
        })
        item.addEventListener('mouseleave', ()=> {
            drawUnderline(activeItem)
        })
    })

    drawUnderline(activeItem);
}
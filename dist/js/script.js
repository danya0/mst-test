"use strict";

// * headerUnderline
function underline(_ref) {
  var wrapSelector = _ref.wrapSelector,
      itemsBetween = _ref.itemsBetween,
      reduceUnderline = _ref.reduceUnderline;
  var wrap = document.querySelector(wrapSelector),
      items = wrap.querySelectorAll('*'); // ? Создание underline

  var underline = document.createElement('div');
  underline.classList.add('underline');
  wrap.appendChild(underline);
  var activeItem = 0; // ? Текущий выделенный элемент
  // * Функция для быстрого доступа к стилям underlin'a

  function underlineStyle(_ref2) {
    var l = _ref2.l,
        r = _ref2.r;

    if (l || l === 0 || l === '') {
      l = '' ? underline.style.left = '' : underline.style.left = "".concat(l, "px");
    }

    if (r || r === 0 || r === '') {
      r = '' ? underline.style.right = '' : underline.style.right = "".concat(r, "px");
    }
  } // * Универсальная функция для подсчёта длин.


  function drawUnderline(start, end) {
    activeItem = start;
    var prevBetween = 0;
    var nextBetween = 0;

    if (end === undefined) {
      // Расположение underline для одного элемента
      for (var i = 0; i < start; i++) {
        prevBetween += items[i].clientWidth;
      }

      reduceUnderline ? prevBetween += reduceUnderline : null;

      for (var _i = start + 1; _i < items.length; _i++) {
        nextBetween += items[_i].clientWidth;
      }

      reduceUnderline ? nextBetween += reduceUnderline : null;
    } else if (start === end) {
      return;
    } else {
      // Расположение underline для нескольких элементов
      if (start < end) {
        // Вправо
        for (var _i2 = 0; _i2 < start; _i2++) {
          prevBetween += items[_i2].clientWidth;
        }

        reduceUnderline ? prevBetween += reduceUnderline : null;

        for (var _i3 = end + 1; _i3 < items.length; _i3++) {
          nextBetween += items[_i3].clientWidth;
        }

        reduceUnderline ? nextBetween += reduceUnderline : null;
      } else {
        // Влево
        for (var _i4 = 0; _i4 < end; _i4++) {
          prevBetween += items[_i4].clientWidth;
        }

        reduceUnderline ? prevBetween += reduceUnderline : null;

        for (var _i5 = start + 1; _i5 < items.length; _i5++) {
          nextBetween += items[_i5].clientWidth;
        }

        reduceUnderline ? nextBetween += reduceUnderline : null;
      }
    }

    setUnderlineOnPosition(prevBetween, nextBetween);
  } // * Функция подчёркивания.


  function setUnderlineOnPosition(prevBetween, nextBetween) {
    if (itemsBetween) {
      // ? Если указаны отступы между элементами
      underlineStyle({
        l: prevBetween + itemsBetween * (start + 1),
        r: nextBetween + itemsBetween * (items.length - start)
      });
    } else {
      // ? Без поддержки отступов между элементами
      underlineStyle({
        l: prevBetween,
        r: nextBetween
      });
    }
  } // * Прослушка событий


  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      drawUnderline(index);
    });
    item.addEventListener('mouseover', function () {
      drawUnderline(activeItem, index);
    });
    item.addEventListener('mouseleave', function () {
      drawUnderline(activeItem);
    });
  });
  drawUnderline(activeItem);
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    underline({
      wrapSelector: '.nav',
      reduceUnderline: 20
    });
  }, 100);
});
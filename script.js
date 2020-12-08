'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.create = function(text) {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
    }
    elem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
    `;
    elem.textContent = text;
    document.body.insertAdjacentElement('beforeend', elem);
};

const obj = new DomElement('#block', '100px', '100px', 'orange', '20px');

document.addEventListener('DOMContentLoaded', obj.create('Lets move!'));

const square = document.querySelector(obj.selector);
square.style.position = 'absolute';
square.style.top = '0px';
square.style.left = '0px';

const moveElem = function(event) {
    if (event.code === 'ArrowRight') {
        square.style.left = parseInt(square.style.left) + 10 + 'px';
    }
    if (event.code === 'ArrowLeft') {
        square.style.left = parseInt(square.style.left) - 10 + 'px';
    }
    if (event.code === 'ArrowUp') {
        square.style.top = parseInt(square.style.top) - 10 + 'px';
    }
    if (event.code === 'ArrowDown') {
        square.style.top = parseInt(square.style.top) + 10 + 'px';
    }
};

document.addEventListener('keydown', moveElem);
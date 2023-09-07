import Person from './person.js';

const jane = Person('Jane', 20, false, 'https://picsum.photos/200');
const mary = Person('Mary', 23, false, 'https://picsum.photos/200?grayscale');
const charles = Person('Charles', 30, true, 'https://picsum.photos/seed/picsum/200');

document.addEventListener("DOMContentLoaded", function() {
    const janeElement = document.getElementById('jane');
    janeElement.querySelector('img').src = jane.avatar;
    janeElement.querySelector('.info').textContent = jane.getInfo;

    const maryElement = document.getElementById('mary');
    maryElement.querySelector('img').src = mary.avatar;
    maryElement.querySelector('.info').textContent = mary.getInfo;

    const charlesElement = document.getElementById('charles');
    charlesElement.querySelector('img').src = charles.avatar;
    charlesElement.querySelector('.info').textContent = charles.getInfo;
});

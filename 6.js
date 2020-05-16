
let cover = document.querySelector('.cover');

let img = [
	'изображение_viber_2020-05-15_13-24-54.png',
	'изображение_viber_2020-05-15_13-25-34.png',
	'изображение_viber_2020-05-15_13-26-10.png',
	'изображение_viber_2020-05-15_13-26-34.png',
	'изображение_viber_2020-05-15_13-27-17.png',
	'изображение_viber_2020-05-15_13-27-52.png',
	'изображение_viber_2020-05-15_13-28-25.png',
	'изображение_viber_2020-05-15_13-28-53.png',
	'изображение_viber_2020-05-15_13-30-24.png',
	'изображение_viber_2020-05-15_13-31-33.png',
	'изображение_viber_2020-05-15_13-33-20.png',
	'изображение_viber_2020-05-15_13-34-30.png',
	'изображение_viber_2020-05-15_13-35-07.png',
	'изображение_viber_2020-05-15_13-39-13.png',
	'изображение_viber_2020-05-15_13-39-51.png',
	'изображение_viber_2020-05-15_13-41-01.png',
	'изображение_viber_2020-05-15_13-42-26.png',
	'изображение_viber_2020-05-15_13-43-23.png',
	'изображение_viber_2020-05-15_13-48-51.png'
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function randInt(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function init() {
    shuffle(img);
    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = `url('./images/${img[i]}')`;
        card.style.backgroundSize = 'cover';
        card.style.transform = `rotate(${randInt(-15, 15)}deg) translate(${randInt(-40, 40)}px, ${randInt(-40, 40)}px)`;
        cover.append(card);
    }
}

init();
let count = img.length;
cover.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        event.target.classList.add('go');
        count--;
    }
    if (count == 0) {
       let deletedCards = document.querySelectorAll('.card');
        for (let i = 0; i < deletedCards.length; i++) {
            deletedCards[i].remove();
        }
        init();
        count = img.length;
    }
});


const images = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp',];

const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs');


//definire variabili che contengono stringhe delle immagini items e thumbs
let itemsContent = '';
let thumbsContent = '';


//definire indice array che rappresenta l'immagine attiva
let activeItem = 0;


//tasti avanti e indietro
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


//ciclo array per riempire le stringhe con immagini
for(let i=0; i<images.length; i++){

    itemsContent+=`<div class="item">
                        <img src="./${images[i]}" alt="image">
                    </div>`;

    thumbsContent+=`<div class="thumb">
                        <img src="./${images[i]}" alt="image">
                    </div>`;
}


//Innietto in Items e thumbs html creato
items.innerHTML = itemsContent;
thumbs.innerHTML = thumbsContent;


// Applico variabile activeItem per applicare la classe active all'elemento corrente;

document.getElementsByClassName('item')[activeItem].classList.add('active');
document.getElementsByClassName('thumb')[activeItem].classList.add('active');


//aggiungo evento con prev e next

prev.addEventListener('click', function(){
    if(activeItem === 0){
        activeItem = images.lenght -1;
    }
    else{
        activeItem--;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
})

next.addEventListener('click', function(){
    if(activeItem === images.lenght -1){
        activeItem = 0;
    }
    else{
        activeItem++;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
})



'use strict'
let attmpet = 0;
let maxAttempt = 25;
let attmptsE1 = document.getElementById('attempt');
let products =[];

function ProuductImage(productName) {
 
    this.productName = productName.split('.')[0];
    this.source = 'assets/' + productName;
    this.clicks = 0;
    this.views = 0;
    products.push(this);
}

let productImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

for (let i = 0; i < productImg.length; i++) {
    new ProuductImage(productImg[i]);

    
}

function generateImage() {
    
    return Math.floor(Math.random() * products.length);
}


let limdEl = document.getElementById('leftImg');
let mimdEl = document.getElementById('midImg');
let rimdEl = document.getElementById('rightImg');

let leftImgIndex;
let midImgIndex;
let rightImgIndex;

function renderImg(){

 leftImgIndex = generateImage();
 midImgIndex = generateImage();
 rightImgIndex = generateImage();


 while (leftImgIndex === rightImgIndex ||  midImgIndex === rightImgIndex 
    || leftImgIndex === midImgIndex ) {
    leftImgIndex = generateImage();
    rightImgIndex = generateImage()


}

limdEl.setAttribute('src', products[ leftImgIndex].source);
limdEl.setAttribute('title', products[ leftImgIndex].source)
products[ leftImgIndex].viwe++;


mimdEl.setAttribute('src', products[ midImgIndex].source);
mimdEl.setAttribute('title', products[ midImgIndex].source)
products[ midImgIndex ].viwe++;


rimdEl.setAttribute('src', products[ rightImgIndex].source);
rimdEl.setAttribute('title', products[ rightImgIndex].source)
products[ rightImgIndex].viwe++;


attmptsE1.textContent = attmpet;


}

renderImg();

limdEl.addEventListener('click', handelClicks);
mimdEl.addEventListener('click', handelClicks);
rimdEl.addEventListener('click', handelClicks);

function handelClicks(event){
    attmpet++;

    if (attmpet <= maxAttempt) {

        if (event.target.id === 'leftImg') {
            products[leftImgIndex].clicks++;

}
else if 
    (event.target.id === 'midImg') {
        products[ midImgIndex].clicks++;
}
else if 
    (event.target.id === 'rightImg') {
        products[rightImgIndex ].clicks++;
}

renderImg();
    }

    else {
        let ulEl = document.getElementById('results');
        let liEl;
        for (let i = 0; i < products.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${products[i].productName} has ${products[i].views} views and has ${products[i].clicks} clicks.`
        }
        limdEl.removeEventListener('click', handelClicks);
        mimdEl.removeEventListener('click', handelClicks);
        rimdEl.removeEventListener('click', handelClicks)

}

}

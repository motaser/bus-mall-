'use strict'
let attmpet = 0;
let maxAttempt = 25;
let attmptsE1 = document.getElementById('attempt');
let products =[];
let productsA = [];
let viewsA = [];
let clicksA=[];
let z =[];
function ProuductImage(productName) {
 
    this.productName = productName.split('.')[0];
    this.source = 'assets/' + productName;
    this.clicks = 0;
    this.views = 0;
    products.push(this);
    productsA.push(  this.productName);
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
    || leftImgIndex === midImgIndex ||  z.includes(leftImgIndex) || z.includes( midImgIndex) || z.includes( rightImgIndex) )  {
    leftImgIndex = generateImage();
    rightImgIndex = generateImage();
    midImgIndex = generateImage();


}


limdEl.setAttribute('src', products[ leftImgIndex].source);
limdEl.setAttribute('title', products[ leftImgIndex].source)
products[ leftImgIndex].views++;


mimdEl.setAttribute('src', products[ midImgIndex].source);
mimdEl.setAttribute('title', products[ midImgIndex].source)
products[ midImgIndex ].views++;


rimdEl.setAttribute('src', products[ rightImgIndex].source);
rimdEl.setAttribute('title', products[ rightImgIndex].source)
products[ rightImgIndex].views++;


attmptsE1.textContent = attmpet;


console.log(z);

//while ( z.includes(leftImgIndex) || z.includes( midImgIndex) || z.includes( rightImgIndex) ) {

   // leftImgIndex = generateImage();
   // midImgIndex = generateImage();
    //rightImgIndex = generateImage();

//}

z = [leftImgIndex,  midImgIndex, rightImgIndex ]

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
        
        viewsA.push(products[i].views);
        clicksA.push(products[i].clicks);
    }
        limdEl.removeEventListener('click', handelClicks);
        mimdEl.removeEventListener('click', handelClicks);
        rimdEl.removeEventListener('click', handelClicks)
        chartRender();

}

}
function chartRender(){

    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productsA ,
        datasets: [{
            label: '# of click',
            data: clicksA,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
           
            ],
            borderWidth: 1
        },
        {
            label: '# of vewis',
            data: viewsA,
            backgroundColor: [
                ,
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}

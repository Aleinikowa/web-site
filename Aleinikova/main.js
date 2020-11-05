let menu = document.getElementById('menuBurgerJS'),
    menuBurger = document.getElementById('BurgerJS'),
    listLang =  document.getElementsByClassName('listLang')[0],
    listBtn = document.getElementById('selectedLang');

menu.onclick = () => {
    menuBurger.classList.toggle('show');
}    

listBtn.onclick = () => {
    listLang.classList.toggle('show');
}

let position = 0;
const track = document.querySelector('.slider-track'),
    span = document.getElementsByClassName('slider-span'),
    btnPrev = document.getElementsByClassName('comments-block__left')[0],
    btnNext = document.getElementsByClassName('comments-block__right')[0];

window.onload = () => {
    let width = document.documentElement.clientWidth;
    track.style.transform = `translateX(0px)`;
    position = 0;

    if (width > 860 && width < 1200) {
        showCarouselWithTwoItems();
    }  else if (width <= 860) {
        showSmallCarousel();
    }
     else {
        showBigCarousel();
    }
};

window.addEventListener('resize', function(){
    let width = document.documentElement.clientWidth;
    track.style.transform = `translateX(0px)`;
    position = 0;

    if (width > 860 && width < 1200) {
        showCarouselWithTwoItems();
    }  else if (width <= 860) {
        showSmallCarousel();
    }
     else {
        showBigCarousel();
    }

});        

function showCarouselWithTwoItems() {
    const item = document.getElementsByClassName('card'),
        itemWidth = item[0].offsetWidth,
        movePosition = itemWidth + 10;

        for (let value of item) {
            value.style.width = `400px`;
        };
    
    btnPrev.onclick = () => {
        position += movePosition;
        track.style.transform = `translateX(${position}px)`;

        checkBtns(itemWidth);
    };
    
    btnNext.onclick = () => {
        position -= movePosition;
        track.style.transform = `translateX(${position}px)`;

        checkBtns(itemWidth);
    };

    checkBtns(itemWidth);
}

function showBigCarousel() {
    const item = document.getElementsByClassName('card'),
        itemWidth = item[0].offsetWidth,
        movePosition = itemWidth + 15;
        
    for (let value of item) {
        value.style.width = `570px`;
    };

    btnPrev.onclick = () => {
        position += movePosition;
        track.style.transform = `translateX(${position}px)`;

        let spanData = document.getElementById('span1'),
            counter = spanData.getAttribute('data-counter');
            tempSpan = span[counter - 2];

        tempSpan.classList.add('color');
        span[counter - 1].classList.remove('color');
        spanData.dataset.counter = counter - 1;

        checkBtns(itemWidth);
    };
    
    btnNext.onclick = () => {
        position -= movePosition;

        track.style.transform = `translateX(${position}px)`;
        let spanData = document.getElementById('span1'),
            counter = spanData.getAttribute('data-counter'),
            tempSpan = span[counter];

        tempSpan.classList.add('color');
        span[--counter].classList.remove('color');
        spanData.dataset.counter =  counter + 2;

        checkBtns(itemWidth);
    }    
    
    checkBtns(itemWidth);
}

function showSmallCarousel() {
    const item = document.getElementsByClassName('card'),
        windowWidth = window.innerWidth;        

    for (let value of item) {
        value.style.width = `${windowWidth - 2}px`;
    };

    btnPrev.onclick = () => {
        position += windowWidth ;
        track.style.transform = `translateX(${position}px)`;

        checkBtns();
    };
    
    btnNext.onclick = () => {
        position -= windowWidth;
        track.style.transform = `translateX(${position}px)`;

        checkBtns();
    };
    
    checkBtns();

    function checkBtns() {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(windowWidth * 3);
    };
}

const checkBtns = (itemWidth) => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemWidth * 2);
};
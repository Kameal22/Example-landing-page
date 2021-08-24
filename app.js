const logoSpan = document.querySelectorAll('.hidden');

logoSpan[0].classList.remove('hidden');
logoSpan[1].classList.remove('hidden');

setTimeout(function () {
    logoSpan[0].classList.add('hidden');
    logoSpan[1].classList.add('hidden');
}, 2000);

const mainPhoto = document.querySelector('.mainPhoto');

let isFirstPhoto = false;

let isScdPhoto = false;

const imagesContainer = document.querySelector('.mainMiddleRight');
const images = ["G6.JPG", "G7.JPG", "InsideFront.JPG"];

setInterval(changeImages, 5000);

let img = document.createElement('img');
img.src = images[2];
img.className = 'mainPhoto';
imagesContainer.appendChild(img);

let currImage = 0;

changeImages();


function changeImages() {
    if (currImage === 0) {
        new Promise((resolve, reject) => setTimeout(() => { img.className = 'mainPhotoOut'; resolve() }, 3800))
            .then(() => setTimeout(() => {
                img.src = images[1];
                img.className = 'mainPhoto';
            }, 700));

        currImage = 1;
    } else {
        new Promise((resolve, reject) => setTimeout(() => { img.className = 'mainPhotoOut'; resolve() }, 3800))
            .then(() => setTimeout(() => {
                img.src = images[0];
                img.className = 'mainPhoto';
            }, 700));

        currImage = 0;
    }
}

const tests = document.querySelector('.testy');

tests.classList.remove('testy');
tests.classList.add('testyHidden');

setTimeout(function () {
    tests.classList.remove('testyHidden');
    tests.classList.add('testy');
}, 2000);

const odczulanie = document.querySelector('.odczulanie');

odczulanie.classList.remove('odczulanie');
odczulanie.classList.add('odczulanieHidden');

setTimeout(function () {
    odczulanie.classList.remove('odczulanieHidden');
    odczulanie.classList.add('odczulanie');
}, 2800);

const terapia = document.querySelector('.terapia');

terapia.classList.remove('terapia');
terapia.classList.add('terapiaHidden');

setTimeout(function () {
    terapia.classList.remove('terapiaHidden');
    terapia.classList.add('terapia');
}, 3600);

const changeSceneBtn = document.querySelector('.indicator');

const goBackBtn = document.querySelector('.scdIndicator');

const mainScene = document.querySelector('main');
const mainNav = document.querySelector('nav');

const scdScene = document.querySelector('.scd');

scdScene.style.display = "none";

// mainScene.style.display = "none";

changeSceneBtn.addEventListener('click', () =>{
    mainScene.className = 'mainFadeOut';
    mainNav.classList = 'mainFadeOut';
    setTimeout(function () {
        mainScene.style.display = "none";
        mainNav.style.display = "none";
        setTimeout(function () {
            mainNav.style.display = "flex";
            mainNav.className = 'contentIn';
            scdScene.style.display = "flex";
            scdScene.className = 'contentIn';
        }, 0.01);
    }, 1500);
})

goBackBtn.addEventListener('click', () =>{
    scdScene.className = 'mainFadeOut';
    mainNav.classList = 'mainFadeOut';
    setTimeout(function () {
        scdScene.style.display = "none";
        mainNav.style.display = "none";
        setTimeout(function () {
            mainNav.style.display = "flex";
            mainNav.className = 'contentIn';
            mainScene.style.display = "flex";
            mainScene.className = 'contentIn';
        }, 0.01);
    }, 1500);
})
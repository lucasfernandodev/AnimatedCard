
const card = document.querySelector('.card');
const container = document.querySelector('.container')

const title =  document.querySelector('.title');
const sneaker =  document.querySelector('.sneaker img');
const purchase =  document.querySelector('.purchase button');
const description =  document.querySelector('.info h3');
const sizes =  document.querySelector('.sizes');


// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})

// Animete In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    title.style.transform = 'translateZ(135px)';
    sneaker.style.transform = 'translateZ(180px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(75px)';
    purchase.style.transform = 'translateZ(50px)';
})

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition = 'all 0.5s ease';

    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0) rotateZ(0deg)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0)';
})



const cardElements     = document.querySelectorAll(".s-card");
const carouselButtons  = document.querySelectorAll(".s-controller__button");
const buttonLeft       = document.querySelector(".s-controller__rewind");
const buttonRight      = document.querySelector(".s-controller__ff");

function handleMouseEnter(){
    this.classList.add("s-card--hovered"); 
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove("s-card--hovered");
    document.body.id="";
}

function addEventListenersToCards(){

    cardElements.forEach((card) => {

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    });
}

function handleCarrouselButtonClick(){
    selectCarouselItem(this.id);
}

function addEventListenersToCarouselButton(){
    carouselButtons.forEach( (button) => {        
        button.addEventListener('click',handleCarrouselButtonClick);
    });    
}

function handleCarrouselButtonNavigatorLeftClick()
{
    const button = document.querySelector(".s-controller__button--active");
    var id = Number(button.id);    

    if (id === 1){
       id = 3;
    }else{
        id--;
    } 

    selectCarouselItem(id);
}

function handleCarrouselButtonNavigatorRightClick()
{
    const button = document.querySelector(".s-controller__button--active");    
    var id = Number(button.id);    

     if (id === 3){
        id = 1;
     }else{
        id++;
     } 

    selectCarouselItem(id);    
}

function addEventListenersToNavigatorButton(){
    
    buttonLeft.addEventListener('click',handleCarrouselButtonNavigatorLeftClick);
    buttonRight.addEventListener('click',handleCarrouselButtonNavigatorRightClick);
}

function selectCarouselItem(selectedItem){

    const carousel = document.querySelector(".s-cards-carousel");
    carouselButtons.forEach(button => {button.classList.remove("s-controller__button--active")});

    const carrouselElements = document.getElementById(selectedItem);

    carrouselElements.classList.add("s-controller__button--active");

    const rotateDeg = -120 *(Number(selectedItem)-1);
    
    carousel.style.transform = `translateZ(-40Vw) rotateY(${rotateDeg}deg)`;
}

addEventListenersToCards();
addEventListenersToCarouselButton();
addEventListenersToNavigatorButton();
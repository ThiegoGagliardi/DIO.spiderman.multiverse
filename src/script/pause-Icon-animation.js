const mainContent = document.getElementsByClassName("s-main-content")[0];
const video       = document.querySelectorAll(".s-wrapper video")[0];
const pauseButton = document.getElementsByClassName("pause-icon")[0];    

function handlePauseButtonClick() {

    const key = this.dataset.bg;
    video.classList.toggle("hidden");  
    mainContent.classList.toggle(key);
}

function addEventListenersToPauseIcon() {   
   pauseButton.addEventListener("click", handlePauseButtonClick);
}    

addEventListenersToPauseIcon();


const imageContainers = document.querySelectorAll('.card');

imageContainers.forEach((imageContainer) => {
    const hoverImage = imageContainer.querySelector('.card img'); 
 
    imageContainer.addEventListener('mouseover', () => {
        hoverImage.style.transform = 'scale(1.2)'; 
    });

  
    imageContainer.addEventListener('mouseout', () => {
        hoverImage.style.transform = 'scale(1)'; 
    });
});

var home = $(".home");

home.click(() => {
    window.location.href = "/profile-submit";
});
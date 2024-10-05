const texts = [
    'Connect, Share, Thrive!',
    'Empowering Community Through Collaborative Consumption'
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 50;
const erasingSpeed = 50;
const newTextDelay = 1000;
const textElement = document.getElementById('text');
function type() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, newTextDelay);
    }
}
let count=0;
function cursor(){
    if(count%2==0){
        textElement.style.borderRight='none';
        count++;
        setTimeout(cursor,300)
    }
    else{
        textElement.style.borderRight='1px solid white';
        count++;
        setTimeout(cursor,300)
    }
    
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay + 250);
    cursor();
});
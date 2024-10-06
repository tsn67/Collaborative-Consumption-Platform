
function scrollToForm() {
    document.querySelector('#donation-form').scrollIntoView({ behavior: 'smooth' });
}


function submitDonation(event) {
    event.preventDefault(); 
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = "Donation noted successfully! We will come to pick up the book.";
    successMessage.style.display = 'block';
}

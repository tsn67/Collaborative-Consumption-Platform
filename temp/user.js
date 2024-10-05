// Simulating profile data
const profileData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contact: '123-456-7890',
    location: 'New York, USA'
};

// Function to display profile information
function displayProfile() {
    document.getElementById('user-name').innerText = profileData.name;
    document.getElementById('user-email').innerText = profileData.email;
    document.getElementById('user-contact').innerText = profileData.contact;
    document.getElementById('user-location').innerText = profileData.location;
}

// Call the function when the page loads
window.onload = displayProfile;

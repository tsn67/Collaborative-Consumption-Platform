document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const editImgBtn = document.getElementById('edit-img-btn');
    const profileImg = document.getElementById('profile-img');
    const uploadImg = document.getElementById('upload-img');

    const usernameInput = document.getElementById('username');
    const saveNameBtn = document.getElementById('save-name');

    const bioInput = document.getElementById('bio');
    const saveBioBtn = document.getElementById('save-bio');

    const locationInput = document.getElementById('location');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const saveContactInfoBtn = document.getElementById('save-contact-info');

    var userImg = null; // Variable for storing the image

    // Event listeners

    // Edit profile picture
    editImgBtn.addEventListener('click', () => {
        uploadImg.click(); // Trigger the hidden file input
    });

    uploadImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profileImg.src = reader.result; // Update the profile image with the uploaded one
                userImg = file; // Store the file for the form submission
            };
            reader.readAsDataURL(file);
        }
    });

    // Save name
    saveNameBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            alert(`Name saved as: ${username}`);
        } else {
            alert('Please enter a valid name.');
        }
    });

    // Save bio
    saveBioBtn.addEventListener('click', () => {
        const bio = bioInput.value.trim();
        if (bio) {
            alert('Bio saved!');
        } else {
            alert('Please write a bio.');
        }
    });

    // Save contact info
    saveContactInfoBtn.addEventListener('click', () => {
        const location = locationInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (location && email && phone) {
            alert(`Contact info saved! Location: ${location}, Email: ${email}, Phone: ${phone}`);
        } else {
            alert('Please fill out all contact info fields.');
        }
    });

    // Submit form using fetch API
    document.querySelector('.submit-btn').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const bio = bioInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const location = locationInput.value.trim();

        // Create a FormData object to hold the form data
        const formData = {
            "name": username,
            "bio": bio,
            "phone": phone,
            "email": email,
            "location": location,
            "imgurl": userImg,
        }
        

        window.location.href =`/profile-submit?data=${JSON.stringify(formData)}`
    });
});

// Image upload
const profileImg = document.getElementById('profile-img');
const uploadImg = document.getElementById('upload-img');
const editImgBtn = document.getElementById('edit-img-btn');

editImgBtn.addEventListener('click', () => {
    uploadImg.click();
});

uploadImg.addEventListener('change', () => {
    const file = uploadImg.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImg.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Save bio
const bio = document.getElementById('bio');
const saveBioBtn = document.getElementById('save-bio');

saveBioBtn.addEventListener('click', () => {
    alert('Bio saved: ' + bio.value);
});

// Star rating
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
        ratingText.textContent = `Rated ${rating} out of 5`;
    });
});

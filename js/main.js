
// Remove subscribe form

const closeBtn = document.querySelector('.subscribe-input__close'),
    subscribeInput = document.querySelector('.subscribe-input');

closeBtn.addEventListener('click', function () {
    subscribeInput.classList.remove('active');
})

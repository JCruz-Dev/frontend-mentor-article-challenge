const shareIcon =  document.querySelector('.share-icon');
const shareSocials =  document.querySelector('.share-socials');
shareIcon.addEventListener('click', (e) => {
    e.preventDefault();
    shareSocials.classList.toggle('display-social');
    shareIcon.classList.toggle('share-icon-light-bg');
})
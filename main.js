const switchBtn = document.querySelector('.switch_btn')
const popup = document.querySelector('.popup')

const activeToggle = () => {
    popup.classList.toggle('active');
    switchBtn.classList.toggle('active')
}

switchBtn.addEventListener('click', () => activeToggle())
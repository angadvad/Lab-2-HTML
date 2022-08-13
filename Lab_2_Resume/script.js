
const {slideToggle, slideUp, slideDown} = window.domSlider

const flexSingle = document.querySelector('.flexSingle')

flexSingle.addEventListener('click', function(e) {
    const nextSibling = e.target.nextElementSibling;

    if (!nextSibling.classList.contains('content')) {
        return false
    }
    slideToggle({element: nextSibling})
})
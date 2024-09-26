const accordianHeaders = document.querySelectorAll('.question__box--title');
const accordianContents = document.querySelectorAll('.question__box--answer');

accordianHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const accordianContent = header.nextElementSibling; 
        accordianContent.classList.toggle("active");
        const iconImage = header.querySelector('.icon');

        accordianContents.forEach((content) => {
            if (content !== accordianContent){
                content.classList.remove("active");
                content.style.maxHeight = 0
                const inactiveIcon = content.previousElementSibling.querySelector('.icon'); 
                inactiveIcon.src = "./assets/images/icon-plus.svg";
            }
        })

        if (accordianContent.classList.contains("active")){
            iconImage.src = "./assets/images/icon-minus.svg"
            accordianContent.style.maxHeight = accordianContent.scrollHeight + "px";
        } else {
            accordianContent.style.maxHeight = "0";
            iconImage.src = "./assets/images/icon-plus.svg"
        }
    });
});

window.addEventListener('load', function() {
    function changeImageSrc() {
        const image = document.getElementById('myimage');
        if (window.innerWidth < 600) {
            image.src = './assets/images/background-pattern-mobile.svg';
        } else {
            image.src = './assets/images/background-pattern-desktop.svg';
        }
    }

    changeImageSrc();
    window.addEventListener('resize', changeImageSrc);
});
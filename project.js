Fancybox.bind('[data-fancybox="gallery-photo"]', {

});


if (document.querySelector(".gallery-buttons")) {

    let galleryButtons = document.querySelectorAll('.gallery-buttons button');
    let gallery = document.querySelectorAll('.gallery-col');

    galleryButtons[0].classList.add('active');

    galleryButtons.forEach((button) => {
        button.addEventListener('click', function () {
            let galleryID = button.getAttribute('data-id');

            for (let i = 0; i < galleryButtons.length; i++) {
                galleryButtons[i].classList.remove('active');
            }
            button.classList.add('active');


            if (galleryID === '0') {
                for (let i = 0; i < gallery.length; i++) {
                    gallery[i].classList.remove('d-none');
                }
            }
            else {
                let filteredGallery = Array.from(gallery).filter(
                    (gallery) => gallery.getAttribute('data-category-id') === galleryID
                );
                for (let i = 0; i < gallery.length; i++) {
                    gallery[i].classList.add('d-none');
                }
                for (let i = 0; i < filteredGallery.length; i++) {
                    filteredGallery[i].classList.remove('d-none');
                }
            }
        });
    });
}


let scrollButton = document.querySelector(".page-scroll-button");
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (this.scrollY > 300) {
        header.classList.add("fixed-top");
        scrollButton.classList.remove("d-none");
    } else {
        header.classList.remove("fixed-top");
        scrollButton.classList.add("d-none");
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});


if (document.querySelector(".counter-span")) {
    let counterItem = document.querySelectorAll(".counter-item");
    let valueDisplays = document.querySelectorAll(".counter-span");
    let interval = 4000;
    let counterStatus = Array(counterItem.length).fill(false);
  
    window.addEventListener("scroll", () => {
      counterItem.forEach((item, index) => {
        let position = item.offsetTop - 500;
        if (window.scrollY > position) {
          counterStatus[index] = true;
        }
      });
    });
  
    valueDisplays.forEach((valueDisplays, index) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        if (counterStatus[index] == true) {
          startValue += 1;
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }
      }, duration);
    });
}


let pageLinksWrapper = document.querySelectorAll('.page-links');
let sections = document.querySelectorAll('section');
let mainSections = Array.from(sections).filter((section) => section.getAttribute('data-scroll') === 'true');

pageLinksWrapper.forEach((wrapper) => {
    let links = wrapper.querySelectorAll('a');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let position = mainSections[index].offsetTop - 110;
            window.scrollTo(0, position);
            for(let i = 0; i < links.length; i++){
                links[i].classList.remove('active')
            }
            link.classList.add('active')
        })
    })
})
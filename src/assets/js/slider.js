// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// Select all slides part 2
const slides2 = document.querySelectorAll(".slide-1");

// loop through slides and set each slides translateX
slides2.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide2 = document.querySelector(".btn-next-1");

// current slide counter
let curSlide2 = 0;
// maximum number of slides
let maxSlide2 = slides2.length - 1;

// add event listener and navigation functionality
nextSlide2.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide2 === maxSlide2) {
        curSlide2 = 0;
    } else {
        curSlide2++;
    }

    //   move slide by -100%
    slides2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
    });
});

// select next slide button
const prevSlide2 = document.querySelector(".btn-prev-1");

// add event listener and navigation functionality
prevSlide2.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide2 === 0) {
        curSlide2 = maxSlide2;
    } else {
        curSlide2--;
    }

    //   move slide by 100%
    slides2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
    });
});
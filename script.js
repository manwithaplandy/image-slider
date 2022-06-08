let crumbs = document.getElementsByClassName("crumb");
let images = document.getElementsByClassName("img");

const nextButton = document.getElementById("nav-button-next");
const prevButton = document.getElementById("nav-button-prev");

let currentSlide = 0;
let maxSize = images.length - 1;

const nextImage = function (index, maxSize) {
  // Make current image inactive and next image active
  console.log(`index: ${index}`);
  const currentimg = images[index];
  let nextimg;
  if (index < maxSize) {
    nextimg = images[index + 1];
  } else {
    nextimg = images[0];
  }
  currentimg.classList.remove("active");
  nextimg.classList.add("active");

  //Set new crumb as well
  const currentcrumb = crumbs[index];
  let nextcrumb;
  if (index < maxSize) {
    nextcrumb = crumbs[index + 1];
  } else {
    nextcrumb = crumbs[0];
  }
  currentcrumb.classList.remove("active");
  nextcrumb.classList.add("active");

  console.log(`nextCrumb: ${nextcrumb}`);
  console.log(`currentSlide: ${currentSlide}`);

  //Increment/reset currentSlide count
  if (currentSlide < maxSize) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
};

const prevImage = function (index) {
  // Make current image inactive and next image active
  console.log(`index: ${index}`);
  const currentimg = images[index];
  let nextimg;
  if (index > 0) {
    nextimg = images[index - 1];
  } else {
    nextimg = images[maxSize];
  }
  currentimg.classList.remove("active");
  nextimg.classList.add("active");

  //Set new crumb as well
  const currentcrumb = crumbs[index];
  let nextcrumb;
  if (index > 0) {
    nextcrumb = crumbs[index - 1];
  } else {
    nextcrumb = crumbs[maxSize];
  }
  currentcrumb.classList.remove("active");
  nextcrumb.classList.add("active");

  console.log(`nextCrumb: ${nextcrumb}`);
  console.log(`currentSlide: ${currentSlide}`);

  //Increment/reset currentSlide count
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = maxSize;
  }
};

// Set event listener to go to next image
nextButton.addEventListener("click", () => nextImage(currentSlide, maxSize));
prevButton.addEventListener("click", () => prevImage(currentSlide, maxSize));

// Every 5 seconds change image
setInterval(() => nextImage(currentSlide, maxSize), 5000);

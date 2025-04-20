const images = [
    "../images/c++.png",
    "../images/html.png",
    "../images/js.png",
    "../images/htmll.jpg",
    "../images/css.webp",
  ];
  
  let currentIndex = 0;
  const slide = document.getElementById("slide");
  
  function showSlide(index) {
    slide.src = images[index];
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  
  function autochange() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    }, 3000);
  }
  
  window.onload = () => {
    showSlide(currentIndex);
    autochange();
  };
  
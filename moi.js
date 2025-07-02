window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".line1").classList.add("visible");
  }, 1000);  

  setTimeout(() => {
    document.querySelector(".line2").classList.add("visible");
  }, 2000);  

  setTimeout(() => {
    document.querySelector(".insta-link").classList.add("visible");
    document.querySelector(".gallery-row").classList.add("visible");
  }, 3500); 
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

     
      
// const readMoreBtn = document.querySelector(".read-more-btn");
// const text = document.querySelector(".text");

// readMoreBtn.addEventListener("click", (e) => {
//   text.classList.toggle("show-more");
//   if (readMoreBtn.innerText === "Read More") {
//     readMoreBtn.innerText = "Read Less";
//   } else {
//     readMoreBtn.innerText = "Read More";
//   }
// });

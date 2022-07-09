const scrollbtn = document.querySelector(".scrollbtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollbtn.classList.add("active");
  } else {
    scrollbtn.classList.remove("active");
  }
});

const handleData = ()=>{ 
document.getElementById("form").reset();
alert("Submitted. ✔️")
}

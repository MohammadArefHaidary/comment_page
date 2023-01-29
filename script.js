function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("button6");
  //   var btnText1 = document.getElementById("button6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "بیشتر";
    // btnText1.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "کمتر";
    // btnText1.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

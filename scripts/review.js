console.log("review recharged");
let numberReviews = Number(localStorage.getItem("numberOfReviews")) || 0;

numberReviews++;
localStorage.setItem("numberOfReviews", numberReviews);
document.getElementById("number-of-reviews").textContent = numberReviews;